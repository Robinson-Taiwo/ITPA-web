/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Events from './Events'
import Gallery from './Gallery'

const AppRoutes = () => {
    return (
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
            <Route path="/Event" element={<Events />} />
            <Route path="/Gallery" element={<Gallery />} />
        </Routes>
    )
}

export default AppRoutes
