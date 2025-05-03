import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Cards from '../Components/Cards/Cards'
import PopularDestinations from '../Components/PopularDest/PopDest'
import PlanTripSection from '../Components/PlanTrip/Trip'
import Footer from '../Components/Footer'



const Homepage = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Cards/>
    <PopularDestinations/>
    <PlanTripSection/>
    <Footer/>
    </div>
  )
}

export default Homepage
