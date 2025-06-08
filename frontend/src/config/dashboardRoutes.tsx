import { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import MyRecipes from "../components/views/MyRecipes";
import OnlineRecipes from "../components/views/OnlineRecipes";
import Recipe from "../components/views/components/Recipe";
import ShoppingList from "../components/views/ShoppingList";
import Home from "../pages/Home";
import { Outlet } from "react-router";
import MyPantry from "../components/views/components/MyPantry";

//layout component for pages that should include the sidebar
export const DashboardLayout = () => {
  const [sidebarMinimized, setSidebarMinimized] = useState(false);
  const handleSidebarToggle = (isMinimized: boolean) => {
    setSidebarMinimized(isMinimized);
  };

  return (
    <div className="dashboard-layout">
      <Sidebar onToggle={handleSidebarToggle} />
      <main
        className={`main-content ${
          sidebarMinimized ? "sidebar-minimized" : ""
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
};

//extracted here for clean struct
export const dashboardRoutes = [
  { path: "/home", element: <Home /> },
  { path: "/shopping-list", element: <ShoppingList /> },
  { path: "/pantry", element: <MyPantry /> },

  //use nested route, '*' wildcard to match nested routes as well
  {
    path: "/online-recipes/*",
    children: [
      { index: true, element: <OnlineRecipes /> },
      { path: "recipe/:id", element: <Recipe /> },
    ],
  },
  {
    path: "/my-recipes/*",
    children: [
      { index: true, element: <MyRecipes /> },
      { path: "recipe/:id", element: <Recipe /> },
    ],
  },
];
