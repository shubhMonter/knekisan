import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import rootReducer from "./reducers"
import storage from 'redux-persist/lib/storage'
const persistConfig = {
    key: 'root',
    storage,
  }
const initialState ={}
const middleware = [thunk]
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(
    persistedReducer,
    initialState,
    compose(
        applyMiddleware(...middleware)
    )
    
    );
export const persistor =persistStore(store);

export default store