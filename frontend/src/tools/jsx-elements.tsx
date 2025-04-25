import { PropsWithChildren, useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import MyRecipesView from "../components/views/MyRecipesView";
import OnlineRecipesView from "../components/views/OnlineRecipesView";
import MyPantryView from "../components/views/MyPantryView";
import Recipe from "../components/views/components/Recipe";
import ShoppingListView from "../components/views/ShoppingListView";
import Home from "../pages/Home";
import CreateRecipe from "../components/views/components/CreateRecipe";
import { Outlet } from "react-router";

//layout component for pages that should include the sidebar
export const DashboardLayout = ({ children }: PropsWithChildren) => {
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
  { path: "/shopping-list", element: <ShoppingListView /> },
  { path: "/pantry", element: <MyPantryView /> },

  //use nested route, '*' wildcard to match nested routes as well
  {
    path: "/online-recipes/*",
    children: [
      { index: true, element: <OnlineRecipesView /> },
      { path: "recipe/:id", element: <Recipe /> },
    ],
  },

  {
    path: "/my-recipes/*",
    children: [
      { index: true, element: <MyRecipesView /> },
      { path: "recipe/:id", element: <Recipe /> },
      { path: "create-recipe", element: <CreateRecipe /> },
    ],
  },
];
