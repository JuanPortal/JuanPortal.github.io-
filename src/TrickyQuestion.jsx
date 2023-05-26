import React from 'react'
import { Header } from './Header'
import { Form } from './Form'
import { Video } from './Video'
import { Footer } from './Footer'

export const TrickyQuestion = () => {
  return (
    <>
        <Header />
        <section>
            <Form />
            <Video />
        </section>
        <Footer />
    </>
  )
}
