import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import IndianFits from './pages/IndianFits';
import Rentogo from './pages/Rentogo';
import CasualFits from './pages/CasualFits';
import Accessories from './pages/Accessories';
import Handbags from './pages/Handbags';


export default function App() {
return (
<div className="font-sans">

<Routes>
<Route path="/" element={<Rentogo />} />
<Route path="/indianfit" element={<IndianFits />} />
<Route path="/casual" element={<CasualFits />} />
<Route path="/accessories" element={<Accessories />} />
<Route path="/handbags" element={<Handbags />} />
</Routes>
</div>
);
}