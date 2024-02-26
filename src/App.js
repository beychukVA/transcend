import { Suspense } from "react";
import { Routes, Route, Navigate, Router } from "react-router-dom";
import "./App.css";
import AppBar from "./components/AppBar";
import PublicRoute from "./utils/routs/PublicRoute";
import PrivateRoute from "./utils/routs/PrivateRoute";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import CreateInvoicePage from "./pages/CreateInvoicePage";
import InvoicesPage from "./pages/InvoicesPage";
import NotificationsPage from "./pages/NotificationsPage";
import SettingsPage from "./pages/SettingsPage";
import Loader from "./components/Loader";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route
            path="/"
            element={
              <PublicRoute redirectTo="/dashboard/create-invoice" restricted />
            }
          >
            <Route index element={<HomePage />} />
          </Route>

          <Route
            path="/dashboard/create-invoice"
            element={<PrivateRoute redirectTo="/login" />}
          >
            <Route index element={<CreateInvoicePage />} />
          </Route>

          <Route
            path="/dashboard/invoices"
            element={<PrivateRoute redirectTo="/login" />}
          >
            <Route index element={<InvoicesPage />} />
          </Route>

          <Route
            path="/dashboard/notifications"
            element={<PrivateRoute redirectTo="/login" />}
          >
            <Route index element={<NotificationsPage />} />
          </Route>

          <Route
            path="/dashboard/settings"
            element={<PrivateRoute redirectTo="/login" />}
          >
            <Route index element={<SettingsPage />} />
          </Route>

          {/*=========================================================*/}
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/dashboard/create-invoice" restricted />
            }
          >
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route
            path="/register"
            element={
              <PublicRoute redirectTo="/dashboard/create-invoice" restricted />
            }
          >
            <Route path="/register" element={<RegistrationPage />} />
          </Route>
          <Route
            path="/forgot-password"
            element={
              <PublicRoute redirectTo="/dashboard/create-invoice" restricted />
            }
          >
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
