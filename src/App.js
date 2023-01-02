// import logo from './logo.svg';
import "./App.css";
import AboutUS from "./component/AboutUS";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import React, { useState } from "react";
import Alert from "./component/Alert";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  setTimeout(() => {
    setAlert(null);
  }, 2500);

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-danger");
  };

  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="NOTEPAD"
          aboutUs="About"
          search="Search"
          mode={mode}
          toggleMode={toggleMode}
        ></Navbar>
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/AboutUS" element={<AboutUS mode={mode} />}></Route>
            <Route
              path="/TextForm"
              element={
                <TextForm
                  h4="Enter Text | Notes | Works | Word Counter | Charter Counter"
                  showAlert={showAlert}
                  h3="Your Text Summary"
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
