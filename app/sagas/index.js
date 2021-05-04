/*
 * Redux saga class init
 * Called on app init on Entrypoint
 */
import { takeEvery } from "redux-saga/effects";
import * as actionTypes from '../actions/actionTypes';

import GeocodeSaga from "./GeocodeSaga";
import ReverceGecode from "./reverceGeocodeSaga";




export default function* watch() {

    yield takeEvery(actionTypes.GEOCODING_API, GeocodeSaga);
    yield takeEvery(actionTypes.REVERCE_GEOCODING_API, ReverceGecode);





}