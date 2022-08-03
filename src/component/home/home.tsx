import React from 'react'
import Banner from './banner'
import About from './about'
import Carousel from './carousel'

function Home() {
  return (
    <div>
      <Banner />
      <Carousel/>
      <About />
    </div>
  )
}

export default Home