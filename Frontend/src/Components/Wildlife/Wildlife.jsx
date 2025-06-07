import React from 'react'
import './Wildlife.css'
import Wildlifecards from './WildlifeCards'
import Navbar from '../Navbar/Navbar'
import WildlifeActivities from './Exploreactivities'


const Wildlife = () => {
  return (
    <>
    <Navbar/>
    <div className='section1'>
            <h1 className='font-script text-4xl mt-24 text-center font-medium '>"Top wildlife destinations for unforgettable nature escapes."</h1>
      <h1 className=' text-5xl  text-center font-medium  '> 
     
      </h1>
      <p className="text-lg text-center mt-4 max-w-2xl mx-auto">
      Discover some of the world’s most stunning wildlife destinations, perfect for nature lovers and adventure seekers. From lush jungles to open savannahs, these escapes offer a chance to witness rare animals in their natural habitats—up close and unforgettable.
</p>
<Wildlifecards/>
</div>
<div className='h-screen w-full mt-80'>

<WildlifeActivities/>
</div>
    </>
  )
}

export default Wildlife
