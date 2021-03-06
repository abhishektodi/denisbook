import {
    ADD_POST,
    FETCH_POSTS,
    GET_LIKES,
    INITIAL_POSTS_STATUS,
    LOG_OUT,
    LOGGED_IN,
    POSTS_TO_SHOW,
    SET_ERROR,
    SET_SESSION, SET_THEME,
    UNSEEN_POSTS_COUNT
} from "../actions/actions";

const initialState = {
    loggedIn        : false,
    user            : null,
    posts           : [],
    likes           : [],
    showPosts       : [],
    postsLength     : 0,
    showPostStep    : 0,
    unseenPostsCount : 0,
    themeState       : window.localStorage.getItem('theme') ? window.localStorage.getItem('theme') : 'default',
    error           : {
        isError    : false,
        errorMsg   : ''
    }
};

export default function ( state = initialState, action ) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                posts : action.posts
            };

        case ADD_POST:
            return {
                ...state,
                newPost : action.post,
                showPosts : [action.post, ...state.showPosts],
                showPostStep: state.showPostStep + 1
            };

        case INITIAL_POSTS_STATUS:
            return {
                ...state,
                postsLength : action.postsLength
            };

        case POSTS_TO_SHOW:
            return {
                ...state,
                showPosts: action.showPosts,
                showPostStep : action.showPostStep
            };

        case LOGGED_IN:
            return {
                ...state,
                loggedIn : action.loggedIn,
                user     : action.user
            };

        case SET_SESSION:
            return {
                ...state,
                loggedIn   : action.loggedIn,
                session    : action.session,
                user       : action.user
            };

        case LOG_OUT:
            return {
                ...state,
                loggedIn    : action.loggedIn,
                user        : action.user,
            };

        case SET_ERROR:
            return {
                ...state,
                error : {
                    isError     : action.error.isError,
                    errorMsg    : action.error.errorMsg
                }
            };

        case GET_LIKES:
            return {
                ...state,
                likes : [].concat( action.likes )
            };

        case UNSEEN_POSTS_COUNT:
            return {
                ...state,
                unseenPostsCount: action.count
            };

        case SET_THEME:
            return {
                ...state,
                themeState: action.theme,
            }

        default:
            return {...state};
    }
}