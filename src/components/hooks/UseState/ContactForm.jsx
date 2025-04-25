import React, { useState } from 'react'
import './Registration.css'
const ContactForm = () => {
    const [user,setUser]=useState({
        username:"",
        email:"",
        message:"",
    })
    
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setUser((prev)=>({...prev ,[name]:value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        
      };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="container">
      <h1>Contact Form</h1>
        <label htmlFor="username"><b>Username</b></label>
        <input type="text" name="username" id="" required autoComplete='off' value={user.username} onChange={handleChange}/>

        <label htmlFor="email"><b>Email</b></label>
        <input type="email" name="email" id="" required autoComplete='off' value={user.email} onChange={handleChange}/>

        <label htmlFor="message"><b>Message</b></label>
        <textarea name="message" id="" required autoComplete='off' type="text" rows={6} value={user.message} onChange={handleChange}></textarea>
        <div className="clearfix">
            <button type="submit" className="btn">
              Contact Us 
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
