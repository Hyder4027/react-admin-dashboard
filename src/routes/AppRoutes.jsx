import React, {
  lazy,
  Suspense,
} from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// Layout
import Layout from "../components/layout/Layout";

// Protected Route
import ProtectedRoute from "./ProtectedRoute";

// Lazy Loaded Pages
const Dashboard = lazy(() =>
  import("../pages/Dashboard")
);

const RegisterUser = lazy(() =>
  import("../pages/RegisterUser")
);

const ViewUsers = lazy(() =>
  import("../pages/ViewUsers")
);

const EditUser = lazy(() =>
  import("../pages/EditUser")
);

const AppRoutes = () => {

  return (
    <BrowserRouter>

      <Layout>

        {/* Suspense Loader */}
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-[70vh]">

              <p className="text-xl font-semibold">
                Loading...
              </p>

            </div>
          }
        >

          <Routes>

            {/* Dashboard */}
            <Route
              path="/"
              element={<Dashboard />}
            />

            {/* Register User */}
            <Route
              path="/register"
              element={
                <ProtectedRoute>
                  <RegisterUser />
                </ProtectedRoute>
              }
            />

            {/* View Users */}
            <Route
              path="/users"
              element={
                <ProtectedRoute>
                  <ViewUsers />
                </ProtectedRoute>
              }
            />

            {/* Edit User */}
            <Route
              path="/edit/:id"
              element={
                <ProtectedRoute>
                  <EditUser />
                </ProtectedRoute>
              }
            />

          </Routes>

        </Suspense>

      </Layout>

    </BrowserRouter>
  );
};

export default AppRoutes;