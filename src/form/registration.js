import React,{useState} from 'react'

export default function Registration() {
const [name,setName]=useState("");
const [password,setPassword]=useState("");
const [email,setEmail]=useState("");

function signUp(){
    let item={name,password,email}
    console.warn(item);
}



return (
    <div className='col-sm-6 offset-sm-3'>
<h1> Registration Page</h1>
<input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control"  placeholder='name'  />
<input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control"  placeholder='password'  />
<input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder='email' />
 <button className='btn btn-primary' >Sign Up</button>


    </div>
  )
}
