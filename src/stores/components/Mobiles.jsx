import React from 'react'
import { mobileData } from '../data/mobiles'

const Mobiles = () => {

    const firstFiveImages=mobileData.slice(0,5)
  return (
    <> 
    <h2>Mobiles</h2>
    <div className='ProSection'>
        
        {
            firstFiveImages.map((item)=>{
                return(
                  
                 
                    <div className="imageBox">
                        
                    <img  className="proImage" src={item.image} alt="image" />

                    </div>
                    


                )
            })
        }
    </div>
    </>
  )
}

export default Mobiles