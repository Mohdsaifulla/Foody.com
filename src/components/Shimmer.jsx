import React from 'react'

const Shimmer = () => {
    const arr=[1,2,3,4]
  return (
    <div className='bg-gray-400 w-20 h-20'>
        {arr.map((item ,id)=>
        <div key={id}>
            <div></div>
        </div>

        )}
    </div>
  )
}

export default Shimmer