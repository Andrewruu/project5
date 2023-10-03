import { combineReducers } from 'redux';
import authReducer from './authReducer';
import translatorReducer from './translatorReducer';
import publisherReducer from './publisherReducer';


const rootReducer = combineReducers({
    auth: authReducer,
    translators: translatorReducer,
    publishers: publisherReducer,


});

export default rootReducer;
