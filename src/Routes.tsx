import { ErrorBoundary } from "./pages/ErrorBoundary";
import { Login } from "./pages/Login";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorBoundary />,
    loader: () => {
      throw new Response("Not found", { status: 404 });
    },
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorBoundary />,
  },
]);
