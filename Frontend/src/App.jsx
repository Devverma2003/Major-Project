import React from 'react';
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Destination from './Pages/Destination/Destination';
import BookNow from "./pages/Destination/BookNow";
import Categories from './Pages/Categories/Categories';
import Wildlife from './Components/Wildlife/Wildlife';
import Walking from './Components/Walking/Walking';
import Cruises from './Components/Cruises/Cruises';
import Aboutpage from "./Pages/Aboutpage";
import Signup from './Pages/Signup-login/Signup';
import Login from './Pages/Signup-login/Login';
import City from './Components/City/City';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="/book-now" element={<BookNow />} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/Aboutpage" element={<Aboutpage />} />
      <Route path="/Categories" element={<Categories />} />
      <Route path="/Categories/Wildlife" element={<Wildlife />} />
      <Route path="/category/walking" element={<Walking />} />
      <Route path="/category/cruises" element={<Cruises />} />
      <Route path="/category/citytour" element={<City />} />
    </Routes>
  );
}

export default App;
