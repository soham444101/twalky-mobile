import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen.js';
import HomeScreen from '../screens/HomeScreen.js';
import PreapareMeetScreen from '../screens/PreapareMeetScreen.js';
import LiveMeetScreen from '../screens/LiveMeetScreen.js';
import JoinMeetScreen from '../screens/JoinMeetScreen.js';
import { navigationRef } from '../utlities/NavigationUtilities';
import { WSProvider } from '../states/context/WSProvider';
import React from 'react';

const Stack = createNativeStackNavigator();

const Navigation = () => (
    <WSProvider>
        <NavigationContainer ref={navigationRef} >
            <Stack.Navigator initialRouteName='SplashScreen' screenOptions={
                {
                    headerShown:false
                    
                }
            }>
                <Stack.Screen name='SplashScreen' component={SplashScreen} />
                <Stack.Screen name='HomeScreen' component={HomeScreen} />
                <Stack.Screen name='PreapareMeetScreen' component={PreapareMeetScreen} />
                <Stack.Screen name='LiveMeetScreen' component={LiveMeetScreen} />
                <Stack.Screen name='JoinMeetScreen' component={JoinMeetScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    </WSProvider>
)


export default Navigation