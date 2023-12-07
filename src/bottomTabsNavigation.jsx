import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/home";
import { Entypo, FontAwesome,MaterialIcons } from "@expo/vector-icons";
import Search from "./screens/Search";
import Business from "./screens/business";
import Health from "./screens/health";
import Sports from "./screens/sports";

export default function BottomTabsNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            tabBarIcon: () => <Entypo name="home" size={24} color="black" />,
          }}
        />
        <Tab.Screen
          name="business"
          component={Business}
          options={{
            tabBarIcon: () => (
              <FontAwesome name="euro" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="health"
          component={Health}
          options={{
            tabBarIcon: () => (
              <FontAwesome name="heartbeat" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Sports"
          component={Sports}
          options={{
            tabBarIcon: () => (
              <MaterialIcons name="sports-basketball" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="search"
          component={Search}
          options={{
            tabBarIcon: () => (
              <FontAwesome name="search" size={24} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
