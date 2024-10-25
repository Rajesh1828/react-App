import React from 'react'
import { watchData } from '../data/watch'


const Watches = () => {

    const firstFiveImages = watchData.slice(0,5)
  return (
    <>
    
    <h2>Watches</h2>
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

export default Watches