import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout/MainLayout";
import Homepage from "./components/views/Homepage/HomepageContainer";
import About from "./components/views/About/AboutContainer";
import Contact from "./components/views/Contact/Contact";
import Map from "./components/views/Map/MapContainer";
import Exhibitions from "./components/views/Exhibitions/ExhibitionsContainer";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route
            exact
            path={process.env.PUBLIC_URL + "/"}
            element={<Homepage />}
          />
          <Route path={process.env.PUBLIC_URL + "/about"} element={<About />} />
          <Route
            path={process.env.PUBLIC_URL + "/contact"}
            element={<Contact />}
          />
          <Route path={process.env.PUBLIC_URL + "/map"} element={<Map />} />
          <Route
            path={process.env.PUBLIC_URL + "/exhibitions"}
            element={<Exhibitions />}
          />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
