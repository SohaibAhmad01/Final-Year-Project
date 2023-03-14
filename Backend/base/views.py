from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]

    return JsonResponse(routes,safe=False)

import twint
import pandas as pd
import nest_asyncio
nest_asyncio.apply()

@api_view(['GET'])
def twitter(request,keyword):
    print(keyword)
    c = twint.Config()
    c.Search = keyword #search keyword
    c.Limit = 10
    c.Store_csv = True
    output = keyword + '.csv'
    output = str(output)
    print(output)
    c.Output = output
    c.Hide_output = False
    c.Count = True
    c.Stats = True
    c.Resume = 'resume.txt'
    twint.run.Search(c)

    DF = pd.read_csv(output)
    id = DF['id']
    tweet = DF['tweet']

    result = []
    temp = {}

    for i in range(0,10):
        temp = {}
        temp['id'] = id[i]
        temp['tweet'] = tweet[i]
    
        result.append(temp)

    return Response(result)

@api_view(['POST'])
def queryTwitter(request):
    data = request.data
    keyword = data['query']
    print(keyword)
    c = twint.Config()
    c.Search = keyword #search keyword
    c.Limit = 10
    c.Store_csv = True
    output = keyword + '.csv'
    output = str(output)
    print(output)
    c.Output = output
    c.Hide_output = False
    c.Count = True
    c.Stats = True
    c.Resume = 'resume.txt'
    twint.run.Search(c)

    DF = pd.read_csv(output)
    id = DF['id']
    tweet = DF['tweet']

    result = []
    temp = {}

    for i in range(0,10):
        temp = {}
        temp['id'] = id[i]
        temp['tweet'] = tweet[i]
    
        result.append(temp)

    return Response(result)

# ****************************** YOUTUBE ****************************

from googleapiclient.discovery import build
api_key = "AIzaSyD6jkdPfxwBGsEfQ98s1lZqIQtKYljQ0e4"
youtube = build('youtube','v3',developerKey=api_key)

def get_videos(service, **kwargs):
    #list to store the final result
    final_results = []
    
    #Returns a collection of search results 
    #that match the query parameters specified in the API request
    results = service.search().list(**kwargs).execute()
    
    #Specifying the number of pages to paginate
    #by default it will search for only first page
    i = 0
    max_pages = 1
    while results and i < max_pages:
        final_results.extend(results['items'])
 
        # Check if another page exists
        if 'nextPageToken' in results:
            kwargs['pageToken'] = results['nextPageToken']
            results = service.search().list(**kwargs).execute()
            i += 1
        else:
            break
 
    return final_results

#video comments
def get_video_comments(service, **kwargs):
    #this function will return parent from every comment thread
    
    comments = []
    #A commentThread resource contains information about a YouTube comment thread
    results = service.commentThreads().list(**kwargs).execute()
    
    while results:
        #list of comment threads that match the request criteria
        for item in results['items']:
            comment = item['snippet']['topLevelComment']['snippet']['textDisplay']
            comments.append(comment)
        
        #it will keep on paginating untill all of comment have been scraped
        if 'nextPageToken' in results:
            kwargs['pageToken'] = results['nextPageToken']
            results = service.commentThreads().list(**kwargs).execute()
        else:
            break
 
    return comments

comments_obj = []
def search_videos_by_keyword(service, **kwargs):
    results = get_videos(service, **kwargs)
    for item in results:
        title = item['snippet']['title']
        video_id = item['id']['videoId']
        comments = get_video_comments(service, part='snippet', videoId=video_id, textFormat='plainText')
        comments_obj.append(comments)
        print(comments)

@api_view(['GET'])
def queryYouTube(request):
    keyword = "Logan Paul"
    search_videos_by_keyword(youtube, q=keyword, part='id,snippet', eventType='completed', type='video')

    final_list = []
    for comment_list in comments_obj:
        for comment in comment_list:
            final_list.append(comment)
        print(final_list)
    result = []
    temp = {}

    for i in range(0,10):
        temp = {}
        temp['id'] = i
        temp['tweet'] = final_list[i]
    
        result.append(temp)
    
    df = pd.DataFrame(final_list)  
    df.to_csv('logan paul.csv')
    #Converting result to json format        
    return Response(result)





