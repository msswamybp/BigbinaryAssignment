
import createReducer from "@lib/createReducer";
import * as actionTypes from "@actions/actionTypes";

const initialState = {
    isenableLoader: false,
    isFirstTime: true

};

export const homeReducer = createReducer(initialState, {//SETFIRST_TIMEDATE

    [actionTypes.CAPTURE_DATA](state, action) {

        return {
            ...state,
            homeReducerdata: action.params
        };
    },
    [actionTypes.SETFIRST_TIMEDATE](state, action) {

        return {
            ...state,
            isFirstTime: false,
            saveFirstdate: action.response
        };
    },
    [actionTypes.ENABLE_LOADER](state, action) {

        return {
            ...state,
            isenableLoader: action.params
        };
    },
    [actionTypes.REVERSE_RESPONSE](state, action) {
        var arr = []


        var location
        if (action.response['main']['city'] || action.response['main']['locality']) {
            if (action.response['main']['city'] !== '') {
                location = action.response['main']['city']
            }
            else {
                location = action.response['main']['locality']
            }

        }
        if (state.homeReducerdata !== undefined && state.homeReducerdata !== null) {
            var arrlist = state.homeReducerdata

            for (let i = 0; i < arrlist.length; i++) {

                if (arrlist[i]['today'] === action.response['date']) {
                    var tempobj = {
                        today: arrlist[i]['today'],
                        date: arrlist[i]['date'],
                        data: arrlist[i]['data'],
                        uri: arrlist[i]['uri'],
                        temp: arrlist[i]['temp'],
                        location: location,
                        textInput: arrlist[i]['textInput'],
                        dateandMounth: arrlist[i]['dateandMounth']
                    }

                    arr.push(tempobj)
                }
                else {
                    arr.push(arrlist[i])
                }

            }

        }
        if (arr.length !== 0) {
            return {
                ...state,
                homeReducerdata: arr
            };
        }
    },
    [actionTypes.GECODE_RESPONSE](state, action) {
        var arr = []

        var temp
        if (action.response['main']['temp']) {
            temp = action.response['main']['temp'] - 273.15
        }
        if (state.homeReducerdata !== undefined && state.homeReducerdata !== null) {
            var arrlist = state.homeReducerdata

            for (let i = 0; i < arrlist.length; i++) {

                if (arrlist[i]['today'] === action.response['date']) {
                    var tempobj = {
                        today: arrlist[i]['today'],
                        date: arrlist[i]['date'],
                        data: arrlist[i]['data'],
                        uri: arrlist[i]['uri'],
                        temp: Math.ceil(temp),
                        location: arrlist[i]['location'],
                        textInput: arrlist[i]['textInput'],
                        dateandMounth: arrlist[i]['dateandMounth']

                    }
                    arr.push(tempobj)
                }
                else {
                    arr.push(arrlist[i])
                }

            }
        }
        if (arr.length !== 0) {
            return {
                ...state,
                homeReducerdata: arr
            };
        }
    }

});