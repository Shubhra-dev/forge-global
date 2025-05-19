import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header";
import Title from "../components/Title";
function Applayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll behavior
    });
  }, [location]);

  return (
    <div className="font-workSans">
      <Header />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <div className="w-full h-64 bg-backgroundDark flex items-center justify-center">
        <h2 className="w-max m-auto text-teal-50 text-3xl">Footer</h2>
      </div>
    </div>
  );
}

export default Applayout;
