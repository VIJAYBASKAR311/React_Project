import React from 'react'
import Video from '../Video/Video';
import { BiSolidOffer } from "react-icons/bi";
import ImgContainer from '../img-slid/Img-slider/ImgContainer';


const Home = () => {
  return (
    <div>
<div id='bob'>
<marquee behavior="Scroll" scrollamount="18"  direction="left"  id='mtag' >limited offer only <BiSolidOffer /> </ marquee>
<img src="https://firebasestorage.googleapis.com/v0/b/vijay-a07be.appspot.com/o/Screenshot%202024-10-05%20141155.png?alt=media&token=ec9915b6-9246-47cf-95ea-2a44fd485deb" width={1500} height={80}  alt="" />

<div id='first-page'>
<ImgContainer></ImgContainer>

  
<Video></Video>

</div>

</div>

    </div>
  )
}

export default Home 