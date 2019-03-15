/**
 * Day 19
 *
 */
"use strict";

import React, { Component } from "react";
import {
    Image,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    Text,
    AlertIOS,
    TouchableHighlight,
    View
} from "react-native";
import Util from "./utils";
import TouchID from "react-native-touch-id";
import { EnterPassword } from "./Day16";

class Main extends Component {
    // componentDidMount() {
    //     StatusBar.setBarStyle(0);
    // }

    render() {
        return (
            <View style={styles.main}>
                <Text style={styles.text}>You are in Day19</Text>
            </View>
        );
    }
}

class RequireTouchID extends Component {
    constructor() {
        super();
        this.state = {
            enterApp: false
        };
    }

    // componentDidMount() {
    //     // StatusBar.setBarStyle(1);
    //     this._touchID();
    // }

    _enterPassword() {
        this.setState({
            enterApp: true
        });
    }

    _touchID = () => {
        TouchID.authenticate("Unlock Day19")
            .then(success => {
                this.setState({
                    enterApp: true
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        return (
            <View style={styles.container}>
                {this.state.enterApp ? (
                    <Main />
                ) : (
                    <TouchableOpacity onPress={this._touchID}>
                        <Text>指纹登陆</Text>
                    </TouchableOpacity>
                    // <EnterPassword
                    //     enterPassword={() => this._enterPassword()}
                    //     password="123"
                    // />
                )}
            </View>
        );
    }
}

export default RequireTouchID;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "transparent",
        height: Util.size.height,
        width: Util.size.width
    },
    main: {
        justifyContent: "center",
        alignItems: "center",
        height: Util.size.height,
        width: Util.size.width
    },
    text: {
        fontSize: 30
    }
});
