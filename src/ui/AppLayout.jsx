import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header";
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
      <div className="h-min-screen">
        <Outlet />
      </div>
    </div>
  );
}

export default Applayout;
