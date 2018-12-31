import {
    ADD_MY_MESSAGES, CHECK_KEYS, INIT_MY_MESSAGES, LOAD_DIALOGS, LOG_OUT, LOGGED_IN, SET_CURRENT_DIALOG, SET_KEYS,
    SET_MY_MESSAGES,
    SET_SESSION
} from "../actions/actions";

const initialState = {
    dialogs                 : [],
    currentDialog           : null,
    currentDialogMessages   : null,
    loggedIn                : false,
    user                    : null,
    myMessages              : {},
    keysChecking            : false,
    publicKey               : null,
    privateKey              : null,
};

export default function ( state = initialState, action) {
    switch (action.type) {

        case SET_SESSION:
            return {
                ...state,
                loggedIn   : action.loggedIn,
                session    : action.session,
                user       : action.user
            };

        case LOGGED_IN:
            return {
                ...state,
                loggedIn : action.loggedIn,
                user     : action.user
            };

        case LOG_OUT:
            return {
                ...state,
                loggedIn    : action.loggedIn,
                user        : action.user,
            };

        case SET_CURRENT_DIALOG:
            return {
                ...state,
                currentDialog: action.currentDialog
            };

        case LOAD_DIALOGS:
            return {
                ...state,
                dialogs : action.dialogs
            };

        case INIT_MY_MESSAGES:
            return {
                ...state,
                myMessages : {
                    ...state.myMessages,
                    [action.id] : []
                }
            };

        case SET_MY_MESSAGES:
            return {
                ...state,
                myMessages : action.myMessages
            };

        case ADD_MY_MESSAGES:
            return {
                ...state,
                myMessages: {
                    ...state.myMessages,
                    [action.id] : [action.msgObj, ...state.myMessages[action.id]]
                }
            };

        case CHECK_KEYS:
            return {
                ...state,
                keysChecking: action.keysChecking
            };

        case SET_KEYS:
            return {
                ...state,
                publicKey : action.publicKey,
                privateKey : action.privateKey
            };

        default :
            return {...state};
    }
}