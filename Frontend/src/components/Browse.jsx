import React, { useEffect } from 'react'
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MainContainer from './MainContainer';
import MovieContainer from './MovieContainer';
import usenowPlayingMovies from '../hooks/useNowPlayingMovie';
import usePopularMovies from '../hooks/usePopularMovie';
import useTopRatedMovies from '../hooks/useTopRatedMovie';
import useUpcomingMovies from '../hooks/useUpcomingMovie';
import SearchMovie from "./SearchMovie"

const Browse = () => {
  const user = useSelector(store => store.app.user);
  const toggle = useSelector(store => store.movie.toggle);
  const navigate = useNavigate();


  // this is custom hook
  usenowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }

  }, []);

  return (
    <div>
      <Header />
      <div >
        {
          toggle ? (<SearchMovie />) : (
            <>
              <MainContainer className="overflow-x-hidden" />
              <MovieContainer className="overflow-x-hidden"/>
            </>
          )
        }
      </div>
    </div>
  )
}

export default Browse;
