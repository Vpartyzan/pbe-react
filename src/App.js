import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout/MainLayout";
import Homepage from "./components/views/Homepage/HomepageContainer";
import About from "./components/views/About/AboutContainer";
import Contact from "./components/views/Contact/ContactContainer";
import Exhibitions from "./components/views/Exhibitions/ExhibitionsContainer";
import SearchResult from "./components/views/SearchResult/SearchResultContainer";
import Empty from "./components/views/Empty/EmptyContainer";

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
            path={process.env.PUBLIC_URL + "/about/:block?"}
            element={<About />}
          ></Route>
          <Route
            path={process.env.PUBLIC_URL + "/contact"}
            element={<Contact />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/exhibitions"}
            element={<Exhibitions />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/search"}
            element={<SearchResult />}
          />
          <Route path={process.env.PUBLIC_URL + "/empty"} element={<Empty />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
