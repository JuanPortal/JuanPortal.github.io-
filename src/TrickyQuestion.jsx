import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from './Header'
import { Home } from './Home'
import { Question } from './Question'
import { Footer } from './Footer'

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

export default TrickyQuestion