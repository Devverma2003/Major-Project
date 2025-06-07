import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer";
import First from "../../components/Destination/First";
import Firstcards from '../../components/Destination/Firstcards'
import Secondimg from '../../components/Destination/Secondimg'
import Third from '../../components/Destination/Third'
import Fourth from '../../components/Destination/Fourth'
import "./destination.css";

const Destination = () => {
  return (
    <div>
      <Navbar />
       <First/>
       <Firstcards/>
       <Secondimg/>
       {/* <Third/> */}
       <Fourth/>
       <Footer />
    </div>
  )
}

export default Destination
