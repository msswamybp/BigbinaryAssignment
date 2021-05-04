/*
 * Reducer actions related with About screen
 */
import * as types from "./actionTypes";


export function enableLoader(params) {

    return {
        type: types.ENABLE_LOADER,
        params
    };
}
export function captureData(params) {

    return {
        type: types.CAPTURE_DATA,
        params
    };
}
export function reverseResponse(response) {
    return {
        type: types.REVERSE_RESPONSE,
        response
    };
}//setFirstTimedate
export function setFirstTimedate(response) {

    return {
        type: types.SETFIRST_TIMEDATE,
        response
    };
}
export function gecodeResponse(response) {

    return {
        type: types.GECODE_RESPONSE,
        response
    };
}
//gecodeResponse
export function geocodingApi(param) {


    return {
        type: types.GEOCODING_API,
        param
    };
}
export function revercegeocodingApi(param) {


    return {
        type: types.REVERCE_GEOCODING_API,
        param
    };
}

export function disableLoader() {
    return {
        type: types.ABOUT_DISABLE_LOADER
    };
}