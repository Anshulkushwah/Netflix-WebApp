import React from 'react'
import { TMDB_IMG_url } from '../utils/constant'
import { useDispatch } from 'react-redux';
import { setOpen, getId } from '../Redux/slice/movieSlice';

const MovieCard = ({posterPath, movieId}) => {

  const dispatch = useDispatch();
  // console.log("MovieCard ->>", movieId );
  if(posterPath === null) return null;
  const handleOpen = () => {
      dispatch(getId(movieId));
      dispatch(setOpen(true));
      
  }

  return (
    <div className='w-48 p-1' onClick={handleOpen}>
        <img src={`${TMDB_IMG_url}/${posterPath}`} alt='Movie Poster' />
    </div>
  )
}

export default MovieCard