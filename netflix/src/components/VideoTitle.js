import React from 'react';
import { CiPlay1 } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";


const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video absolute text-white pt-[18%] mx-[5%]'>
      <h1 className='text-3xl font-bold '>{title}</h1>
      <p className='mt-4 w-1/3'>{overview}
      </p>
      <div className='flex mt-10'>
        <button className='flex items-center px-6 py-2 bg-white text-black rounded-sm hover: opacity-80'>
            <CiPlay1 size="24px"/> 
            <span>Play</span>
        </button>
        <button className='mx-2 flex items-center px-6 py-2 bg-white text-black rounded-sm bg-opacity-50'>
            <CiCircleInfo size="24px"/>
            <span className='ml-1'>Watch More</span>
        </button>
      </div>
    </div>
  )
}

export default VideoTitle
