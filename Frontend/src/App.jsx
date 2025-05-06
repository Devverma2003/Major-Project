import React from 'react';
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Destination from './Pages/Destination/Destination';
import BookNow from "./pages/Destination/BookNow";
<<<<<<< HEAD
import Aboutpage from './Pages/Aboutpage';
import Categories from './Pages/Categories/Categories';
import Wildlife from './Components/Wildlife/Wildlife';
=======
import Aboutpage from "./Pages/Aboutpage";
>>>>>>> 754a94e28fcaeb1aa21e60b99b331987fbfc4e61

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="/book-now" element={<BookNow />} />
      <Route path="/Aboutpage" element={<Aboutpage />} />
<<<<<<< HEAD
      <Route path="/Categories" element={<Categories />} />
      <Route path="/Categories/Wildlife" element={<Wildlife />} />
=======

>>>>>>> 754a94e28fcaeb1aa21e60b99b331987fbfc4e61
    </Routes>
  );
}

export default App;
