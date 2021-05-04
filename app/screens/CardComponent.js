import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native'
import images from './../config/images'
import styles from './Styles'
class CardComponent extends Component {


    render() {
        console.log('fgffghfgh', this.props.dateandMounth);

        return (
            <View style={{ flex: 1 }}>

                <View style={styles.centerStyles} >
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('ImageDetailePage',
                                {
                                    resource: this.props.resource,
                                    location: this.props.location,
                                    temp: this.props.temp,
                                    textInput: this.props.textInput,
                                    dateandMounth: this.props.dateandMounth
                                })
                        }}>
                        <Image
                            source={{
                                uri: this.props.resource
                            }}
                            style={styles.imageStyles} />

                        <View style={styles.footerStyle}>
                            <View style={styles.bottomIcon}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image style={styles.iconstyle} source={images.map_pin} />

                                    <Text style={styles.fontStyle}>{this.props.location}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>

                                    <Text style={styles.fontStyle}>{this.props.temp}</Text>
                                    <Image style={styles.iconstyle} source={images.celsius_line} />

                                    <Image style={styles.iconstyle} source={images.sun_line} />


                                </View>
                            </View>

                        </View>
                        <View style={{ position: 'absolute',padding:10 }}>
                            <Text style={styles.fontStyle}>{this.props.dateandMounth}</Text>

                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}
export default CardComponent