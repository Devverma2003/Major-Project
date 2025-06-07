import React from 'react'
import './Walking.css'
import Walkingcards from './WalkingCards'
import Navbar from '../Navbar/Navbar'
import WalkingActivities from './Walkingexploreactivites'


const Wildlife = () => {
  return (
    <>
    <Navbar/>
   <div className='section1'>
  <h1 className='font-script text-4xl mt-24 text-center font-medium'>
    "Top walking experiences for unforgettable nature escapes."
  </h1>

  <h1 className='text-5xl text-center font-semibold mt-4'>
    Discover Nature on Foot
  </h1>

  <p className="text-lg text-center mt-4 max-w-2xl mx-auto">
    Explore scenic trails, lush forests, and hidden paths on foot. These walking adventures offer an up-close encounter with nature, where every step reveals breathtaking landscapes, wildlife sightings, and the peace only found off the beaten track.
  </p>

<Walkingcards/>
</div>
<div className='h-screen w-full mt-80'>

<WalkingActivities/>
</div>
    </>
  )
}

export default Wildlife
