//import constants from "./types";
//import {getInventoryRequest} from './Inventory/action';
import { takeLatest, takeEvery, all } from "redux-saga/effects";

function* watchActions() {
    console.log("getInventoryRequest");
    
    yield takeLatest(constants.GET_INVENTORY_REQUEST, getInventoryRequest);
}

export default function* watcher() {
    //yield all([watchActions()]);
}