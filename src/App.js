import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import InfoPage from "./pages/infoPage/InfoPage";
import AdminPage from "./pages/adminPage/AdminPage";
import ShopPage from "./pages/shopPage/ShopPage";
import Login from "./pages/loginPage/Login";
import Register from "./pages/registerPage/Register";
import Error404 from "./pages/404Page/Error404"
import {useState } from "react";

function App() {

  function validateEmail() {
    var emailField = document.getElementById("user-email");
    var emailError = document.getElementById("error-msg");
    var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    
    if (validEmail.test(emailField.value)) {
      emailError.innerHTML = "";
      return true;
    } else {
      emailError.innerHTML = "Email is invalid";
      return false;
    }
  }

  // Validar contraseña
  function validatePass() {
    var y = document.forms["Form"]["password"].value;
    var passErr = document.getElementById("error-password");
    if (y.length > 8) {
      passErr.innerHTML = "";
      return false;
    }
    passErr.innerHTML = "Password must be at least 8 characters long";
    return true;
  }

  const [admin, setAdmin] = useState(null);

  const login = () => {
    setAdmin({
      id: 1,
      name: "Jhon"
    })
  }

  const logout = () => {
    setAdmin(null)
    document.location.reload();
  }

  const RequireAuth = ({isLogged, children}) => {

    if (isLogged) {  
    return <Navigate to="/"/>
    }
    return children
    };

  return (
    <Routes>

      <Route path="/register"
        element={
          <Register validateEmail={validateEmail} validatePass={validatePass} />
        } />
      <Route path="/login"
        element={
          <RequireAuth isLogged={admin}>
            <Login validateEmail={validateEmail} validatePass={validatePass} login={login} />
          </RequireAuth>
        }/>


      <Route path="/" element={<MainPage logout={logout} admin={admin} />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/infoShoe/:id" element={<InfoPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
