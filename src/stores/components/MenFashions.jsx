import React from 'react'
import { menData } from '../data/men'

const MenFashions = () => {

    const firstFiveImages = menData.slice(0,5)
  return (
    <>
    <h2>Men Fashions</h2>
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

export default MenFashions