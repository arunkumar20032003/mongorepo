import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';



function Signup(){

const [name,setName]=useState()
const [email,setEmail]=useState()
const [password,setPassword]=useState()
const submithere=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/register',{name,email,password})  //
    // .then(result =>console.log(result))
    // .catch(err=>console.log(err))
}

    return(
       <div>
        <h2>Register</h2>
        <form action="" onSubmit={submithere}>
<label htmlFor="">Name</label>
<input type="text" name="name" id="" onChange={(e)=>setName(e.target.value)}/>
<label htmlFor="">Email</label>
<input type="text" name="" id="" onChange={(e)=>setEmail(e.target.value)}/>
<label htmlFor="">Password</label>
<input type="text" name="" id="" onChange={(e)=>setPassword(e.target.value)}/>

        
<button type="submit">Register</button>
</form>
<p>already have account </p>
<Link to="/login"> login</Link>
        
       </div>
    )
}


export default Signup;