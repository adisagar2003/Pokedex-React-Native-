import {Text, View} from 'react-native';
import { PRIMARY_COLOR, SECONDARY_COLOR, TEXT_COLOR } from '../Theme/Colors';
import FadeInView from './AnimationContainer';
import { Button } from '@rneui/base';

const Sidebar = (props:any) => {
  return (
    <FadeInView style={{  width: 250,
      height: '100%',
      }}>
    <View style={{width:200, backgroundColor:'#1c1717',zIndex:99, position:'absolute', height:1000, flex:1}}>
    <View style={{marginTop:20}}>       
    </View>
    <Text style={[{color:TEXT_COLOR}]}>
      Hello
    </Text>
      <View style={[{width:'50%', position:'absolute', top: 0, left: 0}]}>
        <Button
        title={'<<'}
        color={PRIMARY_COLOR}
        onPress={()=>props.setSideBar(false)}
        />

    </View>
  </View>
  </FadeInView>
  );
};

export default Sidebar;
