import { View, Text , ScrollView, FlatList, ActivityIndicator} from 'react-native'
import React, {useEffect, useState} from 'react'
import { Button } from 'react-native-elements'
import TypeCard from '../Components/TypeCard';
import PokemonCard from '../Components/PokemonCard';


const GrassType = ({navigation}:any) => {
  //States for fire pokemon 
  const [firePokemon, setPokemon] = useState<Array<any>>([]);
  // Fetch Fire Type Pokemon
  useEffect(()=>{
    let temp:Array<any>=[];
        fetch('https://pokeapi.co/api/v2/type/12').then(response=>response.json()).then(response=>{
         
          response.pokemon.map((poke:any)=>{
           
            fetch(poke.pokemon.url).then(response=>response.json()).then(response=>temp.push(response));
            setPokemon(temp);
          });
        
  })},[]);
  return (
    <View style={{backgroundColor:'#272727'}} style={{backgroundColor:'#272727', flex:1, alignContent:'center', justifyContent:'center', alignItems:'center'}}>
      <Button style={{position:'absolute', top:10, left: 10 }} title="back" onPress={()=>navigation.navigate('Home')} />
      <FlatList
          data={firePokemon}
          renderItem={({item}:any)=> <PokemonCard name={item.name} image={item.sprites.front_default} />}
          keyExtractor={item=>item.id} 
          ListEmptyComponent={<ActivityIndicator />}
          />
    </View>
  )
}

export default GrassType