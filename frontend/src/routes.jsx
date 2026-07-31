import { Navigate, Route } from "react-router";
import LandingPage from "./pages/LandingPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import LoginPage from "./pages/LoginPage.jsx";

export const routes = (
  <>
    <Route path="/" element={<LandingPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/404" element={<NotFound />} />
    <Route path="*" element={<Navigate to="/404" replace />} />
  </>
);
