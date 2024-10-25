import React from "react";
import { acData } from "../data/ac";
import Navbar from "../components/Navbar";


const AcPage = () => {
    return (
      <>
      <Navbar/>
      <div className='pageSection'>
          {acData.map((item)=>{
              return(<div>
  
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
  
              </div>
              
          )
          })}
       
  
      </div>
      </>
    )
  }
  
  export default AcPage