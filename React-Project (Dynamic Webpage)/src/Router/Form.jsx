import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


const Form = () => {
  let navigate=useNavigate()

let [state,setState]=useState({

  user:"",
  edu:"",
  course:"",
  gender:"",
  mail:"",
  phno:"",
  add:""
})

let [check, setCheck] = useState([]);

let [submittedData, setSubmittedData] = useState(null);



let handelCheck = (e) => {
  let { value } = e.target;
  if (check.includes(value)) {
    setCheck(check.filter(item =>item !== value));  
  } else {
    setCheck([...check, value]);
  }
};

let {user,edu,course,gender,mail,phno,add}=state;

let handleChange=(e)=>{
let {name,value}=e.target;
setState({...state,[name]:value})
};

let handleSubmit=async(e)=>{
  e.preventDefault();
  setState({ user:"",
    course:"",
    edu:"",
    gender:"",
    mail:"",
    phno:"",
    add:""})

    setCheck([]);
    setSubmittedData({ ...state, languages: check });


    try{
      let payload={...state}

      let {data}=await axios.post("http://localhost:5000/course",payload)
      console.log({data});

      navigate("/display")

      }
      catch(err){
          console.log(err);
          
      }
}
  return (
    <div id='formContainer'>
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
    <select name="course" value={course} onChange={handleChange} className='inputbox' placeholder='Education :'  required >
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
        English <input type="checkbox" name="check" value="English" onChange={handelCheck} />
        Hindi<input type="checkbox" name="check" value="Hindi" onChange={handelCheck} />
        Others <input type="checkbox" name="check" value="Others" onChange={handelCheck} />
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

export default Form