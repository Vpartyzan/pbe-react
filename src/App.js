import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout/MainLayout";
import Login from "./components/views/About/About";
import Homepage from "./components/views/Homepage/Homepage";

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
          <Route path={process.env.PUBLIC_URL + "/about"} element={<Login />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
