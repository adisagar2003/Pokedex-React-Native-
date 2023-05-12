import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { TEXT_COLOR } from '../Theme/Colors'

type Props = {
    type:string,
    image:string
}

const styles = StyleSheet.create({
mainContainer:{
width:180,
height:  140,
padding:4,
borderRadius:40
}, 
img:{
height: '100%',
width: '100%',
justifyContent: 'center',
alignItems: 'center',
borderRadius:20,
opacity:.5,
overflow:'hidden',

}
})
const TypeCard = (props: Props) => {
  return (
    <TouchableOpacity

    style={styles.mainContainer}

    >
<ImageBackground
        source={{
          uri: 
props.image,
        }}
        resizeMode="stretch"
        style={styles.img} />
        <Text style={{position:'absolute', top:20, left:20, fontWeight:900, color:TEXT_COLOR}}>{props.type}</Text>
    </TouchableOpacity>
  )
}

export default TypeCard