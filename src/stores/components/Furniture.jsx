import React from 'react'
import { furnitureData } from '../data/furniture'

const Furniture = () => {

    const firstFiveImages = furnitureData.slice(0,5)
  return (
    <>
    <h2>Furniture</h2>
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

export default Furniture