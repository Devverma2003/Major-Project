import React from 'react'
import First from "../../components/Destination/First";
import Firstcards from '../../components/Destination/Firstcards'
import Secondimg from '../../components/Destination/Secondimg'
import Third from '../../components/Destination/Third'
import Fourth from '../../components/Destination/Fourth'
import "./destination.css";

const Destination = () => {
  return (
    <div>
       <First/>
       <Firstcards/>
       <Secondimg/>
       <Third/>
       <Fourth/>
    </div>
  )
}

export default Destination
