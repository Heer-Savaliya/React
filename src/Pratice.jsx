import React from 'react'

const Pratice = () => {
  const student = [1,2,3,4,5];
  return (
    <div>
      <h1>Interview questions</h1>
      {/* <h3>{student.length || "No student"}</h3> */}
      {/* <h3>{!student.length && "No student"}</h3> */}
      {/* <h3>{student.length ===0 && "No student"}</h3> */}
      <h3>{!Boolean(student.length) && "No student"}</h3>
      <h3>No of students = {student.length}</h3>
    </div>
  )
}

export default Pratice
