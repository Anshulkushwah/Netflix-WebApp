import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'
import store from '../Redux/store'

const MainContainer = () => {
    const movie = useSelector(store=>store.movie?.nowPlayingMovies);
    if(!movie) return; // early return
    // console.log("Main ->>> ", movie);
   

    const {overview, id, title} = movie[4];
    // console.log("MainContainer ->>> ", id)

  return (
    <div>
      <VideoTitle className="w-screen"  overview={overview} title={title}/>
      <VideoBackground movieid={id}/>
    </div>
  )
}

export default MainContainer