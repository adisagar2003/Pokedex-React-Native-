import { useEffect, useState } from "react"
import { useFetchAPI } from "./useFetchAPI";

const useFetchPokemonData = () => {
    const [pokemonData, setPokemonData] = useState<any>([]);
    const [pokemonLoading, setPokemonLoading] = useState<boolean>(true);
    const {data, error, loading} = useFetchAPI('https://pokeapi.co/api/v2/pokemon?limit=10');
    
    // Fetching data;
const fetchPokemonDataOnce = ()=>{
    if (!error && !loading && data!=null){
        data.map((pokemon:any)=>{
            fetchPokemonData(pokemon);
           
        });

        setPokemonLoading(false);

        
    }

}
    
    useEffect(()=>{
       fetchPokemonDataOnce();
    },[loading]);

    function fetchPokemonData(pokemon :any){
        let url = pokemon.url // <--- this is saving the pokemon url to a      variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
          fetch(url)
          .then(response => response.json())
          .then(function(pokeData){
            setPokemonData([...pokemonData, pokeData])
          console.log(pokeData)
          })
        }

    return {pokemonLoading, pokemonData}
}

export default useFetchPokemonData;

