import React from 'react'
import {Link, Outlet } from 'react-router-dom'
import { LuPhoneCall } from "react-icons/lu";
import { IoHome } from "react-icons/io5";
import { FaBookReader } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import { FaBuildingUser } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";


const Container = () => {
  return (
    <div id='cont'>

<div id='nav'>

<Link to='/home' className='link-none'><h1><img src="https://firebasestorage.googleapis.com/v0/b/vijay-a07be.appspot.com/o/jspy%20logo.png?alt=media&token=0bbc1291-0a1e-439a-9b32-42eaf21b81a4" height={60} alt="" /></h1>
</Link>

<Link to='/home' className='link-none'><IoHome />HOME</Link>
<Link to='/subject' className='link-none'><FaBookReader />Course</Link>
<Link to='/trainer' className='link-none'><CgProfile />Trainer</Link>

<Link to='/Course' className='link-none'><FaBuildingUser />About us</Link>
<Link to='/Form' className='link-none'><GiArchiveRegister />Register</Link>
<Link to='/Details' className='link-none'><LuPhoneCall size={20} /></Link>
<Link to='/display' className='link-none'></Link>


</div>

<div>
    <Outlet > 
    </Outlet>
</div>
    </div>
  )
}

export default Container