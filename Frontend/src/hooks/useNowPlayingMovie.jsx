import axios from 'axios';
import { Now_Playing_API, options} from "../utils/constant"
import { getNowPlayingMovies } from '../Redux/slice/movieSlice';
import { useDispatch } from "react-redux";

const usenowPlayingMovies = async () => {
    const dispatch = useDispatch();
    try{
        const res = await axios.get(Now_Playing_API, options);
        // console.log("Playing api fetch ->", res);
        dispatch(getNowPlayingMovies(res.data.results))
    } 
    catch(e){
        console.log(`Error During now playing api fetch ->   ${e}`);
    }
  }

export default usenowPlayingMovies; 