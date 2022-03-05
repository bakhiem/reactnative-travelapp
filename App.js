import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Home from './components/Home'
import Profile from './components/Profile'
import Details from './components/Details'
import Liked from './components/Liked'
import colors from './assets/colors/colors'
import Entypo from 'react-native-vector-icons/Entypo'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator() 
Entypo.loadFont()
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions= {{
        tabBarStyle: style.tabBar,
        tabBarActiveTintColor: colors.orange,
        tabBarInactiveTintColor: colors.gray,
        tabBarShowLabel: false,
        headerShown: false
      }}
    >
      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="home" size={32} color={color} />
          )
        }}
      />
      <Tab.Screen name="Liked" component={Liked}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="heart" size={32} color={color} />
          )
        }}
      />
      <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="user" size={32} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabNavigator" component={TabNavigator} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Details" component={Details} 
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const style = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  }
})