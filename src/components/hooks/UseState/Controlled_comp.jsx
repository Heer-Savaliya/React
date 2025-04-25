import React, { useState } from 'react'

const Controlled_comp = () => {
    const [name,setName] = useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        // const dataValue = document.querySelector("#inputName");
        // console.log(dataValue.value);  
        console.log(name);
        
    }

    const handleChange=(e)=>{
        setName(e.target.value);
    }
  return (
    <div className='container short-container'>
      <h1>Controlled Component</h1>

      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name:
            <input type="text" name="name" id="inputName" value={name} onChange={handleChange} placeholder='Enter your name'/>
        </label>
        <br />
        {/* <button type='submit' className='state-button'></button> */}
      </form>
    </div>
  )
}

export default Controlled_comp
