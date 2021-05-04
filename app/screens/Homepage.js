
import React, { PureComponent, Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList, PermissionsAndroid, ActivityIndicator } from 'react-native';
import { RNCamera } from 'react-native-camera';
import CardComponent from './CardComponent'
import { connect } from 'react-redux'
import * as AboutActions from '@actions/AboutActions';
import Geolocation from 'react-native-geolocation-service';
import images from './../config/images'
import styles from './Styles'

import NetInfo from "@react-native-community/netinfo";
const PendingView = () => (
    <View
        style={{
            flex: 1,
            backgroundColor: 'lightgreen',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <Text>Waiting</Text>
    </View>
);
var arr1 = []
class Homepage extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            image: null,
            arr: [],
            temperature: 0,
            humidity: 0,
            longitude: 0,
            latitude: 0,
            connectionStatus: true
        }
    }

    async takePicture1(camera) {
        //  var data = await takePicture(camera, this.props.navigation)
        const options = { quality: 0.5, base64: true };
        var data = await camera.takePictureAsync(options);
        // console.log('vnvbvnvnbvbbn', data);
        var decode = "data:image/png;base64," + data.base64
        this.setState({ image: decode })
        //var path = parentPath + DOWNLOADED_FILE_DIRECTORY + "image",

        var today = new Date();
        var date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate()
        var mos = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
        var dateandMounth = mos[today.getMonth()] + " " + today.getDate()
        var date1 = "" + date
        // console.log('dateandMounth', dateandMounth);

        var temp = {
            today: today,
            date: date1,
            data: "data:image/png;base64," + data.base64,
            uri: data.uri,
            temp: '',
            location: '',
            textInput: '',
            dateandMounth: dateandMounth
        }



        var arr = []


        if (this.props.homeReducerdata !== undefined && this.props.homeReducerdata !== null) {
            var arrlist = this.props.homeReducerdata
            for (let i = 0; i < arrlist.length; i++) {
                if (arrlist[i]['date'] !== date1) {
                    arr.push(arrlist[i])
                }

            }
        }
        arr.push(temp)
        if (arr.length !== 0) {
            this.props.captureData(arr)
        }
        this.props.enableLoader(true)
        this.getLocation(today)
        this.props.navigation.navigate('BookmarkPage',
            {
                resource: "data:image/png;base64," + data.base64,
                location: '',
                temp: '',
                today: today

            });


    }
    apicall(today) {
        var data = {
            date: today,
            path: 'lat=' + this.state.latitude + '&lon=' + this.state.longitude + '&appid=53a81cb96dfe60b3fdda62dc5a99e43a'

        }
        var path = 'lat=' + this.state.latitude + '&lon=' + this.state.longitude + '&appid=53a81cb96dfe60b3fdda62dc5a99e43a'
        this.props.geocodingApi(data)

    }
    reverceGeocoder(today) {
        var data = {
            date: today,
            path: 'latitude=' + this.state.latitude + '&longitude=' + this.state.longitude + '&localityLanguage=en'

        }
        var path = 'latitude=' + this.state.latitude + '&longitude=' + this.state.longitude + '&localityLanguage=en'
        this.props.revercegeocodingApi(data)

    }
    componentDidMount() {

        NetInfo.addEventListener(state => {
            //console.log("Is connected?", state.isConnected);
            this.handleConnectivityChange(state.isConnected)
        });
        NetInfo.fetch().then(state => {
            if (state.isConnected == true) {
                this.setState({ connectionStatus: true })
            }
            else {
                this.setState({ connectionStatus: false })
            }
        });
    }

    handleConnectivityChange = (isConnected) => {
        if (isConnected == true) {
            this.setState({ connectionStatus: true })
        }
        else {
            this.setState({ connectionStatus: false })
        }
    };
    async getLocation(today) {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        )
        if (granted == PermissionsAndroid.RESULTS.GRANTED) {
            Geolocation.getCurrentPosition(
                (position) => {
                    this.setState({
                        longitude: position.coords.longitude,
                        latitude: position.coords.latitude
                    })
                    if (this.state.connectionStatus) {
                        this.apicall(today)
                        this.reverceGeocoder(today)
                    }
                },
                (error) => {
                    // See error code charts below.
                    console.log(error.code, error.message);
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <RNCamera
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    androidRecordAudioPermissionOptions={{
                        title: 'Permission to use audio recording',
                        message: 'We need your permission to use your audio',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                >
                    {({ camera, status, recordAudioPermissionStatus }) => {
                        if (status !== 'READY') return <PendingView />;
                        return (
                            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                                <TouchableOpacity onPress={() => this.takePicture1(camera, this.props.navigation)} style={styles.capture}>
                                    <Image style={styles.addiconstyle} source={images.camera_lens} />

                                </TouchableOpacity>

                            </View>
                        );
                    }}
                </RNCamera>

                {/* <ActivityIndicator
                    animating={this.props.isenableLoader}
                    color='#bc2b78'
                    size="large"
                    style={styles.activityIndicator} /> */}
            </View>
        );

    }

    takePicture = async function (camera, navigation) {
        const options = { quality: 0.5, base64: true };
        return await camera.takePictureAsync(options);
        //  eslint-disable-next-line



    };
}
function mapstatetoprops(state) {
    return {
        isenableLoader: state.homeReducer.isenableLoader,
        homeReducerdata: state.homeReducer.homeReducerdata,
    }
}
function mapDispachToProps(dispatch) {
    return {
        captureData: params => dispatch(AboutActions.captureData(params)),
        enableLoader: params => dispatch(AboutActions.enableLoader(params)),
        geocodingApi: params => dispatch(AboutActions.geocodingApi(params)),
        revercegeocodingApi: params => dispatch(AboutActions.revercegeocodingApi(params)),


    }
}
export default connect(mapstatetoprops, mapDispachToProps)(Homepage)
