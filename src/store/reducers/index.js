import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';

import { authentication } from './authentication.reducer';
import { registration } from './user.reducer';
import storage  from 'redux-persist/lib/storage';

const persistConfig = {
    key :'root',
    storage,
    whitelist :['registration','authentication']

}

const rootReducers = combineReducers({
    authentication,
    registration
});
 



export default persistReducer(persistConfig,rootReducers);
