/* eslint-disable no-unused-vars */
import { useState } from 'react'
import whatsapp from "./assets/Icons/whatsapp.svg"

import './App.css'
import AppRoutes from './Components/AppRoutes'

function App() {

  return (
    <>
      <AppRoutes />
      <div className="floating-whatsapp">
                    {/* WhatsApp icon or button */}
                    <a href="https://wa.me/+2348068156628" target="_blank" rel="noopener noreferrer">
                         {/* You can use an SVG or an image for the WhatsApp icon */}
                         <img src={whatsapp} alt="WhatsApp" />
                    </a>
               </div>
    </>
  )
}

export default App
