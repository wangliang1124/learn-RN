// import React, { Component } from "react";
// import { Platform, NavigatorIOS, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";

import Home from "./src/pages/Home";
import Day2 from "./src/pages/Days/Day2";
import Day3 from "./src/pages/Days/Day3";
import Day5 from "./src/pages/Days/Day5";
import Day7 from "./src/pages/Days/Day7";
import Day8 from "./src/pages/Days/Day8";
import Day9 from "./src/pages/Days/Day9";
import Day10 from "./src/pages/Days/Day10";
import Day11 from "./src/pages/Days/Day11";
import Day13 from "./src/pages/Days/Day13";
import Day14 from "./src/pages/Days/Day14";
import Day15 from "./src/pages/Days/Day15";
import Day16 from "./src/pages/Days/Day16";
import Day17 from "./src/pages/Days/Day17";
import Day18 from "./src/pages/Days/Day18";
import Day19 from "./src/pages/Days/Day19";
import Day20 from "./src/pages/Days/Day20";
import Day22 from "./src/pages/Days/Day22";
import Day23 from "./src/pages/Days/Day23";
import Day24 from "./src/pages/Days/Day24";
import Day26 from "./src/pages/Days/Day26";
import Day27 from "./src/pages/Days/Day27";
import Day28 from "./src/pages/Days/Day28";
import Day30 from "./src/pages/Days/Day30";

// class App extends Component {
//     render() {
//         return (
//             <NavigatorIOS
//                 initialRoute={{
//                     component: Home,
//                     title: "首页",
//                     // navigationBarHidden: true
//                 }}
//                 style={{ flex: 1 }}
//                 rightButtonTitle="next"
//                 barTintColor="#ffffcc"
//                 // barStyle="black"
//                 // itemWrapperStyle={{flex: 1,backgroundColor: '#000'}}
//                 onRightButtonPress={() => {}}
//             />
//         );
//     }
// }

const App = createStackNavigator(
    {
        Home,
        Day2,
        Day3,
        Day5,
        Day7,
        Day8,
        Day9,
        Day10,
        Day11,
        Day13,
        Day14,
        Day15,
        Day16,
        Day17,
        Day18,
        Day19,
        Day20,
        Day22,
        Day23,
        Day24,
        Day26,
        Day27,
        Day28,
        Day30,
    },
    {
        // headerMode: 'none',
        initialRouteName: "Home"
    }
);
export default App;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#F5FCFF"
//     },
//     welcome: {
//         fontSize: 20,
//         textAlign: "center",
//         margin: 10
//     },
//     instructions: {
//         textAlign: "center",
//         color: "#333333",
//         marginBottom: 5
//     }
// });
