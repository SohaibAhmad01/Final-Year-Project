import { 
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,

    //TWITTER
    TWITTER_LIST_REQUEST,
    TWITTER_LIST_SUCCESS,
    TWITTER_LIST_FAIL,
    TWITTER_LIST_RESET,

    //YOUTUBE
    YOUTUBE_LIST_REQUEST,
    YOUTUBE_LIST_SUCCESS,
    YOUTUBE_LIST_FAIL,
    YOUTUBE_LIST_RESET,

    PRODUCT_CREATE_REVIEW_REQUEST,
    PRODUCT_CREATE_REVIEW_SUCCESS,
    PRODUCT_CREATE_REVIEW_FAIL,
    PRODUCT_CREATE_REVIEW_RESET,

} from '../constants/productConstants'

export const productListReducer = (state = { products: [] },action) => {
    switch (action.type) { 
        case PRODUCT_LIST_REQUEST:
            return {loading: true, products: []}

        case PRODUCT_LIST_SUCCESS:
            return {loading: false, products:action.payload}

        case PRODUCT_LIST_FAIL:
            return {loading: false, error:action.payload}
        
        default:
            return state
    }
}

export const twitterCreateQueryReducer = (state = {}, action) => {
    switch (action.type) {
        case TWITTER_LIST_REQUEST:
            return { loading: true }

        case TWITTER_LIST_SUCCESS:
            return { loading: false, success: true, }

        case TWITTER_LIST_FAIL:
            return { loading: false, error: action.payload }

        case TWITTER_LIST_RESET:
            return {}

        default:
            return state
    }
}

export const youtubeCreateQueryReducer = (state = {}, action) => {
    switch (action.type) {
        case YOUTUBE_LIST_REQUEST:
            return { loading: true }

        case YOUTUBE_LIST_SUCCESS:
            return { loading: false, success: true, }

        case YOUTUBE_LIST_FAIL:
            return { loading: false, error: action.payload }

        case YOUTUBE_LIST_RESET:
            return {}

        default:
            return state
    }
}


export const productReviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_CREATE_REVIEW_REQUEST:
            return { loading: true }

        case PRODUCT_CREATE_REVIEW_SUCCESS:
            return { loading: false, success: true, }

        case PRODUCT_CREATE_REVIEW_FAIL:
            return { loading: false, error: action.payload }

        case PRODUCT_CREATE_REVIEW_RESET:
            return {}

        default:
            return state
    }
}




