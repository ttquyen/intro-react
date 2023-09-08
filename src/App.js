import { createContext, useState } from "react";
import "./App.css";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";

import { Outlet, useNavigate } from "react-router-dom";

export const JobPostingsContext = createContext();
function App() {
  // const location = useLocation();
  const navigate = useNavigate();

  // const background = location.state && location.state.background;
  const [openSignIn, setOpenSignIn] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [openJobDetail, setOpenJobDetail] = useState(false);

  const handleOpenSignIn = () => {
    navigate("/login");
    setOpenSignIn(true);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    navigate("/");
    localStorage.removeItem("username");
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
      <PrimarySearchAppBar />
      <Outlet />
    </JobPostingsContext.Provider>
  );
}

export default App;
