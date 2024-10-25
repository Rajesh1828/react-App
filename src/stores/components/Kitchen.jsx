
import React from 'react'
import { kitchenData } from '../data/kitchen'

const Kitchen = () => {

    const firstFiveImages = kitchenData.slice(0,5)
  return (
    <>
    <h2>Kitchen</h2>
    <div className='ProSection'>
        
        {
            firstFiveImages.map((item)=>{
                return(
                  
                 
                    <div className="imageBox">
                        
                    <img  className='proImage' src={item.image} alt="image" />
                    
                    </div>
        )

    })
      





}
    </div>
    </>
  )
}

export default Kitchen