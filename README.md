# React Boilerplate 

This is a boilerplate React Native application created by Talha, incorporating Redux, React Navigation, Paper UI, Tailwind CSS, and a stack navigator setup.

## Introduction

MyApp is a boilerplate mobile application built using React Native, designed to serve as a foundation for creating robust mobile applications. It includes pre-configured Redux state management, navigation with React Navigation, UI components from React Native Paper, and styling using Tailwind CSS, Formik and Yup for form validation, and Axios for making HTTP requests.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Screens](#screens)
- [Adding Dynamic Screens](#adding-dynamic-screens)
  - [Stack Navigator](#stack-navigator)
  - [Drawer Navigator](#drawer-navigator)
  - [Navigation Data](#navigation-data)
- [License](#license)

## Installation

Clone the repository:

```bash
git clone https://github.com/iot-Noob/boilerplate-native.git
cd boilerplate-native 
```
## Install dependencies:
```
npm install 
```
## Usage

Start the Metro Bundler:

```
npm start
```

## Dependencies

- Expo StatusBar
- React Native StyleSheet
- React Navigation
- React Native Paper
- Redux
- Tailwind CSS
- createNativeStackNavigator
- Yup
- Formik
-Axios
## Configuration
Ensure that all necessary modules are installed and configured according to your development environment.

## Screens
The Talha screen is located in ./screens/Talha.js and provides information about Talha.
## Adding Dynamic Screens
To add dynamic screens to the stack and drawer navigators, you can use the following components:
## Stack Navigator
Create a dynamic stack navigator by importing the `createNativeStackNavigator` from `@react-navigation/native-stack` and mapping through the navigationData array.
```js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationData } from './index';

const StackScreens = (route, navigator) => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            {navigationData.map((v, i) => (
                <Stack.Screen key={i} name={v.name} component={v.component} />
            ))}
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({});

export default StackScreens;

```
## Drawer Navigator
Create a dynamic drawer navigator by importing the `createDrawerNavigator` from `@react-navigation/drawer` and mapping through the `navigationData` array. You can conditionally wrap the drawer content with `NavigationContainer` based on the `nav_cont` prop.

```js
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { navigationData } from './index';
import { NavigationContainer } from '@react-navigation/native';

const DrawerNavigators = ({ children, route, navigation, nav_cont = false }) => {
    const Drawer = createDrawerNavigator();
    
    const drawerContent = (
        <Drawer.Navigator>
            {navigationData.map((v, i) => (
                <Drawer.Screen key={i} name={v.name} component={v.component} />
            ))}
        </Drawer.Navigator>
    );

    return nav_cont ? (
        <NavigationContainer>
            {drawerContent}
        </NavigationContainer>
    ) : (
        drawerContent
    );
}

const styles = StyleSheet.create({});

export default DrawerNavigators;
```

## Navigation Data
Define your navigation data in an array, which includes the name and component for each screen.

```js
import Talha from "../screens/Talha";

let navigationData = [
    {
        name: "About Talha",
        component: Talha
    }
];

export { navigationData };

```
## License
This project is licensed under the Talha khalid  License. See the LICENSE file for details.

 

