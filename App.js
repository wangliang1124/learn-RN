import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import Swiper from './src/pages/Days/Swiper'
import Home from './src/pages/Home'
import TabBar from './src/pages/TabBar'
// import Day1 from './src/pages/Days/Day1'
// import Day5 from "./src/pages/Days/Day5";
// import Day7 from "./src/pages/Days/Day7";
// import Day8 from "./src/pages/Days/Day8";
// import Day9 from "./src/pages/Days/Day9";
// import Day10 from "./src/pages/Days/Day10";
// import Day11 from "./src/pages/Days/Day11";
// import Day13 from "./src/pages/Days/Day13";
// import Day14 from "./src/pages/Days/Day14";
// import Day15 from "./src/pages/Days/Day15";
// import Day16 from "./src/pages/Days/Day16";
// import Day17 from "./src/pages/Days/Day17";
// import Day18 from "./src/pages/Days/Day18";
// import Day19 from "./src/pages/Days/Day19";
// import Day20 from "./src/pages/Days/Day20";
// import Day22 from "./src/pages/Days/Day22";
// import Day23 from "./src/pages/Days/Day23";
// import Day24 from "./src/pages/Days/Day24";
// import Day26 from "./src/pages/Days/Day26";
// import Day27 from "./src/pages/Days/Day27";
// import Day28 from "./src/pages/Days/Day28";
// import Day30 from "./src/pages/Days/Day30";

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

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="Day1" component={Day1} /> */}
        <Stack.Screen name="Swiper" component={Swiper} />
        <Stack.Screen name="TabBar" component={TabBar} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
