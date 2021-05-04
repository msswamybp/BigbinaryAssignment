import { StyleSheet, Platform, StatusBar, Dimensions } from "react-native";




const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    summaryStyle: {

        height: Dimensions.get("window").height * 0.1,
        width: Dimensions.get("window").width,
        //flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    toolBarStyle: {
        backgroundColor: '#ffffcc',
        height: Dimensions.get("window").height * 0.1,
        width: Dimensions.get("window").width,
        flexDirection: 'row', alignItems: 'center'
    },
    toolBarStyle1: {
        backgroundColor: '#ffffcc',
        height: Dimensions.get("window").height * 0.1,
        width: Dimensions.get("window").width,
        flexDirection: 'row', alignItems: 'center'
    },
    centerStyles: { alignItems: 'center', justifyContent: 'center', alignSelf: 'center' },

    footerStyle: {
        flexDirection: 'row', justifyContent: 'space-between', bottom: 0, position: 'absolute'
    },
    bottomIcon: { flex: 1, flexDirection: 'row', justifyContent: 'space-around' },
    marginStyle: {
        // marginRight: Dimensions.get("window").width * 0.1,
        //   marginLeft: 20,
        flexDirection: 'row'
    },
    imageStyles: {
        height: Dimensions.get("window").height * 0.3,
        width: Dimensions.get("window").width,
    },
    fontStyle: {
        fontSize: Dimensions.get("window").width * 0.03,
        color: 'white',
    },
    headerfontStyle1: {
        fontSize: Dimensions.get("window").width * 0.06,
        fontWeight: 'bold',
        color: '#00ffbf'
    },
    headerfontStyle: {
        fontSize: Dimensions.get("window").width * 0.06,
        fontWeight: 'bold',

    },
    iconstyle: {
        height: Dimensions.get("window").width * 0.05,
        width: Dimensions.get("window").width * 0.05,
    },
    addiconstyle: {
        height: Dimensions.get("window").width * 0.1,
        width: Dimensions.get("window").width * 0.1,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    }

});

export default styles;
