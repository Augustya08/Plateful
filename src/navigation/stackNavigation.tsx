import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import FoodDetailScreen from '../screens/FoodDetailScreen';
// import ProfileScreen from '../screens/ProfileScreen';

export type RootStackParamList={
    Home:undefined;
    FoodDetail:{food:any};
    Profile:undefined;
};
const Stack=createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator(){
    return(
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="FoodDetail" component={FoodDetailScreen} />
     {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
    </Stack.Navigator>
    );
}
