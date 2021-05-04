/*
 * Redux saga class
 * fetches the my courses
 */

import { put, call } from "redux-saga/effects";
import AboutUs from "@api/methods/geoCode";
import * as AboutActions from "@actions/AboutActions";

export default function* aboutUsAsync(action) {
    var param = action.param

    // yield put(AboutActions.enableLoader());
    try {
        const response = yield call(AboutUs, param.path);
      

        if (response.main) {
            var object = {
                date: param.date,
                main: response.main

            }
            yield put(AboutActions.enableLoader(false));
            yield put(AboutActions.gecodeResponse(object));

        } else {

            yield put(AboutActions.enableLoader(false));
        }
    } catch (error) {

        yield put(AboutActions.enableLoader(false));
    }
}