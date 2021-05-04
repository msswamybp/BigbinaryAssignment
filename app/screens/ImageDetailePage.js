import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native'
import images from './../config/images'
import styles from './Styles'

class ImageDetailePage extends Component {


    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.toolBarStyle}>
                    <TouchableOpacity
                        onPress={() => {
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
                <View style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }} >
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('HomeDetaile')
                        }}>
                        <Image
                            source={{
                                uri: this.props.navigation.state.params.resource
                            }}
                            style={styles.imageStyles} />
                        {/* <View>
                            <Text>
                                {this.props.navigation.state.params.textInput}
                            </Text>
                        </View> */}
                        <View style={styles.footerStyle}>
                            <View style={styles.bottomIcon}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image style={styles.iconstyle} source={images.map_pin} />

                                    <Text style={styles.fontStyle}>{this.props.navigation.state.params.location}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>

                                    <Text style={styles.fontStyle}>{this.props.navigation.state.params.temp}</Text>
                                    <Image style={styles.iconstyle} source={images.celsius_line} />

                                    <Image style={styles.iconstyle} source={images.sun_line} />
                                </View>
                            </View>
                        </View>
                        <View style={{ position: 'absolute', padding: 10 }}>
                            <Text style={styles.fontStyle}>{this.props.navigation.state.params.dateandMounth}</Text>

                        </View>
                    </TouchableOpacity>
                    <View style={{ padding: 20 }}>
                        <Text>
                            {this.props.navigation.state.params.textInput}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}
export default ImageDetailePage