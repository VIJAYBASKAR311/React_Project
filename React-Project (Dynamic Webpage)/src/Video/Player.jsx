import React from 'react'

const Player = (props) => {


    return (
        <div id='video2'>
            <video src={props.play} controls autoPlay height id='v1'></video>
            
        </div>
    )
}

export default Player