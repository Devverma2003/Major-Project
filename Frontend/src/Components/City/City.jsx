import React from 'react'
import './City.css'          
import CityCards from './CityCards'
import Navbar from '../Navbar/Navbar'
import CityActivities from './Cityexploreactivities'
import Footer from '../Footer'

const City = () => {
  return (
    <>
      <Navbar />
      <div className='section1'>
        <h1 className='font-script text-4xl mt-24 text-center font-medium'>
          "Explore vibrant cities with rich culture and unforgettable experiences."
        </h1>
        <p className="text-lg text-center mt-4 max-w-2xl mx-auto">
          Discover the world’s most iconic cities, perfect for culture lovers and urban explorers. From historic landmarks to bustling streets and hidden gems, these city escapes offer a blend of history, cuisine, and entertainment.
        </p>
        <CityCards />
      </div>
      <div className='h-screen w-full mt-80'>
        <CityActivities />
      </div>
      <Footer />
    </>
  )
}

export default City
