import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Applayout from "./ui/AppLayout";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import IndividualInvestors from "./pages/individual-investor/IndividualInvestors";

const router = createBrowserRouter([
  {
    element: <Applayout />,
    // errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/individual-investors",
        element: <IndividualInvestors />,
      },
    ],
  },
]);

function App() {
  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    const root = window.document.documentElement;
    theme === "dark"
      ? root.classList.add("dark")
      : root.classList.remove("dark");
  }, [theme]);
  return <RouterProvider router={router} />;
}

export default App;
