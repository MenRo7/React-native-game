import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Game from './screens/Game';

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style='auto' />
                <Stack.Navigator initialRouteName='Home'>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Game" component={Game} />
                    <Stack.Screen 
                        name="Result"
                        component={Result} 
                        options={({ navigation }) => ({
                            headerLeft: (props) => (
                                <HeaderBackButton
                                    {...props}
                                    label="Home"
                                    onPress={() => navigation.navigate('Home')}
                                />
                            ),
                        })}
                    />
                </Stack.Navigator>
        </NavigationContainer>
    );
}