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

function App(): JSX.Element {
  const [isEnabled, setIsEnabled] = useState(false);
  const [sidebar, isSidebarEnabled] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';
  const toggleSwitch = () => setIsEnabled(isEnabled => !isEnabled);
  const colorScheme = useColorScheme();
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const styles = StyleSheet.create({
    
  })
  return (
    <SafeAreaView style={[{height:'100%', backgroundColor:'#191414'}]}>
      <View style={[{flexDirection:'row', gap:10, alignItems:'center', justifyContent:'center', marginTop:20}]}>
      <Text style={[{fontWeight:900, color:'#efefef', fontSize:24}]}>Pokedex</Text>
      <Image
        source={require('./assets/Pokeball.png')}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{width: 40, height: 40}}
        
      />  
      </View>

      {sidebar && (
        <View style={{position:'absolute', top:0, left:0, height:'100%'}}>
          <Sidebar setSideBar={isSidebarEnabled} />
        </View>
      )}

      <MainPage />
    </SafeAreaView>
  );
}

export default App;
