import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import images from './../config/images'
import { connect } from 'react-redux'
import styles from './Styles'

import * as AboutActions from '@actions/AboutActions';
class BookmarkPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: ''
        }
    }
    onChange(text) {
        this.setState({ text: text })
    }
    editTextInput() {
        if (this.props.homeReducerdata !== undefined && this.props.homeReducerdata !== null) {
            var arrlist = this.props.homeReducerdata
            var arr = []
            for (let i = 0; i < arrlist.length; i++) {

                if (arrlist[i]['today'] === this.props.navigation.state.params.today) {
                    var tempobj = {
                        today: arrlist[i]['today'],
                        date: arrlist[i]['date'],
                        data: arrlist[i]['data'],
                        uri: arrlist[i]['uri'],
                        temp: arrlist[i]['temp'],
                        location: arrlist[i]['location'],
                        textInput: this.state.text,
                        dateandMounth: arrlist[i]['dateandMounth']

                    }
                    arr.push(tempobj)
                }
                else {
                    arr.push(arrlist[i])
                }
            }
            if (arr.length !== 0) {
                this.props.captureData(arr)
            }
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.toolBarStyle}>
                    <TouchableOpacity
                        onPress={() => {
                            this.editTextInput()
                            this.props.navigation.navigate('ListPage');
                        }}
                    >

                        <Image style={styles.addiconstyle} source={images.arrow_left_line} />
                    </TouchableOpacity>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                        <Text style={styles.headerfontStyle}>pica</Text>
                        <Text style={styles.headerfontStyle1}>day</Text>



                    </View>
                </View>
                <View style={styles.centerStyles} >
                    <TouchableOpacity
                        onPress={() => {
                            this.editTextInput()
                            this.props.navigation.navigate('HomeDetaile')
                        }}>
                        <Image
                            source={{
                                uri: this.props.navigation.state.params.resource
                            }}
                            style={styles.imageStyles} />
                        <View style={{ position: 'absolute', bottom: 0, alignSelf: 'center' }}>

                            <TouchableOpacity
                                onPress={() => {
                                    this.props.navigation.navigate('Homepage');
                                }}
                            >

                                <Image style={styles.addiconstyle} source={images.add_circle_line} />
                            </TouchableOpacity>


                        </View>
                    </TouchableOpacity>

                </View>
                <View style={styles.centerStyles}>
                    <TextInput
                        style={styles.toolBarStyle1}
                        autoFocus={true}
                        placeholder="Type your thoghts.."
                        placeholderTextColor='grey'
                        onChangeText={(text) => this.onChange(text)}
                        value={this.state.text}
                        selectionColor={'grey'}

                    />
                </View>
            </View>
        )
    }
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
export default connect(mapstatetoprops, mapDispachToProps)(BookmarkPage)