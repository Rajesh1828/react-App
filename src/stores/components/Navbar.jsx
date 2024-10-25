import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='navSection'>
        <div className='title'>
            <h2>E-Mart</h2>
        </div>
        <div className='search'>
            <input type='text' placeholder='Search Here....'/>

        </div>
        <div className="user">
            <div className="user-details">
             SignIn / SignOut
            </div>

            <div className="cart">
                Cart
            </div>

        </div>

    </div>
    <div className="submenu">
     <ul>
      <div className='home'><Link to='/'> Home</Link></div>  
      <Link to="/mobiles"> <li>Mobiles</li></Link>
      <Link to="/computers"> <li>Computers</li></Link>
      <Link to="/watch">  <li>Watches</li> </Link>
       <Link to= "/kitchen">     <li>Kitchen</li></Link>
       <Link to='/men'>   <li>Men fashion</li> </Link>
       <Link to='/women'>   <li>Women Dressing</li></Link>
       <Link to='/Furniture'>    <li>Furniture</li>  </Link>
      <Link to='/Ac'>    <li>AC</li> </Link>
           
  <Link to='/Speakers'>     <li>Speakers</li> </Link>

  <Link to='/Fridges'>      <li>Fridges</li> </Link>

   <Link to='/Tvs'>    <li>Tvs</li> </Link>
   <Link to='/Books'>       <li>Books</li> </Link>
      

     </ul>


    </div>
    </>
  )
}

export default Navbar