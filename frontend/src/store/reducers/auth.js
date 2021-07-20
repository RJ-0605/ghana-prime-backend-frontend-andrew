import {authActionTypes} from "../actions/auth";


const initialState = {
    isAuthenticated: false,
    user: null,
}


export const reducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case authActionTypes.SET_USER:
            return {
                ...state,
                user: payload
            }
        default:
            return initialState;
    }
}

