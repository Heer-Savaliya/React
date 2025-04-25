import React from 'react'

const MemoCount = () => {
    console.log("Nothing changed here but Ive now rendered");
  return (
    <div className='mt-3 font-display text-center'>
      <p>Nothing changed here but Ive now rendered</p>
      
    </div>
  )
}
// export default MemoCount

export default React.memo(MemoCount)
