import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Applayout from "./ui/AppLayout";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import AccreditedInvestors from "./pages/accredited-investor/AccreditedInvestors";
import SeedAndAngelInvestors from "./pages/seed-investors/SeedAndAngelInvestors";
import EmployeeShareholders from "./pages/employee-shareholders/EmployeeShareholders";

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
        path: "/accredited-investors",
        element: <AccreditedInvestors />,
      },
      {
        path: "/seeds-and-angel-investors",
        element: <SeedAndAngelInvestors />,
      },
      {
        path: "/employee-shareholders",
        element: <EmployeeShareholders />,
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
