import React,{useState, useEffect} from "react";
import Header from "./Component/Header";
import VerticalMenu from "./Component/VerticalMenu";
import Footer from "./Component/Footer";
import { Helmet } from "react-helmet";
import MainCss from "./CSS/MainCss.module.css";
import { Link } from "react-router-dom";

import { queryTwitter } from './actions/productActions'
import {TWITTER_LIST_RESET} from './constants/productConstants'

import { createProductReview } from './actions/productActions'
import { PRODUCT_CREATE_REVIEW_RESET } from './constants/productConstants'

import {useDispatch, useSelector} from 'react-redux'
import {Form, Button} from "react-bootstrap";

function Main(match){
    const [comment, setComment] = useState('')

    const dispatch = useDispatch()

    const twitterCreateQuery = useSelector(state => state.twitterCreateQuery)
    const {
        loading: loadingTwitterQuery,
        error:   errorTwitterQuery,
        success: successTwitterQuery,
    } = twitterCreateQuery


    useEffect(()=>{

        if(successTwitterQuery){
            setComment('')
            dispatch({type:TWITTER_LIST_RESET})
        }

    },[dispatch,successTwitterQuery])

        const submitHandler = (e) => {
            e.preventDefault()
            dispatch(queryTwitter(
                comment
            ))
        }
        
    return(
        <div>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Linguistic_Processor</title>
                <meta name="description" content="linguistic Processor"></meta>
            </Helmet>
            <div class={MainCss.nav}> <Header/></div>
            
            <div class={MainCss.grad}>
                <div class="ui grid">
                    <div class="three wide column">                
                      <VerticalMenu/>
                    </div>
                     <div class="twelve wide column">
                        <div class="ui card" id={MainCss.card}>
                            <div class="content">
                                <div  class="Header" id={MainCss.icon}>
                                    <i class="massive red youtube icon"></i>
                                </div> 
                            </div>
                            <div class="content">
                                <div class="" id={MainCss.subheading}>
                                    Turn an inspirational quote into visual story
                                </div>
                            </div>
                            <div class="content">
                                <Form onSubmit={submitHandler}>
                                    <Form.Group controllId = 'term'>
                                        <Form.Label style={{fontFamily:'Raleway', fontSize:18}}>Enter Search Term:</Form.Label><br/>

                                        <Form.Control
                                            as='input'
                                            row='5'
                                            value={comment}
                                            onChange={(e) => setComment(e.target.value)}
                                            style={{width:400, height:35, borderRadius:70}}
                                        ></Form.Control>
                                           <Form.Label style={{fontFamily:'Raleway', fontSize:18}}>Select Criteria::</Form.Label><br/>

                                        <Form.Control
                                            as='input'
                                            row='5'
                                            value={comment}
                                            onChange={(e) => setComment(e.target.value)}
                                            style={{width:400, height:35, borderRadius:70}}
                                        ></Form.Control> 

                                    </Form.Group>

                                    <Button
                                        type='submit'
                                        variant='primary'
                                        style={{width:100, height:40, marginLeft:290, marginTop:5, borderRadius:50, backgroundColor:"black", color:"white", border:"1" }}
                                    >
                                        <Link to='/Result' style={{color:"white"}}>Submit </Link>
                                    </Button>    
                                </Form>
                            </div>

                        </div>
                    </div>           
                </div>
            </div> 
            <Footer/>
        </div>
    )
}
export default Main
