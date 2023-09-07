import "./App.css";
import { useEffect } from "react";
import { BASE_URL } from "./app/config";
import apiService from "./app/apiService";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiService.get(`${BASE_URL}/api/users`);
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return <h1>axios</h1>;
}

export default App;
