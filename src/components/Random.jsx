import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default function Random() {
  // const [gif,setGif] = useState('');
  // const [loading,setLoading]=useState('false');

  // async function fetchData(){
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   const {data} = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   setGif(imageSource);
  //   setLoading(false);
  // }

  // useEffect( () => {
  //   fetchData();
  // },[])

  const {gif,loading,fetchData} = useGif();

  function clickHandler(){
      fetchData();
  }

  return( 
    <div className="w-1/2 bg-green-500 rounded-lg border border-black flex flex-col
    items-center gap-y-5 mt-[15px]">
      <h1 className="text-2xl mt-15px underline uppercase font-bold">Random Gif</h1>
      
      {
        loading ? (<Spinner/>) : (<img src={gif} width="450"/>)
      }
      
      <button onClick={clickHandler} className="w-10/12 bg-white text-lg py-2 rounded-lg mb-[20px]">Generate</button>
    </div>
    )
}
