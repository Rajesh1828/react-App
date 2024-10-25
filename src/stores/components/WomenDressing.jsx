import React from 'react'
import { womanData } from '../data/woman'


const WomenDressing = () => {
    const firstFiveImages = womanData.slice(0,5)

  return (
    <>

    <h2>WomenDressing</h2>
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

export default WomenDressing