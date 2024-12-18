import React from 'react'

const PlayerList = ({ data, handlePlay }) => {
    
    let { title, thumbnailUrl } = data


    return (
        <div id='video-player'>
            <br />
            <h1 id='h1'>{title}</h1>
            
            <img onClick={()=>handlePlay(data)} src={thumbnailUrl} alt=""  id='video3'/>
        </div>
    )
}
export default PlayerList 