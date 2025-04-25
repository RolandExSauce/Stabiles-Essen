import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthLayout from "./pages/layout/AuthLayout";
import { DashboardLayout, dashboardRoutes } from "./tools/jsx-elements";

function App() {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      {/* Routes with sidebar */}
      {dashboardRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<DashboardLayout />}>
          {route.children ? (
            // If route has children, map through them
            route.children.map((childRoute) => (
              <Route
                key={childRoute.path || "index"}
                index={childRoute.index}
                path={childRoute.path}
                element={childRoute.element}
              />
            ))
          ) : (
            // If no children, create an index route
            <Route index element={route.element} />
          )}
        </Route>
      ))}
    </Routes>
  );
}

export default App;
