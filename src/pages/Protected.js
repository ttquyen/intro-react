import { Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { JobPostingsContext } from "../App";
const Protected = ({ isLoggedIn, children }) => {
  const contextProps = useContext(JobPostingsContext);
  const { setOpenSignIn } = contextProps;
  useEffect(() => {
    if (!isLoggedIn) {
      setOpenSignIn(true);
    }
  }, [isLoggedIn, setOpenSignIn]);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default Protected;
