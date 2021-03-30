/**
 * Day 15
 * pickerIOS, Modal
 */
"use strict";

import React, { Component } from "react";
import {
    Image,
    StyleSheet,
    StatusBar,
    Text,
    TouchableHighlight,
    Modal,
    View,
    DatePickerIOS
} from "react-native";
import Util from "./utils";

export default class extends Component {
    constructor() {
        super();

        const date = new Date();
        const time = this._getTime(date);
        const timeZoneOffsetInHours =
            (-1 * new Date().getTimezoneOffset()) / 60;
        let setDate = new Date();
        let showModal = false;

        this.state = { time, showModal, setDate, timeZoneOffsetInHours };
    }

    // componentDidMount() {
    //     StatusBar.setBarStyle(0);
    // }

    _getTime(date) {
        const monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        const day = date.getDate(),
            monthIndex = date.getMonth(),
            year = date.getFullYear(),
            hour = date.getHours(),
            minute = date.getMinutes();
        return `${year}-${monthIndex + 1}-${day} ${
            hour < 10 ? "0" + hour : hour
        }:${minute < 10 ? "0" + minute : minute}`;
    }

    _pickTime() {
        this.setState({
            showModal: true
        });
    }

    _setTime() {
        this.setState({
            time: this._getTime(this.state.setDate),
            showModal: false
        });
    }

    _closeModal() {
        this.setState({ showModal: false });
    }

    _onDateChange = date => {
        this.setState({ setDate: date });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.date}>{this.state.time}</Text>
                <TouchableHighlight
                    underlayColor="#f3f3f3"
                    onPress={() => this._pickTime()}
                >
                    <Text style={styles.btnText}> 更改时间 </Text>
                </TouchableHighlight>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.showModal}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalNav}>
                            <TouchableHighlight
                                underlayColor="#fff"
                                onPress={() => this._closeModal()}
                            >
                                <Text style={styles.btnText}>取消</Text>
                            </TouchableHighlight>
                            <Text style={styles.navTitle}> 选择时间 </Text>
                            <TouchableHighlight
                                underlayColor="#fff"
                                onPress={() => this._setTime()}
                            >
                                <Text style={styles.btnText}>设置</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.modalContent}>
                            <DatePickerIOS
                                date={new Date()}
                                onDateChange={this._onDateChange}
                            />
                            {/* <DatePickerIOS
                                date={this.state.setDate}
                                mode="date"
                                timeZoneOffsetInMinutes={
                                    this.state.timeZoneOffsetInHours * 60
                                }
                                onDateChange={this._onDateChange}
                            />
                            <DatePickerIOS
                                date={this.state.setDate}
                                mode="time"
                                timeZoneOffsetInMinutes={
                                    this.state.timeZoneOffsetInHours * 60
                                }
                                onDateChange={this._onDateChange}
                            /> */}
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        height: Util.size.height,
        width: Util.size.width,
        paddingBottom: 60,
        backgroundColor: "#ffffff"
    },
    date: {
        fontSize: 25
    },
    btnText: {
        color: "#4285f4",
        fontSize: 16,
        paddingTop: 10
    },
    modalContainer: {
        height: Util.size.height,
        width: Util.size.width,
        backgroundColor: "#f1f1f1"
    },
    modalNav: {
        // position: "absolute",
        height: 64,
        width: Util.size.width,
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // paddingTop: 20,
        paddingLeft: 16,
        paddingRight: 16
        // backgroundColor: '#000'
    },
    modalContent: {
        flex: 1,
        // alignItems: "center",
        justifyContent: "center",
        width: Util.size.width,
        height: Util.size.height - 60,
        marginTop: 60,
        backgroundColor: "#ccc"
    },
    navTitle: {
        paddingTop: 8,
        fontWeight: "500",
        color: "#222",
        fontSize: 18
    }
});
