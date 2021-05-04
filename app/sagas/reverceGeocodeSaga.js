/*
 * Redux saga class
 * fetches the my courses
 */

import { put, call } from "redux-saga/effects";
import Reverce from "@api/methods/revercGeoCode";
import * as AboutActions from "@actions/AboutActions";

export default function* revercesAsync(action) {
    var param = action.param
  

    // yield put(AboutActions.enableLoader());
    try {
        const response = yield call(Reverce, param.path);
        

        if (response.locality !== '' || response.city !== '') {
            var object = {
                date: param.date,
                main: response

            }
            yield put(AboutActions.enableLoader(false));
            yield put(AboutActions.reverseResponse(object));

        } else {

            yield put(AboutActions.enableLoader(false));
        }
    } catch (error) {

        yield put(AboutActions.enableLoader(false));
    }
}