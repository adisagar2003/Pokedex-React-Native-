import {useState, useEffect} from "react";

export const  useFetchAPI = (url: string) => { 
    const [data, setData] = useState<any|null>(null);
    const [error, setError] = useState<object|null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const getData = () =>{
        setLoading(true);
        fetch(url).then(response=>response.json()).then(json=>setData(json)).catch(err=>setError(err));
        setLoading(false);
    }
    useEffect(()=>{
        getData();
    },[])
    return {data,error, loading}

}