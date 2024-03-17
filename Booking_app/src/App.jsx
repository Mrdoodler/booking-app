import "./App.css";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./assets/pages/IndexPage";
import LoginPage from "./assets/pages/LoginPage";
import Layout from "./Layout";
import RegisterPage from "./assets/pages/RegisterPage";
import axios from "axios";
import { UserContextProvider } from "./userContext";
import ProfilePage from "./assets/pages/ProfilePage";
import PlacesPage from "./assets/pages/PlacesPage";
import PlacesFormPage from "./assets/pages/PlacesFormPage";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;
function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<ProfilePage />} />
          <Route path="/account/places" element={<PlacesPage />} />
          <Route path="/account/places/new" element={<PlacesFormPage />} />
          <Route path="/account/places/:id" element={<PlacesFormPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
