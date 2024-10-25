import React from 'react'
import { fridgeData } from '../data/fridge'

const Fridges = () => {

    const firstFiveImages = fridgeData.slice(0,5)
  return (
    <>
    <h2>Fridges</h2>
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

export default Fridges