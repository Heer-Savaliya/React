import { useBioContext } from './ContextApiIndex'

const Home = () => {
    // const myName=useContext(BioContext);
    const myName= useBioContext();
  return (
    <div className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-gray-900 text-white text-xl`}>
      <h1>Home Page , Hello Context Api ,My name is {myName}</h1>
    </div>
  )
}

export default Home

// import React, { useContext } from 'react'
// import { BioContext } from './ContextApiIndex'
// const myName=useContext(BioContext);         Aaa repetaildely use thay che badha to ane custom hook banavi devanu