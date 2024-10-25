import React from 'react'

import { mobileData } from '../stores/data/mobiles' 
import { useParams } from 'react-router-dom'
import Navbar from '../stores/components/Navbar'

const MobileSingle = () => {


    const {id}= useParams()

    const product = mobileData.find((item)=>item.id ===id)
    


    console.log(id)

    return (
       <>
       <Navbar/>
        <div className="ind-section">


<div className='ind-page'>
    <div className="ind-image">
      <img src={product.image} alt="image" />
    </div>

    <div className="ind-model">
        <h3>{product.model}</h3>
    </div>

     <div className="ind-company">
        <h3>{product.company}</h3>
     </div>
     <div className="ind-categery">
        <h3>{product.category}</h3>
     </div>
    <div className="ind-price">
        <h3>{product.price}</h3>
    </div>
    <div className="ind-desc">
        <p>{product.description}</p>
    </div>

    <button >Add to Cart</button>
   
    </div>
            
    </div>
       
       </>
   
  )
}

export default MobileSingle