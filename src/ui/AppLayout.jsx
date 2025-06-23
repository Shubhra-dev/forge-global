import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";

function Applayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll behavior
    });
  }, [location]);

  return (
    <div className="font-workSans dark:bg-backgroundPrimaryDark">
      <Header />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Applayout;
