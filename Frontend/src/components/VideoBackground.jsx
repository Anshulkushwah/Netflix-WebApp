import React from 'react'
import useGetMovie from '../hooks/useGetMovie'
import { useSelector } from 'react-redux';

const VideoBackground = ({movieid, bool}) => {
    // console.log("video back ground ",movieid )
    const trailerMovie = useSelector(store => store.movie.trailerMovie);
    useGetMovie(movieid);
    const Datakey = trailerMovie ? trailerMovie.key : "XO8wew38VM8";

  return (
    <div className=' w-[vw] overflow-hidden '>
        <iframe
        className= {`${ bool ? "w-[100%]" : "w-screen aspect-video"}`}
        src={`https://www.youtube.com/embed/${Datakey}?si=CmnBRlN7yXhjf_ZI&autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0" 
        allowFullScreen>
        </iframe>
    </div>
  )
}

export default VideoBackground
