import React from 'react'
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import InstituteLocation from './InstituteLocation';
const Details = () => {
  return (

    <div>

    <h3 id='c1'>CONTACT US</h3>

    <div id='contact'> 
         <div>
        <h1>Contact fro Any Query</h1>
        <h1 id='c2'>Bengaluru - Rajajinagar</h1>
        <p>XHR4+RPV, A-83 5th Main, Industrial Estate, Rajajinagar, 10th Main Rd, opposite to Johnson lifts, 6th Block, 2nd Block, 6th Block, Rajajinagar, Bengaluru, Karnataka pincode -560010</p>
        <div id='mail' > <MdAttachEmail size={25} color='gold'/> enquiry@jspiders.com</div>
        <h3> <MdOutlinePermPhoneMsg />-7395881432</h3>
        <h3><FaPhoneVolume />-8778268567</h3>

        </div>
        <div>
          {/* <img src="https://firebasestorage.googleapis.com/v0/b/vijay-a07be.appspot.com/o/Screenshot%202024-10-03%20111036.png?alt=media&token=ab0f0bff-f8a1-4153-b140-0041ca74e373" height={500} width={800} alt="" /> */}
          <InstituteLocation />
       
        </div>
    </div>
  </div>
  )
}

export default Details