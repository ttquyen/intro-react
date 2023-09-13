import { Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { JobPostingsContext } from "../App";
const Protected = ({ children }) => {
  const contextProps = useContext(JobPostingsContext);
  const { setOpenSignIn, isSignedIn } = contextProps;
  useEffect(() => {
    if (!isSignedIn) {
      setOpenSignIn(true);
    }
  }, [isSignedIn, setOpenSignIn]);

  if (!isSignedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default Protected;
