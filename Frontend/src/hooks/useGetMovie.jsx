import axios from 'axios'
import React, { useEffect } from 'react'
import { options } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { getTrailerMovie } from '../Redux/slice/movieSlice';

const useGetMovie = async (movieid) => {

    // console.log("iddddd -> ", movieid);
    const dispatch = useDispatch();

    useEffect(() => {
        const GetMovie = async () => {
            try {
                const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieid}/videos`, options);

                // console.log(res);
                const trailer = res?.data?.results?.filter((item) => {
                    return item.type === "Trailer";
                })
                dispatch(getTrailerMovie(trailer.length > 0 ? trailer[0] : res.data.results[0]));

            } catch (error) {
                console.log("Error while background video api fetch", error);
            }
        }
        GetMovie();
    }, [])
}

export default useGetMovie
