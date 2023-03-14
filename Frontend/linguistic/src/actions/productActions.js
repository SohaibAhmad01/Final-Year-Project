import axios from 'axios'
import { 
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,

    //Twitter
    TWITTER_LIST_REQUEST,
    TWITTER_LIST_SUCCESS,
    TWITTER_LIST_FAIL,
    TWITTER_LIST_RESET,

    PRODUCT_CREATE_REVIEW_REQUEST,
    PRODUCT_CREATE_REVIEW_SUCCESS,
    PRODUCT_CREATE_REVIEW_FAIL,
} from '../constants/productConstants'

export const listProducts = ()=> async (dispatch) => {
    try{
        dispatch({type:PRODUCT_LIST_REQUEST})
        const {data} = await axios.get('http://127.0.0.1:8000/api/twitter/elonmusk/')
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })
    }
    catch (error){
        dispatch(
            {
                type: PRODUCT_LIST_FAIL,
                payload:error.response && error.response.data.message
                    ?error.response.data.message
                    :error.message
            }
        )
    }
}

// export const queryTwitter = (query) => async (dispatch, getState) =>{
//     try{
//         dispatch({
//             type: TWITTER_LIST_REQUEST
//         })

//         const {data} = await axios.post(
//             `http://localhost:8000/api/queryTwitter/`,
//             query
//         )

//         dispatch({
//             type:  TWITTER_LIST_SUCCESS,
//             payload: data
//         })
    
//     }
//     catch(error){
//         dispatch({
//             type: TWITTER_LIST_FAIL,
//             payload: error.response && error.response.data.detail
//                 ? error.response.data.detail
//                 :error.message,
//         })
//     }
// }

export const queryTwitter = (query) => async (dispatch) => {
    try {
        dispatch({
            type: TWITTER_LIST_REQUEST,
        })

        const { data } = await axios.post(
            `http://localhost:8000/api/queryTwitter/`,
            {query} 
        )
            console.log(data)
        dispatch({
            type:  TWITTER_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: TWITTER_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const createProductReview = (query) => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_CREATE_REVIEW_REQUEST
        })

        const { data } = await axios.post(
           `http://localhost:8000/api/queryTwitter/`,
            {query}
        )

        dispatch({
            type: PRODUCT_CREATE_REVIEW_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_CREATE_REVIEW_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}