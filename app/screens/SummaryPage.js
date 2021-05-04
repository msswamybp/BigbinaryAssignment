import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import * as AboutActions from '@actions/AboutActions';
import images from './../config/images'
import styles from './Styles'

class SummaryPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            mintem: 0,
            maxtem: 0,
            maxTemDate: '',
            minTemDate: '',
            numberofDays: 0
        }
    }
    getTem() {
        if (this.props.homeReducerdata !== undefined && this.props.homeReducerdata !== null) {
            var arrlist = this.props.homeReducerdata
            var mintem = arrlist[0]['temp']
            var maxtem = 0
            var maxTemDate = ''
            var minTemDate=''
            for (let i = 0; i < arrlist.length; i++) {

                if (arrlist[i]['temp'] > maxtem) {
                    maxTemDate = arrlist[i]['dateandMounth']
                    maxtem = arrlist[i]['temp']
                }
                if (arrlist[i]['temp'] < mintem) {
                    minTemDate = arrlist[i]['dateandMounth']
                    mintem = arrlist[i]['temp']
                }
            }
            this.setState({
                minTemDate: minTemDate,
                maxTemDate: maxTemDate,
                mintem: Math.ceil(mintem),
                maxtem: Math.ceil(maxtem)
            })
        }
    }
    componentDidMount() {
        const date = this.props.saveFirstdate;
        const date1 = new Date(date);
        const date2 = new Date();
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        this.setState({ numberofDays: diffDays })
        this.getTem()

    }
    render() {
        return (
            <View style={{ flex: 1, }}>


                <View style={styles.toolBarStyle} >
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                        <Text style={styles.headerfontStyle}>pica</Text>
                        <Text style={styles.headerfontStyle1}>day</Text>



                    </View>
                </View>
                <ScrollView>
                    <View style={styles.summaryStyle}>
                        <Text> Days</Text>
                        <Text> {this.state.numberofDays}</Text>
                    </View>
                    <View style={styles.summaryStyle}>
                        <Text>Hottest day</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>{this.state.maxtem}</Text>
                            <Image style={styles.iconstyle} source={images.celsius_line} />
                        </View>
                        <Text>{this.state.maxTemDate}</Text>
                    </View>
                    <View style={styles.summaryStyle}>
                        <Text>Coldest day</Text>
                        <View style={{ flexDirection: 'row' }}>

                            <Text>{this.state.mintem}</Text>
                            <Image style={styles.iconstyle} source={images.celsius_line} />
                        </View>
                        <Text>{this.state.minTemDate}</Text>
                    </View>

                </ScrollView>
                <View style={{
                    height: "10%",
                    width: "100%",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: 'space-around',
                    alignSelf: 'flex-end'
                }}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('ListPage');
                        }}
                    >
                        <Image style={styles.iconstyle} source={images.home_line} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('Homepage');
                        }}
                    >

                        <Image style={styles.addiconstyle} source={images.add_circle_line} />
                    </TouchableOpacity>

                    <Image style={styles.iconstyle} source={images.information_fill} />

                </View>
            </View>
        )
    }
}
function mapstatetoprops(state) {
    return {
        saveFirstdate: state.homeReducer.saveFirstdate,
        homeReducerdata: state.homeReducer.homeReducerdata,

    }
}
function mapDispachToProps(dispatch) {
    return {
        setFirstTimedate: params => dispatch(AboutActions.setFirstTimedate(params)),


    }
}
export default connect(mapstatetoprops, mapDispachToProps)(SummaryPage)