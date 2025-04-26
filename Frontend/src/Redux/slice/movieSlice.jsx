import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        popularMovies : null,
        topRatedMovies : null,
        upComingMovies : null,
        toggle : false,
        trailerMovie:null,
        open : false,
        id:"",
    },
    reducers:{
        // 
        getNowPlayingMovies:(state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        getPopularmovies:(state, action)=>{
            state.popularMovies = action.payload;
        },
        getTopRatedMovies:(state, action)=>{
            state.topRatedMovies = action.payload;
        },
        getUpcomingMovies:(state,action)=>{
            state.upComingMovies = action.payload;
        },
        getTrailerMovie:(state,action)=>{
            state.trailerMovie = action.payload;
        },
        setToggle : (state)=>{
            state.toggle = !state.toggle;
        },
        setOpen:(state,action)=>{
            state.open = action.payload;
        },
        getId: (state, action)=>{
            state.id = action.payload;
        },
        
    }
});

export const {getNowPlayingMovies, getPopularmovies, getTopRatedMovies, getUpcomingMovies, setToggle, getTrailerMovie, setOpen, getId} = movieSlice.actions;
export default movieSlice.reducer;