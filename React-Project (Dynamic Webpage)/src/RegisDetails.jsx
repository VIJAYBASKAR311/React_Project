import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Display from './Display';

const RegisDetails = () => {

let [state,setState]=useState(null);

let fetchData=async()=>{
  let data=await axios.get("http://localhost:5000/course");
  setState(data.data)
}
useEffect(()=>{
  fetchData()
},[])

  return (
    <div>
<h1 id='form-heading'>DETAILS  OF Student</h1>
<div  id='display-data'>
  {
    state === null?true:state.map((data)=>{return <Display key={data.id}{...data}></Display>})
  }
</div>
        
    </div>
  )
}

export default RegisDetails