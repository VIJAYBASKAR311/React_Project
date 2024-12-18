import React from 'react'
import { CgProfile } from "react-icons/cg";
const Trainer = () => {
  return (
    <div id='trainer'>

<div className='layer'>
<div id='trainer-box'>
    <h1 className='sir-logo'> <CgProfile  size={100} color='grey'/></h1>
    <h1>Shankar  </h1>
    <h3> Core Java</h3>
    <p>Experience-09 yrs</p>
</div>
<div id='trainer-box' >
    <h1 className='sir-logo'> <CgProfile size={100} color='grey'/></h1>
    <h1>Sridhar  </h1>
    <h3> Advanced Java</h3>
    <p>Experience-02 yrs</p>
</div>


<div id='trainer-box'>
    <h1  className='sir-logo'> <CgProfile size={100}  color='grey'/></h1>
    <h1>Laxman </h1>
    <h3> web-Technologies</h3>
    <p>Experience-01 yrs</p>
</div>

<div id='trainer-box'>
    <h1  className='sir-logo'> <CgProfile size={100}  color='grey'/></h1>
    <h1>Saish </h1>
    <h3>Servlets,SpringBoot</h3>
    <p>Experience-03 yrs</p>
</div>
</div>
<div  className='layer'>

<div id='trainer-box'>
    <h1  className='sir-logo'> <CgProfile size={100}  color='grey'/></h1>
    <h1>UmaShankar </h1>
    <h3>Node,Express</h3>
    <p>Experience-02 yrs</p>
</div>


<div id='trainer-box'>
    <h1  className='sir-logo'> <CgProfile size={100}  color='grey'/></h1>
    <h1>Shashank</h1>
    <h3>SQL</h3>
    <p>Experience-01yrs</p>
</div>


<div id='trainer-box'>
    <h1  className='sir-logo'> <CgProfile size={100}  color='grey'/></h1>
    <h1>Dharshan</h1>
    <h3> React-JS</h3>
    <p>Experience-02 yrs</p>
</div>
<div id='trainer-box'>
    <h1  className='sir-logo'> <CgProfile size={100}  color='grey'/></h1>
    <h1>Siddhesh</h1>
    <h3> Programming</h3>
    <p>Experience-01 yrs</p>
</div>

</div>
    </div>
  )
}

export default Trainer