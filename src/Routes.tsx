import { Collection } from "./pages/Collection";
import { CollectionResponse } from "./types/collections";
import { ErrorBoundary } from "./pages/ErrorBoundary";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { axiosInstance } from "./service";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "collection/:collectionName",
        element: <Collection />,
        loader: async () => {
          const response = await axiosInstance.get<CollectionResponse[]>(
            "/collections/naruto"
          );
          return response.data;
        },
      },
    ],
  },
]);
