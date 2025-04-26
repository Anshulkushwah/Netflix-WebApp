import axios from 'axios';
import React from 'react'
import { useDispatch } from 'react-redux'
import { options, Upcoming_Movie_API } from '../utils/constant';
import { getUpcomingMovies } from '../Redux/slice/movieSlice';

const useUpcomingMovies = async () => {
    const dispatch = useDispatch();
  try {
    const res = await axios.get(Upcoming_Movie_API,options);
    // console.log("Up coming api fetch ->", res);
    dispatch(getUpcomingMovies(res.data.results));
    
  } catch (e) {
    console.log(`Error During Up coming movie api fetch ->   ${e}`);
  }
}

export default useUpcomingMovies
