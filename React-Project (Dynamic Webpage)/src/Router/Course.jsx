import React from 'react'
import { PiCertificateDuotone } from "react-icons/pi";
import { MdOutlineCastForEducation } from "react-icons/md";
import { FaHeadSideVirus } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";




const Course = () => {
  return (
    <div>      <div id='home'>
    <h1 id='home2'>LARGEST SOFTWARE TRAINING ORGANISATION</h1>
    <p id='home1'>
  JSpiders is the world’s ace software course training organization with an aim to bridge the gap between the demands of the industry and the curriculum of educational institutions.

With centers across the Globe, the institute is a platform where young minds are given the opportunity to build successful careers.

”JSpiders is a place where businesses find talent and dreams take flight."
</p>
  </div>
  
  <div id='ab2'>

<div>
  <p><FaHeadSideVirus  size={35} color='blue'/></p>
  <h1>
  Experience</h1>
  <p className='p1'>A teaching method that helps students connect what they learn to their real-world experiences."Education's purpose is to replace an empty mind with an open one". </p>
</div>
<div>
  <p><MdOutlineCastForEducation  size={35} color='lightblue'/></p>
  <h1>Education
  </h1>
  <p  className='p1'>Quality education
  Helps students acquire basic literacy and numeracy, and feel valued and included ,gnite your curiosity, explore education ,Discover the joy of learning
  </p>
</div>
<div>
  <p><PiCertificateDuotone  size={35} color='gold'/></p>
  <h1>
Certificate
</h1>
  <p className='p1'>"Your outstanding achievements in course reflect your intelligence and persistence" 
  Succinctly encapsulate the essence of the certification, highlighting the recipient’s achievements and recognition.
  </p>
</div>


    </div >


    <div id='ab3'>
      <div>
      <h3>Feature of our Course</h3>
      <h1 id='why'>Why Choose Us?</h1>
      <p>A teaching method that helps students connect what they learn to their real-world experiences.</p>
      </div>
      <div>
        <h2><FaCrown color='gold'/>Best Industry Leaders</h2>
        <h2>
        <FaClock color='gray'/> Learn Online at Your Own Pace</h2>
        <h2><AiFillSafetyCertificate  color='goldenrod'/>Professional Certification</h2>
      </div>
    </div>
    </div>
  )
}

export default Course