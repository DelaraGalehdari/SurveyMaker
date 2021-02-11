import {combineReducers} from 'redux';
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form';
import surveysReducer from './surveysReducer';

export default combineReducers({
    //auth is key of authReducer
    auth:authReducer,
    form:formReducer,
    surveys:surveysReducer
});