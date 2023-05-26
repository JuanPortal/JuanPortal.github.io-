import React from 'react'
import { Header } from './Header'
import { Home } from './Home'
import { Question } from './Question'
import { Footer } from './Footer'
import { Routes, Route } from 'react-router-dom'

export const TrickyQuestion = () => {
  return (
    <>
        <Header />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/question' element={<Question />}/>
        </Routes>
        <Footer />
    </>
  )
}
