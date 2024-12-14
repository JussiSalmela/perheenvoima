import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Dev from '../Pages/Dev';
import Info from '../Pages/Info';
import Nepsy from '../Pages/Nepsy';
import Training from '../Pages/Training';


export default function AppRoutes() {

   return (
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tietoa" element={<Info />} />
            <Route path="/nepsy" element={<Nepsy />} />
            <Route path="/valmennus" element={<Training />} />
            <Route path="/dev" element={<Dev />} />
         </Routes>
   )
};
