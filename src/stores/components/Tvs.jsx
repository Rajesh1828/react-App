
import React from 'react'
import { tvData } from '../data/tv'

const Tvs = () => {

    const firstFiveImages = tvData.slice(0,5)
  return (
    <>
    <h2>Tvs</h2>
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

export default Tvs