import { View, Text, StyleSheet, TextInput, FlatList, ActivityIndicator , VirtualizedList, Alert} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Input } from 'react-native-elements'
import { TEXT_COLOR, UI_COLOR } from '../Theme/Colors'
import TypeCard from '../Components/TypeCard';
import { useFetchAPI } from '../Hooks/useFetchAPI'
import useFetchPokemonData from '../Hooks/useFetchPokemonData'
import axios from 'axios';
import {v4 as uuidv4} from 'uuid';
import PokemonCard from '../Components/PokemonCard'
type Props = {}
type PokemonData ={
  name:string, 
  url:string
}
const TYPE_DATA:Array<object> = [
    {
        type:'Grass',
        image:'https://th.bing.com/th/id/R.50f1bfc124dadf6aac7e4a6b73f27113?rik=v7BUx0XdKMyG5w&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-19%2fDusty-Grass-Gradient-4K-Wallpaper-7119.jpg&ehk=tx8Ns8q0DneBRxIzEXXgEwhlK3o0v3lpqvoRDlF%2fU58%3d&risl=&pid=ImgRaw&r=0'
    },
    {
        type:'Fire',
        image:'https://th.bing.com/th/id/R.1d521f5926fb3a5fa36d3ca863a6760e?rik=yzIr6PR2VTLjKg&riu=http%3a%2f%2ffc03.deviantart.net%2fimages3%2fi%2f2004%2f11%2f5%2f8%2fGradient_Series___Orange.png&ehk=4SU0LZk%2b5tetAUaIqRBva64p%2fuTAB5oW0XoQ90Ep4pA%3d&risl=&pid=ImgRaw&r=0'
    },
    {
      type:'Electric',
      image:'https://th.bing.com/th/id/R.72164c687d08460d23f4a11d1400a669?rik=sEG52lbuD8NCKA&pid=ImgRaw&r=0'  
    },
    {
        type:'Water',
        image:'https://wallpaperaccess.com/full/3898677.jpg'
    }
]

const MainPage = (props: Props) => {   
    const [pokemonData, setPokemonData] = useState<Array<any>>([1]);
    const [pokeballData, setPokeballData] = useState<Array<any>>([]);
    const [detailedLoading,setDetailedLoading] = useState<boolean>(false);
  
    
    
    

    const sampleArray =[1,2,3,4,5,6]
    //Fetching data for pokemons
    useEffect(()=>{
      const timeout = setTimeout(()=>{
        let tempArray :Array<any> = [];
        setDetailedLoading(true);
        fetch('https://pokeapi.co/api/v2/pokemon?limit=30').then(response=>response.json()).then(response=>response.results.map((pokemon:PokemonData)=>{
        fetch(pokemon.url).then(response=>response.json()).then(async (response)=>tempArray.push(response)).catch((err)=>Alert.alert('err', err.message)).finally(()=>{
          setDetailedLoading(false);
          setPokemonData(tempArray);
        });
    }))
      }, 1000);

      console.log(pokemonData);
      return ()=>{
        clearTimeout(timeout)
      }
    },[]);

    console.log(pokeballData, pokemonData)

    // fetching data for pokeballs
    useEffect(()=>{
      const timeout = setTimeout(()=>{
        setDetailedLoading(true);
        let tempArray: Array<any>  =[];
        fetch('https://pokeapi.co/api/v2/item?limit=15').then(response=>response.json()).then(response=>response.results.map((pokemon:PokemonData)=>{
        fetch(pokemon.url).then(response=>response.json()).then((response)=>{tempArray.push(response)}).catch((err)=>Alert.alert('err', err.message)).finally(()=>{
          setDetailedLoading(false);
          setPokeballData(tempArray);
        });
      
    }))
      }, 1000);

      console.log(pokeballData);
      return ()=>{
        clearTimeout(timeout)
      }
    },[]);
    
  


  
   
    const styles = StyleSheet.create({
        mainContainer:{
            display:'flex',
            flexDirection:'column',
            marginLeft:17
        },
        searchbar:{
            display:'flex',
            justifyContent:'center',
            flexDirection:'row',
            padding:4,
            width: '100%',
            alignItems:'center',
            marginTop:10
        },
        input: {
            height: 40,
            margin: 12,
            borderWidth: .5,
            padding: 10,
            color:TEXT_COLOR,
            borderRadius:20,
            borderColor:UI_COLOR,
            paddingLeft:15,
            backgroundColor:UI_COLOR,
            width:'75%'
          },
          heading:{
            color:TEXT_COLOR,
            fontSize:28,
            fontWeight:"600",
            marginLeft:12
          }
    })
  return (
    <View style={styles.mainContainer}>
      <View style={styles.searchbar}>
        <TextInput
        style={styles.input}
        placeholder="Search for pokemon"
        placeholderTextColor={TEXT_COLOR}
      />
      </View>
      <FlatList 
      numColumns={2}
      ItemSeparatorComponent={() => <View style={{height: 20}} />}
        data={TYPE_DATA}
        renderItem ={({item} :any)=><TypeCard image={item.image} type={item.type} />}
      />


    
      <Text style={styles.heading}>Pokemon</Text>
   
      <FlatList 
    data={pokemonData}
    horizontal={true}
    renderItem={({item})=><TypeCard type={`${item.name!=undefined ? item.name:'Loading...'}`} image={item.sprites ? item.sprites.front_default:''}  />}
    keyExtractor={item=>JSON.stringify(item)}
    ListEmptyComponent={<ActivityIndicator />}

/>
    <View style={{marginTop:20}}>
      <Text style={styles.heading}>Pokeballs</Text>
    </View>
    
    <FlatList 
    data={pokeballData}
    horizontal={true}
    renderItem={({item})=><TypeCard type={`${item.name!=undefined ? item.name:'A'}`.charAt(0).toUpperCase()+item.name.slice(1)} image={item.sprites ? item.sprites.default:''}  />}
    keyExtractor={item=>JSON.stringify(item)}
    ListEmptyComponent={<ActivityIndicator />}

/>
        
    </View>
  )
}

export default MainPage