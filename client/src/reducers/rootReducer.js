import { combineReducers } from 'redux';
import authReducer from './authReducer';
import translatorReducer from './translatorReducer';
import publisherReducer from './publisherReducer';
import novelReducer from './novelReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    translators: translatorReducer,
    publishers: publisherReducer,
    novels: novelReducer,

});

export default rootReducer;
