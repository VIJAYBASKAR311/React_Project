import React from 'react'
import { Link } from 'react-router-dom'

const Display = ({user,edu,id,course,gender,mail,phno,add}) => {
  return (
    <div>
<h1>user:{user}</h1>
<h1>edu:{edu}</h1>
 <h1>course:{course}</h1>
 <h1>gender:{gender}  </h1>
 <h1>mail:{mail}</h1>
 <h1> phno:{phno}  </h1>
 <h1> add:{add}  </h1>



{/* for edit axios */}


<div id='display-data-button'>
  <Link to={`/edit/${id}`} className='link-none'>EDIT</Link>
  <Link to={`/delete/${id}` }className='link-none'>DELETE</Link>

</div>
        
    </div>
  )
}

export default Display