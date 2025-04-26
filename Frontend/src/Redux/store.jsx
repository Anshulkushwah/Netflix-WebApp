import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import movieReducer from "./slice/movieSlice";
import searchSlice from "./slice/searchSlice"

const store = configureStore({
    reducer:{
        app: userReducer,
        movie: movieReducer,
        searchMovie: searchSlice,
    }
});

export default store;