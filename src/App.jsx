import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Applayout from "./ui/AppLayout";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import AccreditedInvestors from "./pages/accredited-investor/AccreditedInvestors";
import SeedAndAngelInvestors from "./pages/seed-investors/SeedAndAngelInvestors";
import EmployeeShareholders from "./pages/employee-shareholders/EmployeeShareholders";
import AssetsManager from "./pages/assets-manger/AssetsManager";
import FamilyOffices from "./pages/family-offices/FamilyOffices";
import VentureCapitalFirms from "./pages/venture-capital-firms/VentureCapitalFirms";
import WealthManagers from "./pages/wealth-managers/WealthManagers";
import PrivateCompanies from "./pages/private-companies/PrivateCompanies";
import ForgePro from "./pages/forge-pro/ForgePro";
import ForgeMarkets from "./pages/forge-markets/ForgeMarkets";
import BrowseCompanies from "./pages/browse-companies/BrowseCompanies";
import ForgePrice from "./pages/forge-price/ForgePrice";
import ForgeData from "./pages/forge-data/ForgeData";
import ForgePrivateMarket from "./pages/forge-private-market/ForgePrivateMarket";
import ForgePrivateMarketAccuidity from "./pages/forge-private-market-accuidity/ForgePrivateMarketAccuidity";
import LiquidityProgram from "./pages/liquidity-program/LiquidityProgram";
import CompanyDetails from "./pages/company-details/CompanyDetails";
import InsightReports from "./pages/insights-reports/InsightReports";
import InsightDetails from "./pages/insight-details/InsightDetails";
import About from "./pages/about/About";
import Leadership from "./pages/leadership/Leadership";
import LeadershipDeatil from "./pages/leadership-details/LeadershipDeatil";
import Career from "./pages/career/Career";
import CareerDetails from "./pages/career-details/CareerDetails";
import ContactUs from "./pages/contact-us/ContactUs";
import FAQPage from "./pages/faq/FAQPage";
import Registration from "./pages/registration/Registration";
import Login from "./pages/login/Login";
import ForgotPassword from "./pages/forgot-password/ForgotPassword";

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
      {
        path: "/assets-manager",
        element: <AssetsManager />,
      },
      {
        path: "/family-offices",
        element: <FamilyOffices />,
      },
      {
        path: "/venture-capital-firms",
        element: <VentureCapitalFirms />,
      },
      {
        path: "/wealth-managers",
        element: <WealthManagers />,
      },
      {
        path: "/private-companies",
        element: <PrivateCompanies />,
      },
      {
        path: "/forge-pro",
        element: <ForgePro />,
      },
      {
        path: "/forge-markets",
        element: <ForgeMarkets />,
      },
      {
        path: "/browse-companies",
        element: <BrowseCompanies />,
      },
      {
        path: "/forge-price",
        element: <ForgePrice />,
      },
      {
        path: "/forge-data",
        element: <ForgeData />,
      },
      {
        path: "/forge-private-market",
        element: <ForgePrivateMarket />,
      },
      {
        path: "/forge-accuidity-private-market",
        element: <ForgePrivateMarketAccuidity />,
      },
      {
        path: "/liquidity-program",
        element: <LiquidityProgram />,
      },
      {
        path: "/company-details/:company_slug",
        element: <CompanyDetails />,
      },
      {
        path: "/insights",
        element: <InsightReports />,
      },
      {
        path: "/insights/details/:insight_id",
        element: <InsightDetails />,
      },
      {
        path: "/about-company",
        element: <About />,
      },
      {
        path: "/leadership",
        element: <Leadership />,
      },
      {
        path: "/leadership/:leader",
        element: <LeadershipDeatil />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/career/job/:job_id",
        element: <CareerDetails />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/faq",
        element: <FAQPage />,
      },
    ],
  },
  {
    element: <Registration />,
    path: "/auth/registration",
    // errorElement: <Error />,
  },
  {
    element: <Login />,
    path: "/auth/log-in",
    // errorElement: <Error />,
  },
  {
    element: <ForgotPassword />,
    path: "/forgot-password",
    // errorElement: <Error />,
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
