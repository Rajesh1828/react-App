import React from 'react'
import { Routes,Route, Router } from 'react-router-dom'
import  './App.css'
import LandingPage from './stores/pages/LandingPage'
import MobilePage from './stores/pages/MobilePage'
import ComputerPage from './stores/pages/ComputerPage'
import WatchPage from './stores/pages/WatchPage'
import KitchenPage from './stores/pages/KitchenPage'
import MenFashionPage from './stores/pages/MenFashionPage'
import WomenDressingPage from './stores/pages/WomenDressingPage'
import FurniturePage from './stores/pages/FurniturePage'
import AcPage from './stores/pages/AcPage'
import SpeakerPage from './stores/pages/SpeakersPage'
import FridgesPage from './stores/pages/FridgesPage'
import TvsPages from './stores/pages/TvsPage'
import BooksPages from './stores/pages/BooksPage'
import MobileSingle from './singles/MobileSingle'

const App = () => {
  return (
    <div>
      <Routes>    
   
<Route path='/' element = {   <LandingPage/>}/>


<Route path='/mobiles' element={<MobilePage/>}/>
<Route path='/computers' element={<ComputerPage/>}/>
<Route path='/watch' element={<WatchPage/>}/>
<Route path='/kitchen' element={<KitchenPage/>}/>
<Route path='/men' element={<MenFashionPage/>}/>
<Route path='/women' element={<WomenDressingPage/>}/>
<Route path='/Furniture' element={<FurniturePage/>}/>
<Route path='/AC' element={<AcPage/>}/>
<Route path='Speakers' element={<SpeakerPage/>}/>
<Route path='/Fridges'  element={<FridgesPage/>}/>
<Route path='/Tvs' element={<TvsPages/>}/>
<Route path='/Books' element={<BooksPages/>}/>
    

{/* Dynamic routing>>>>>>>>>> */}

<Route path='/mobiles/:id' element={<MobileSingle/>}/>




      </Routes>
      
    </div>
  )
}

export default App