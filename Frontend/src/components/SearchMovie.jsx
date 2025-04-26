import React, { useState } from 'react';
import axios from "axios";
import {options, SEARCH_MOVIE_URL} from "../utils/constant";
import { useDispatch, useSelector } from 'react-redux'
import { setSearchMovieDetails } from '../Redux/slice/searchSlice';
import {setLoading} from "../Redux/slice/userSlice"
import MovieList from './MovieList';

const SearchMovie = () => {
  const [searchMovie, setSearchMovie] = useState("");
  // console.log(searchMovie);
  const dispatch = useDispatch();
  const isLoading = useSelector(store => store.app.isLoading);
  const {movieName, searchedMovie} = useSelector(store => store.searchMovie);

    const submitHandler = async (e) => {
      e.preventDefault();
      dispatch(setLoading(true));
      try{
          const res = await axios.get(`${SEARCH_MOVIE_URL}${searchMovie}&include_adult=false&language=en-US&page=1`, options);
          console.log(res.data.results);
          const movie = res?.data?.results;
          dispatch(setSearchMovieDetails({searchMovie, movie}));
      } catch (error) {
          console.log(error);
      } finally{
          dispatch(setLoading(false));
      }

      setSearchMovie("");
    }

  return (
    <>
        <div className='flex justify-center pt-[15%] w-[100%] '>
            <form onSubmit={submitHandler} className=' w-[50%] '>
                <div className='flex justify-between shadow-md bottom-2 border-gray-300 p-2 rounded-lg w-[100%]'>
                  <input value={searchMovie} onChange={(e)=>{setSearchMovie(e.target.value)}} className=' w-full outline-none rounded-md text-lg' type='text' placeholder='Search Movie...'/>
                  <button className=' bg-red-600 text-white rounded-md px-4 py-2 '>{ isLoading ? "loading..." : "Search"}</button>
                </div>
            </form>
        </div>
        {
          searchedMovie != null ? (<MovieList title={movieName} searchMovie = {true} movies={searchedMovie} />) : (<h1 className='flex mx-auto'> Movie Not Found !! </h1>)
        }
        
    </>
    
  )
}

export default SearchMovie