import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import {ImageBackground} from 'react-native';
import { PRIMARY_COLOR, TEXT_COLOR } from '../Theme/Colors'

type Props = {name:string, image:string}
const styles = StyleSheet.create({
  mainCard:{
    width:290, 
    borderRadius:20,
    height: 200,
    color:'#f1f1f1',
    alignItems:'center',
    justifyContent:'center',
    position:'relative'
  },
  heading:{
    fontWeight:"700",
    fontSize:32,
    position:'absolute',
    top:10,
    backgroundColor:`${PRIMARY_COLOR}bb`,
    borderRadius:40,
    padding:10,
    color:TEXT_COLOR,
    left:10
  }
})
const PokemonCard = (props: Props) => {
  return (
    <View style={styles.mainCard}>
      <Text style={styles.heading}>{props.name}</Text>
      <ImageBackground
      source={{uri:props.image}}
      style={{width:'100%', height:undefined ,aspectRatio:1.3, zIndex:-1}}

      />

    </View>
  )
}

export default PokemonCard