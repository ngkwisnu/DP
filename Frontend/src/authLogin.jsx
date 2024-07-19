import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

async function checkLoginStatus() {
  try {
    const response = await fetch("http://localhost:5000/loginStatus", {
      method: "GET",
      credentials: "include", // Include cookies in the request
    });

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}

function AuthLogin(Component) {
  return function AuthenticatedComponent(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const fetchLoginStatus = async () => {
        try {
          const isLoggedIn = await checkLoginStatus();
          setIsLoggedIn(isLoggedIn);
        } catch (error) {
          console.error("Error fetching login status:", error);
          setIsLoggedIn(false);
        } finally {
          setIsLoading(false);
        }
      };

      fetchLoginStatus();
    }, []);

    // if (isLoading) {
    //   return <div>Loading...</div>;
    // }

    return !isLoggedIn ? <Component {...props} /> : <Navigate to="/" />;
  };
}

export default AuthLogin;
