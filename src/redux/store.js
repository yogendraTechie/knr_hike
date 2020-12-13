import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
// import logger from 'redux-logger'
import rootReducer from './redux/reducers'
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; 
// import { composeWithDevTools } from 'redux-devtools-extension'


// const persistConfig = {
//     key: 'root',
//     storage,
//     whitelist : ['data','auth','order','userProfile','deliveryAddress']
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// const initialState = {};

const middleware = [
    thunk,
    // logger
]

const composedEnhancers = compose(
    applyMiddleware(...middleware),
      // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default () => {

    // const store = createStore(persistedReducer, initialState, composedEnhancers);
    //return { store, persistor: persistStore(store) };

    const store = createStore(rootReducer,composedEnhancers);

    return { store };
};
