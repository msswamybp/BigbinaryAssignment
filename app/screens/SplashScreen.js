import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native'
import images from './../config/images'
import { connect } from 'react-redux'
import * as AboutActions from '@actions/AboutActions';
import styles from './Styles'

class SplashScreen extends Component {
    componentDidMount() {
        if (this.props.isFirstTime) {
            var date = new Date();

            this.props.setFirstTimedate(date)
        }
        setTimeout(() => {
            this.props.navigation.navigate('ListPage');
        }, 2000);
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffcc' }}>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                    <Text style={styles.headerfontStyle}>pica</Text>
                    <Text style={styles.headerfontStyle1}>day</Text>



                </View>
            </View>
        )
    }
}

function mapstatetoprops(state) {
    return {
        isenableLoader: state.homeReducer.isenableLoader,
        isFirstTime: state.homeReducer.isFirstTime,
    }
}
function mapDispachToProps(dispatch) {//captureData
    return {
        setFirstTimedate: params => dispatch(AboutActions.setFirstTimedate(params)),
        enableLoader: params => dispatch(AboutActions.enableLoader(params)),
        geocodingApi: params => dispatch(AboutActions.geocodingApi(params)),
        revercegeocodingApi: params => dispatch(AboutActions.revercegeocodingApi(params)),


    }
}
export default connect(mapstatetoprops, mapDispachToProps)(SplashScreen)