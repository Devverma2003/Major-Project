import React from 'react';
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Destination from './Pages/Destination/Destination';
import BookNow from "./pages/Destination/BookNow";
import Categories from './Pages/Categories/Categories';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="/book-now" element={<BookNow />} />
      <Route path="/Categories" element={<Categories />} />
    </Routes>
  );
}

export default App;
