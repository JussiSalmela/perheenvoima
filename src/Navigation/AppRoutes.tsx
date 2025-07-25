import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Info from '../Pages/Info';
import Nepsy from '../Pages/Nepsy';
import Training from '../Pages/Training';
import Pricing from '../Pages/Pricing';
import Downloads from '../Pages/Downloads';


export default function AppRoutes() {

   return (
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tietoa" element={<Info />} />
            <Route path="/nepsy" element={<Nepsy />} />
            <Route path="/valmennus" element={<Training />} />
            <Route path="/hinnasto" element={<Pricing />} />
            <Route path="/ladattavat" element={<Downloads />} />
         </Routes>
   )
};
