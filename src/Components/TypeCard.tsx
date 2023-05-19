import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { TEXT_COLOR } from '../Theme/Colors'

type Props = {
    type:string,
    image:string
}

const styles = StyleSheet.create({
mainContainer:{
width:400,
height:  140,
backgroundColor:'red'
// padding:4,
// borderRadius:40
}, 
img:{
// height: '100%',
// width: '100%',
// justifyContent: 'center',
// alignItems: 'center',
// borderRadius:20,
// opacity:.5,
// overflow:'hidden',

}
})
const TypeCard = (props: Props) => {
  const styles=StyleSheet.create({
    img:{
      width:'100%',
      height:'100%'
    },
    container:{
      width:150, 
      height:150,
      paddingLeft:4,
      paddingRight:4
    }
  })
  return (
  <View style={styles.container}>
<ImageBackground
        source={{
          uri: 
props.image,
        }}
        resizeMode="stretch"
        style={styles.img} />

        <Text style={{position:'absolute', top:20, left:20, fontWeight:900, color:TEXT_COLOR, backgroundColor:'#27272733', padding:4, borderRadius:10}}>{props.type}</Text>
        </View>
  )
}

export default TypeCard