import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "./components/Header";
import ProtectedRoute from "./routes/ProtectedRoute";

/* ========= Lazy Loaded Pages (Code Splitting) ========= */
const PerformanceDemo = lazy(() => import("./pages/PerformanceDemo"));
const Login = lazy(() => import("./pages/Login"));
const DashboardLayout = lazy(() => import("./pages/DashboardLayout"));
const DashboardSummary = lazy(() => import("./pages/DashboardSummary"));
const DashboardAnalytics = lazy(() => import("./pages/DashboardAnalytics"));
const DashboardSettings = lazy(() => import("./pages/DashboardSettings"));
const Logs = lazy(() => import("./pages/Logs"));

function App() {
  return (
    <>
      {/* Global Header */}
      <Header />

      {/* Suspense handles lazy loading */}
      <Suspense
        fallback={
          <div
            style={{
              height: "80vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "22px",
              fontWeight: "600",
            }}
          >
            Loading Page...
          </div>
        }
      >
        <Routes>

          {/* Performance Demo */}
          <Route
            path="/performance"
            element={
              <ProtectedRoute>
                <PerformanceDemo />
              </ProtectedRoute>
            }
          />

          {/* Login */}
          <Route path="/Login" element={<Login />} />

          {/* Dashboard Layout Routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardSummary />} />
            <Route path="summary" element={<DashboardSummary />} />
            <Route path="analytics" element={<DashboardAnalytics />} />
            <Route path="settings" element={<DashboardSettings />} />
          </Route>

          {/* Logs Page */}
          <Route
            path="/logs"
            element={
              <ProtectedRoute>
                <Logs />
              </ProtectedRoute>
            }
          />

        </Routes>
      </Suspense>
    </>
  );
}

export default App;
