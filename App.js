import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider  } from 'react-redux';
import store from './redux/store';
import { useEffect } from 'react';
import { AppRegistry } from 'react-native';
 import StackScreens from './component/StackScreens';
 import DrawerNavigators from './component/DrawerNavigators';
export default function App() {
 const Stack=createNativeStackNavigator()
  return (


    <Provider store={store}>
    <PaperProvider>
   
      <NavigationContainer>
       
    
        <View style={styles.container}>
         
          <StatusBar style="auto" />
        </View>
      </NavigationContainer>
    </PaperProvider>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
AppRegistry.registerComponent('MyApp', () => App);