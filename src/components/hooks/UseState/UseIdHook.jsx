import React, { useId } from 'react'

const UseIdHook = () => {

    //! Each element mate new ID
//     const nameid=useId();
//     const emailId=useId();
//   return (
//     <div>
//       <h1>UseId hook</h1>
//       <form action="">
//         <div>
//             <label htmlFor={nameid}>Username :</label>
//             <input type="text" name="name" id={nameid} />
//         </div>
//         <div>
//             <label htmlFor={emailId}>Email :</label>
//             <input type="email" name="email" id={emailId} />
//         </div>
//         <button type='submit'>Submit</button>
//       </form>
//     </div>
//   )

//! Each id mate navi id nay banavani (10 koy to kay 10 useID nay banavani hoy)
//! ak j id banavani

const id=useId();
    
  return (
    <div>
      <h1>UseId hook</h1>
      <form action="">
        <div>
            <label htmlFor={id + "nameid"}>Username :</label>
            <input type="text" name="name" id={id + "nameid"} />
        </div>
        <div>
            <label htmlFor={id + "emailid"}>Email :</label>
            <input type="email" name="email" id={id + "emailid"} />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default UseIdHook
