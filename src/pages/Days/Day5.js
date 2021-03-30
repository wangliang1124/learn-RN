/**
 * Day 5
 * find my location
 */
"use strict";

import React, { Component } from "react";
import PropTypes from "prop-types";
import {
    Platform,
    Image,
    // MapView,
    Picker,
    StatusBar,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from "react-native";
import { MapView } from "react-native-amap3d";
import Util from "./utils";
import Icon from "react-native-vector-icons/Ionicons";

export default class extends Component {
    static navigationOptions = ({ navigation }) => {
        const { state, setParams } = navigation;
        state.params = state.params || { mapType: "standard" };
        const props = {
            mode: "dropdown",
            style: { width: 100 },
            selectedValue: state.params.mapType,
            onValueChange: mapType => setParams({ mapType })
        };
        return {
            title: "地图模式",
            headerRight: (
                <Picker {...props}>
                    <Picker.Item label="标准" value="standard" />
                    <Picker.Item label="卫星" value="satellite" />
                    <Picker.Item label="导航" value="navigation" />
                    <Picker.Item label="夜间" value="night" />
                    <Picker.Item label="公交" value="bus" />
                </Picker>
            )
        };
    };
    constructor() {
        super();
        this.state = {
            showGeo: false
        };
    }

    // componentDidMount() {
    //     if (Platform.OS === "ios") {
    //         StatusBar.setBarStyle(0);
    //     }
    // }

    _getLocation() {
        this.setState({
            showGeo: true
        });
    }

    render() {
        return (
            <View style={styles.container}>
             
                <MapView
                    mapType="standard"
                    style={{flex:1}}
                    coordinate={{
                        latitude: 39.91095,
                        longitude: 116.37296
                    }}
                />
                {/* <TouchableHighlight
                    underlayColor="#00bd03"
                    style={styles.btn}
                    onPress={() => this._getLocation()}
                >
                    <Text style={styles.btnText}>
                        <Icon size={18} name="md-navigate">
                            {" "}
                        </Icon>{" "}
                        Find my location
                    </Text>
                </TouchableHighlight> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        // alignItems: "center",
        // paddingTop: 60
    },
    btn: {
        backgroundColor: "#00a803",
        width: Util.size.width - 80,
        height: 40,
        borderWidth: Util.pixel,
        borderColor: "#009302",
        borderRadius: 4,
        justifyContent: "center",
        marginTop: 10
    },
    btnText: {
        textAlign: "center",
        fontSize: 18,
        color: "#fff"
    }
});
