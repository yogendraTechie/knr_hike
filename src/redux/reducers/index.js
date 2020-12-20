import {combineReducers} from 'redux';

import productReducer from './productReducer'
import initLoader from './productReducer'

export default combineReducers({
    productData : productReducer,
    loaderStatus:initLoader,
})