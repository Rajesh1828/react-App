import React from 'react'
import { computerData } from '../data/computers'

const Computers = () => {

    
    const firstFiveImages = computerData.slice(0,5)

  return (
    <>
    <h2>Computers</h2>
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

export default Computers