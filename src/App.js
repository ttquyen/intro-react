import { createContext, useEffect, useState } from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AppModal from "./components/AppModal";
import Protected from "./pages/Protected";
import JobManagement from "./pages/JobManagement";
import LoginModal from "./components/LoginModal";

export const JobPostingsContext = createContext();
function App() {
  const [openSignIn, setOpenSignIn] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [openJobDetail, setOpenJobDetail] = useState(false);
  useEffect(() => {
    // console.log("isSignedIn", isSignedIn);
    if (localStorage.getItem("username") !== null) {
      // console.log(localStorage.getItem("username"));
      // console.log("check signed");
      setIsSignedIn(true);
    }
    // console.log("isSignedIn", isSignedIn);
  }, [isSignedIn]);

  const handleOpenSignIn = () => {
    setOpenSignIn(true);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    console.log("first");
  };
  return (
    <JobPostingsContext.Provider
      value={{
        openSignIn,
        setOpenSignIn,
        handleOpenSignIn,
        handleSignOut,
        isSignedIn,
        setIsSignedIn,
        openJobDetail,
        setOpenJobDetail,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<JobManagement />} />
            <Route
              path="/detail/:jobId"
              element={
                <Protected>
                  <AppModal />
                </Protected>
              }
            />
          </Route>
          <Route path="/login" element={<LoginModal />} />
        </Routes>
      </BrowserRouter>
    </JobPostingsContext.Provider>
  );
}

export default App;
