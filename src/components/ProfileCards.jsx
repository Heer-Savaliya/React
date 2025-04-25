import React from 'react'

const ProfileCards = (props) => {
    const {name ,age,greeting ,children}=props      /* De-structuring */    
  return (
    <>
      <h2>Name : {name}</h2>
      <h3>Age : {age}</h3>
      <p>{greeting}</p>
      <div>{children}</div>
    </>
  )
}

export default ProfileCards
