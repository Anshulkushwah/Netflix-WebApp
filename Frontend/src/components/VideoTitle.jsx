import React from 'react'
import { FaPlay } from "react-icons/fa";
import { MdMore } from "react-icons/md";

const VideoTitle = ({overview,title}) => {
  return (
    <div className=' overflow-x-hidden absolute text-white pt-[18%] p-12 '>
        <h1 className=' text-3xl font-bold select-none '>{title}</h1>
        <p className='w-1/3 mt-4 select-none'>{overview}</p>
        <div className=' flex gap-4 mt-8 '>
            <button className=' flex items-center gap-2 px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-70 '>
                <FaPlay size="24px"/>
                <span>Play</span>
                </button>
            <button className=' flex items-center gap-2 px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-70 '>
                <MdMore size="24px"/>
                <span>Watch more</span>
                </button>
        </div>
    </div>
  )
}

export default VideoTitle