import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import InfoPage from "./pages/infoPage/InfoPage";
import AdminPage from "./pages/adminPage/AdminPage";
import ShopPage from "./pages/shopPage/ShopPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/infoShoe/:id" element={<InfoPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <ShopPage/>
    </Routes>
    
  );
}

export default App;
