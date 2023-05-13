/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Image, SafeAreaView,  Text, TouchableOpacity, View, useColorScheme, StyleSheet} from 'react-native';
import { Icon } from '@rneui/themed';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { useState } from 'react';
import { useFetchAPI } from './src/Hooks/useFetchAPI';
import { PRIMARY_COLOR, TEXT_COLOR } from './src/Theme/Colors';
import Sidebar from './src/Components/Sidebar';
import MainPage from './src/Pages/MainPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GrassType from './src/Pages/GrassType';
import WaterType from './src/Pages/WaterType';
import FireType from './src/Pages/FireType';
import ElectricType from './src/Pages/ElectricType';

function App(): JSX.Element {
  const [isEnabled, setIsEnabled] = useState(false);
  const [sidebar, isSidebarEnabled] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';
  const toggleSwitch = () => setIsEnabled(isEnabled => !isEnabled);
  const colorScheme = useColorScheme();
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const Stack = createNativeStackNavigator();
  const styles = StyleSheet.create({
    
  })
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={MainPage} />
      <Stack.Screen name="Fire" component={FireType} />
      <Stack.Screen name="Grass" component={GrassType} />
      <Stack.Screen name="Water" component={WaterType} />
      <Stack.Screen name="Electric" component={ElectricType} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
