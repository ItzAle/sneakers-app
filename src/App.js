import {Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import InfoPage from "./pages/infoPage/InfoPage";
import AdminPage from "./pages/adminPage/AdminPage";
import ShopPage from "./pages/shopPage/ShopPage";
import Login from "./pages/loginPage/Login";
import Register from "./pages/registerPage/Register";
import Error404 from "./pages/404Page/Error404"
import RequireAuth from "./components/requireAuth/RequireAuth";

function App() {

  return (
    <Routes>

      <Route path="/register" element={ <Register/> }/>
      <Route path="/login" element={ <Login/>} />
      
      <Route path="/" element={<MainPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/infoShoe/:id" element={<InfoPage />} />
      
      <Route path="/admin" element={
      
      <RequireAuth>
        <AdminPage/>
      </RequireAuth>
 
      } />

      
      
      <Route path="*" element={<Error404 />} /> 

    </Routes>
  );
}

export default App;
