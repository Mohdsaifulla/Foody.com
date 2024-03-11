import React from 'react'

const RestaurantMenuList = ({key,data}) => {
    console.log(key)
    console.log(data)
  return (
    <div>
        <div>
            <div>
                <div><span>{key}</span><span>20</span></div>
                <div>^</div>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default RestaurantMenuList