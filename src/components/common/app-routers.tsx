import AuthPage from "../pages/auth";
import HomePage from "../pages/home";

export const appRoutes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
];