import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./routes/Home";
import Submit from "./routes/Submit";
import About from "./routes/About";
import ViewReceip from "./components/ViewReceip/ViewReceip";
import Login from "./user/login/Login";
import { useEffect, useState } from "react";
import { ACCESS_TOKEN } from "./constants";
import { getCurrentUser } from "./utils/APIUtils";
import { allRoutes } from "./constants/routs";
import Signup from "./user/signup/Signup";
import Footer from "./components/Footer";

function App() {
  const authInitialState = {
    authenticated: false,
    currentUser: null,
    loading: true,
    error: null,
  };

  const [auth, setAuth] = useState(authInitialState);

  useEffect(() => {
    loadCurrentlyLoggedInUser();
  }, []);

  const loadCurrentlyLoggedInUser = () => {
    getCurrentUser(localStorage.getItem(ACCESS_TOKEN))
      .then((response) => {
        setAuth({
          currentUser: response.data,
          authenticated: true,
          loading: false,
          error: null,
        });
      })
      .catch((error) => {
        setAuth({
          currentUser: null,
          authenticated: false,
          loading: false,
          error: error,
        });
      });
  };

  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    setAuth({
      authenticated: false,
      currentUser: null,
    });
    alert("You're safely logged out!");
  };

  return (
    <div className="App">
      <NavBar currentUser={auth.currentUser} logout={handleLogout} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/about" element={<About />} />
        <Route path="/view" element={<ViewReceip />} />
        <Route
          path="/login"
          element={
            <Login
              authenticated={auth.authenticated}
              reloadCurrentUser={loadCurrentlyLoggedInUser}
            />
          }
        />
        <Route
          path={allRoutes.signUp}
          element={<Signup authenticated={auth.authenticated} />}
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
