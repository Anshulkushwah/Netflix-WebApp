import axios from 'axios'
import React from 'react'
import { options, Top_Rated_Movie_API } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { getTopRatedMovies } from '../Redux/slice/movieSlice'

const useTopRatedMovies = async () => {
    const dispatch = useDispatch();
  try {
    const res = await axios.get(Top_Rated_Movie_API,options);
    // console.log("TOP rated api fetch ->", res);
    dispatch(getTopRatedMovies(res.data.results));

    
  } catch (e) {
    console.log(`Error During Popular movie api fetch ->   ${e}`);
  }
}

export default useTopRatedMovies
