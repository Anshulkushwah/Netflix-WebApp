import axios from 'axios'
import { options, Popular_Movie_API } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { getPopularmovies } from '../Redux/slice/movieSlice'

const usePopularMovies = async () => {
    const dispatch = useDispatch();
  try{
    const res = await axios.get(Popular_Movie_API,options);
    dispatch(getPopularmovies(res.data.results))
    // console.log("Popular movie ->", res);
  }
  catch(e){
    console.log(`Error During Popular movie api fetch ->   ${e}`);
  }
}

export default usePopularMovies