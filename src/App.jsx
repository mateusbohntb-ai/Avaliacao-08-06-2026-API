

//import das rotas e do use state 
import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'


//import dos components 
import Header from "./Components/Header"
import Footer from "./Components/Footer"



//Import das Pages 

import Home from "./Pages/Home"
import Api from "./Pages/Api"
import Dance from "./Pages/Dance"
import Aleatorio from "./Pages/Aleatorio"



//import do Css
import './App.css'



function App() {
  

  return (
    <>
< Header />

<Routes>

<Route path='/' element={< Home/>} />
<Route path='/api' element={< Api />} />
<Route path='/dance' element={< Dance />} />
<Route path='/aleatorio' element={< Aleatorio />} />

</Routes>


< Footer />
    </>
  )
}

export default App
