import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { themeColor, useTheme } from "react-native-rapi-ui";
import TabBarIcon from "../components/utils/TabBarIcon";
import TabBarText from "../components/utils/TabBarText";

//import Home from "../screens/Home";
//import SecondScreen from "../screens/SecondScreen";
//import About from "../screens/About";
import Comparison from "../screens/Comparison";
import Order from "../screens/Order";
import Orderlist from "../screens/Orderlist";

const MainStack = createNativeStackNavigator();
const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="MainTabs" component={MainTabs} />
      {/* <MainStack.Screen name="SecondScreen" component={SecondScreen} /> */}
    </MainStack.Navigator>
  );
};

const Tabs = createBottomTabNavigator();
const MainTabs = () => {
  const { isDarkmode } = useTheme();
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: true,
        tabBarStyle: {
          borderTopColor: isDarkmode ? themeColor.dark100 : "#c0c0c0",
          backgroundColor: isDarkmode ? themeColor.dark200 : "#ffffff",
        },
      }}
    >
      <Tabs.Screen
        name="Comparison"
        component={Comparison}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Comparison" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"person"} />
          ),
        }}
      />
      <Tabs.Screen
        name="Order"
        component={Order}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Order" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"person"} />
          ),
        }}
      />

      <Tabs.Screen
        name="Orderlist"
        component={Orderlist}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Orderlist" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"person"} />
          ),
        }}
      />


    </Tabs.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
};
