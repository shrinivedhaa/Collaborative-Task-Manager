import React, { createContext , useReducer } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Logout from "./components/Logout";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

import { initialState, reducer } from "../src/reducer/UseReducer";

//context API

export const UserContext = createContext();


const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />

      <Route exact path="/about" element={<About />} />

      <Route exact path="/contact" element={<Contact />} />

      <Route exact path="/login" element={<Login />} />

      <Route exact path="/signup" element={<Signup />} />

      <Route exact path="/logout" element={<Logout />} />
    </Routes>
  );
};

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <UserContext.Provider valur={{state, dispatch}}>
        <Navbar />
        <Routing />
      </UserContext.Provider>
    </>
  );
};

export default App;
