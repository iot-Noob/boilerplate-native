import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationData } from './index';

const StackScreens = (route,navigator) => {

    const Stack=createNativeStackNavigator()

    return (
        
            <Stack.Navigator  >
                {
                    navigationData.map((v,i)=>(
                        <Stack.Screen key={i} name={v.name} component={v.component}/>
                    ))
                }
            </Stack.Navigator>
       
    );
}

const styles = StyleSheet.create({})

export default StackScreens;
