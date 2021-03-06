
import React, { PureComponent, Component } from 'react';
import Geolocation from 'react-native-geolocation-service';
import { connect } from 'react-redux'
import * as AboutActions from '@actions/AboutActions';

import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList, PermissionsAndroid } from 'react-native';
const openweather_api = "https://api.openweathermap.org/data/2.5/weather?lat=33.44&lon=-94.04&appid=53a81cb96dfe60b3fdda62dc5a99e43a";
class HomeDetaile extends Component {
    state = {
        temperature: 0,
        humidity: 0,
        longitude: 0,
        latitude: 0
    };


    async getLocation() {
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

                    this.apicall()
                    this.reverceGeocoder()
                },
                (error) => {
                    // See error code charts below.
                    console.log(error.code, error.message);
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );
        }
    }
    apicall() {
        var path = 'lat=' + this.state.latitude + '&lon=' + this.state.longitude + '&appid=53a81cb96dfe60b3fdda62dc5a99e43a'
        this.props.geocodingApi(path)
        // await fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + this.state.latitude + '&lon=' + this.state.longitude + '&appid=53a81cb96dfe60b3fdda62dc5a99e43a', {
        //     method: 'GET',
        // }).then(response => response.json())
        //     .then(json => {
        //         // this.setState({
        //         //     jsonData: json.body,
        //         // });
        //         console.log('json', json);

        //     })
        //     .catch(error => {
        //         console.error(error);
        //     });
    }
    async reverceGeocoder() {
        var path = 'latitude=' + this.state.latitude + '&longitude=' + this.state.longitude + '&localityLanguage=en'
        this.props.revercegeocodingApi(path)
        // await fetch('https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?mode=retrieveAddresses&apiKey=9HA9pVHzWtO7SBJarXI_QBJP7__UKnJ5sPreY4X1v7Q&prox=' + this.state.latitude + ',' + this.state.longitude, {
        //     method: 'GET',
        // }).then(response => response.json())
        //     .then(json => {
        //         // this.setState({
        //         //     jsonData: json.body,
        //         // });
        //         console.log('json', json);

        //     })
        //     .catch(error => {
        //         console.error(error);
        //     });
    }
    componentDidMount() {
        this.getLocation()



    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                <Text>Todays temperature is Celcius</Text>
                <Text>{this.state.humidity > 100 && 20 ? 'Its nice outside, go for a run!' : 'Its too cold to run outside'}</Text>
            </View>
        )
    }
}
function mapstatetoprops(state) {
    return {
        cont: state.counter
    }
}
function mapDispachToProps(dispatch) {//enableLoader
    return {
        geocodingApi: params => dispatch(AboutActions.geocodingApi(params)),
        revercegeocodingApi: params => dispatch(AboutActions.revercegeocodingApi(params)),




    }
}
export default connect(mapstatetoprops, mapDispachToProps)(HomeDetaile)


// import React from 'react';
// import { StyleSheet, Text, View, Animated } from 'react-native';
// export const API_KEY = 'YOUR_API_KEY HERE';

//import { API_KEY } from './utils/WeatherAPIKey';


// export default class HomeDetaile extends React.Component {
//     state = {
//         isLoading: false,
//         temperature: 0,
//         weatherCondition: null,
//         error: null
//     };

//     componentDidMount() {
//         navigator.geolocation.getCurrentPosition(
//             position => {
//                 this.fetchWeather(position.coords.latitude, position.coords.longitude);
//             },
//             error => {
//                 this.setState({
//                     error: 'Error Gettig Weather Condtions'
//                 });
//             }
//         );
//     }

//     fetchWeather(lat = 25, lon = 25) {
//         fetch(
//             `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
//         )
//             .then(res => res.json())
//             .then(json => {
//                 console.log(json);
//             });
//     }

//     render() {
//         const { isLoading } = this.state;
//         return (
//             <View style={styles.container}>

//                 Weather
//       </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff'
//     }
// });