import React, { useState } from 'react'
import { mobileData } from '../data/mobiles'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'



const MobilePage = () => {

  // to applying filter


  const[selectProduct,setSelectProduct]=useState([])

  return (
    <>
      <Navbar /> 


      <div className='pageSection'>
        {mobileData.map((item) => {
          return (<div>

<Link to={`/mobiles/${item.id}`}>
            <div className="pageImage">
              <img src={item.image} alt="image" />
              <div className="mobileInfo">


                <h3>{item.model}</h3>
                <p><strong>Company:</strong> {item.company}</p>
                <p><strong>Price:</strong> ${item.price}</p>
                <p><strong>Category:</strong> {item.category}</p>
                <p><strong>Description:</strong> {item.description}</p>
              </div>
            </div>
</Link>
          </div>

          )
        })}


      </div>
    </>
  )
}

export default MobilePage