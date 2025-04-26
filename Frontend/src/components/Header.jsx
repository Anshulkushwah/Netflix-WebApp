import { IoIosArrowDropdown } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { API_END_POINT } from "../utils/constant";
import axios from "axios";
import { setUser } from "../Redux/slice/userSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { setToggle } from "../Redux/slice/movieSlice";
import store from "../Redux/store";

const Header = () => {
    const user = useSelector((store) => store.app.user);
    const toggle = useSelector(store => store.movie.toggle)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // console.log(user);
    const logoutHandler = async() => {
          try{
                const res = await axios.get(`${API_END_POINT}/logout`);
                if(res.data.success){
                    toast.success(res.data.message);
                }
                dispatch(setUser(null));
                navigate("/");

          } catch (error) {
                console.log(`error at logout ${error}`);
          }
    }

    const toggleHandler = () => {
      dispatch(setToggle());
    }

  return (
    <div>
        <div className="absolute z-10 flex w-[100%] items-center px-6 justify-between bg-gradient-to-b from-black ">
            <img className="w-56 mt-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158" alt="Netflix logo"/>
            {
              user && (
                <div className=" flex items-center">
                    <IoIosArrowDropdown className=" size-6" color='white'/>
                    <h1 className=" text-lg font-medium text-white">{user.fullName}</h1>
                    <div className="ml-4">
                        <button onClick={logoutHandler} className="bg-red-800 rounded-sm text-white px-4 py-2" >Logout</button>
                        <button onClick={toggleHandler} className="bg-red-800 rounded-sm text-white px-4 py-2 ml-2">{toggle ? "Home" : "Search Movie"}</button>
                    </div>
                </div>
              )
            }
        </div>
      
    </div>
  )
}

export default Header
