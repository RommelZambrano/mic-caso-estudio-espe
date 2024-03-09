import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import InmueblePage from "./pages/Inmueble/InmuebleFormPage";
import InmueblesList from "./pages/Inmueble/InmuebleListPage";
import InmueblesDashboard from "./components/Inmueble";
import InmuebleUpdatePage from "./pages/Inmueble/InmuebleUpdatePage"; // Asegúrate de tener este import

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="inmueble" element={<InmueblePage />} />
          <Route path="inmuebles" element={<InmueblesList />} />
          <Route path="dashboard" element={<InmueblesDashboard />} />
          <Route path="edit-inmueble/:id" element={<InmuebleUpdatePage />} />

          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
