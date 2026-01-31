import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Events from "./pages/Events";
import Roles from "./pages/Roles";
import Rules from "./pages/Rules";
import Vouches from "./pages/Vouches";

export default function App() {
  return (
    <>
      <Navbar />

      <main className="pt-16 transition-colors duration-300">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/vouches" element={<Vouches />} />
        </Routes>
      </main>
    </>
  );
}
