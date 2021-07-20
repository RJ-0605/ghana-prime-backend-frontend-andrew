import {combineReducers} from "redux"

import * as authReducers from './auth';


const reducers = combineReducers({
    auth: authReducers.reducer,
})

export default reducers;