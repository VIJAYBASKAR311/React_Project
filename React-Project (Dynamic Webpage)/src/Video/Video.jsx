import React, { useState } from 'react'
import VideoPlayer from  './VideoPlayer'
import JSON from './Video.json'


const Video = () => {

   let [state,setState]=useState(JSON)

  let [play,setplay]=useState(state[0])

   let handlePlay=(data)=>{
         setplay(data.videoUrl)
  }
  return (
    <div>
      
      <div>
      <VideoPlayer state={state} play={play} handlePlay={handlePlay} ></VideoPlayer>
    

    </div>
    </div>
  )
}

export default Video