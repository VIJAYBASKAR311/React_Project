import React from 'react'
import Player from './Player'
import PlayerList from './PlayerList'





const VideoPlayer = ({state,play,handlePlay}) => {
    // console.log(handlePlay);
    return (
    <div id="video1">
        <div id='div1'>
        <Player play={play} ></Player>
        </div>
        <div id='div2'>
          {
            state.map(data=>{
             return <PlayerList data={data} handlePlay={handlePlay}></PlayerList>
            })
          }
        </div>
    </div>
  )
}
export default VideoPlayer




