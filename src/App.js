import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import InfoPage from "./pages/infoPage/InfoPage";
import AdminPage from "./pages/adminPage/AdminPage";
import ShopPage from "./pages/shopPage/ShopPage";
import Login from "./pages/login/Login";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/infoShoe/:id" element={<InfoPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
}

export default App;
