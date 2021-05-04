import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, FlatList, BackHandler } from 'react-native'
import images from './../config/images'
import CardComponent from './CardComponent'
import { connect } from 'react-redux'
import * as AboutActions from '@actions/AboutActions';
import styles from './Styles'

class ListPage extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    handleBackButtonClick() {
        BackHandler.exitApp();
        return true;
    }
    renderList() {
        if (this.props.homeReducerdata !== undefined && this.props.homeReducerdata !== null) {

            return (
                <View >
                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={this.props.homeReducerdata}
                        renderItem={({ item, index }) => {
                            return (
                                <CardComponent
                                    dateandMounth={item.dateandMounth}
                                    textInput={item.textInput}
                                    resource={item.data}
                                    location={item.location}
                                    temp={item.temp}
                                    navigation={this.props.navigation}
                                />
                            );
                        }}
                    />
                </View>
            )
        }
        else {
            return null
        }
    }
    render() {
        console.log('this.props.homeReducerdata', this.props.homeReducerdata);

        return (
            <View style={{ flex: 1, }}>

                <View style={styles.toolBarStyle} >
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                        <Text style={styles.headerfontStyle}>pica</Text>
                        <Text style={styles.headerfontStyle1}>day</Text>



                    </View>
                </View>
                <ScrollView>
                    {this.renderList()}
                </ScrollView>
                <View style={{
                    height: "10%",
                    width: "100%",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: 'space-around',
                    alignSelf: 'flex-end'
                }}>
                    <Image style={styles.iconstyle} source={images.home_fill} />
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('Homepage');
                        }}
                    >

                        <Image style={styles.addiconstyle} source={images.add_circle_line} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('SummaryPage');
                        }}
                    >
                        <Image style={styles.iconstyle} source={images.information_line} />
                    </TouchableOpacity>
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
      
        enableLoader: params => dispatch(AboutActions.enableLoader(params)),
     


    }
}
export default connect(mapstatetoprops, mapDispachToProps)(ListPage)