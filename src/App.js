import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout/MainLayout";
import Homepage from "./components/views/Homepage/Homepage";
import About from "./components/views/About/About";
import Contact from "./components/views/Contact/Contact";
import Map from "./components/views/Map/Map";

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
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
