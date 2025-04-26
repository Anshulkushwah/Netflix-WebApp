import React from 'react'
import { useSelector } from 'react-redux'
import store from '../Redux/store'
import MovieList from "./MovieList"

const MovieContainer = () => {
    const movie = useSelector(store => store.movie) || {};

    // Providing default values for the movie properties
    const popularMovies = movie.popularMovies || [];
    const nowPlayingMovies = movie.nowPlayingMovies || [];
    const topRatedMovies = movie.topRatedMovies || [];
    const upComingMovies = movie.upComingMovies || [];

    // console.log(movie);

    return (
        <div className='bg-black'>
            <div className=' -mt-52 relative z-10 '>
                <MovieList title={"Popular Movies"} movies={popularMovies} />
                <MovieList title={"Now Playing Movies"} movies={nowPlayingMovies} />
                <MovieList title={"Top Rated Movies"} movies={topRatedMovies} />
                <MovieList title={"Upcoming Movies"} movies={upComingMovies} />
            </div>
        </div>
    )
}

export default MovieContainer
