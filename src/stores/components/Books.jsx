
import React from 'react'
import { booksData } from '../data/books'

const books = () => {

    const firstFiveImages = booksData.slice(0,5)
  return (
    <>
    <h2>Books</h2>
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

export default books