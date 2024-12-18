import React, { useEffect, useState } from 'react'
    import { useNavigate, useParams } from 'react-router-dom'
    import axios from 'axios';

const EditCourse = () => {
    
    let navigate=useNavigate();
    let {id}=useParams()


    let [state,setState]=useState({
        user:"",
        edu:"",
        course:"",
        gender:"",
        mail:"",
        phno:"",
        add:""
})

    let{user,edu,course,gender,mail,phno,add}=state;

    let handleChange=(e)=>{
        let {name,value}=e.target

        setState({...state,[name]:value})
    }

    useEffect(()=>{
    
let fetchData=async()=>{
    let data=await axios.get(`http://localhost:5000/course/${id}`);
    setState(data.data)
  }
fetchData(0)
    },[id])

    let handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            let payload={...state}

            let {data}=await axios.put(`http://localhost:5000/course/${id}`,payload)
            console.log({data});

                navigate("/display")
            
            }
            catch(err){
                console.log(err);
            }
    }
  return (
    <div>
   <form action="" onSubmit={handleSubmit} id='form'>
    <h1 id='stu-form-title'>Student FORM </h1>
    
    <br />

    <label htmlFor="user"></label>
    <input type="text" name='user'  value={user} onChange={handleChange} placeholder='User Name :' className='inputbox' required/>
<br />
    <label htmlFor="edu"></label>
    <input type="text" name='edu'  value={edu} onChange={handleChange} placeholder='Education :'className='inputbox' required/>
<br />


    <label htmlFor="course"></label>
    <select name="course" value={course} onChange={handleChange} className='inputbox' placeholder='Education :' required >
    <option value="subjects">subjects</option>
    <option value="JAVA FullStack">JAVA FullStack</option>
    <option value="Python FullStack">Python FullStack</option>
    <option value="Mern Stack">Mern Stack</option>
    <option value="Devops">Devops</option>
    <option value="Testing">Testing</option>
    </select>
<br />

    <div id='langbox'>
    <label htmlFor="check">Languages :</label>
        English <input type="checkbox" name="check" value="English"  />
        Hindi<input type="checkbox" name="check" value="Hindi" />
        Others <input type="checkbox" name="check" value="Others"/>
        </div>

    <label htmlFor="gender"></label>
    <input type="text" name='gender' value={gender} onChange={handleChange}placeholder='Gender :' className='inputbox' required/>
<br />
    <label htmlFor="mail"></label>
    <input type="text" name='mail'  value={mail}  onChange={handleChange} placeholder='Mail Address :'className='inputbox' required/>
<br />
    <label htmlFor="phno"></label>
    <input type="text" name='phno'  value={phno} onChange={handleChange}placeholder='Mobile Number :' className='inputbox' required/>
<br />
    <label htmlFor="add"></label>
    <input type="text" name='add'  value={add}  onChange={handleChange} placeholder='Address :' className='inputbox' required/>
<br />
<button type='submit' id='but-form'>Submit</button>
      </form>




    </div>
  )
}

export default EditCourse