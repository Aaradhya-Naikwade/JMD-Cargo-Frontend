



import { Routes, Route, useLocation } from "react-router-dom";

// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";

import AirFreight from "./pages/services/AirFreight";

import ConversionPage from "./pages/Resources/MetricConversion";
import CurrencyExchange from "./pages/Resources/CurrencyExchange";
import DownloadPage from "./pages/Resources/DownloadPage";
import KycPage from "./pages/Resources/KnowYourCustomer";

import Track from "./pages/Track";
import Rate from "./pages/Rate";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

// Admin Pages
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import CreateConsignment from "./admin/CreateConsignment";
import ConsignmentList from "./admin/ConsignmentList";
import EditConsignment from "./admin/EditConsignment";

const App = () => {

  const location = useLocation();

  // Hide navbar/footer on auth and admin pages
  const hideLayout =
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname.startsWith("/admin");

  return (
    <>

      {/* Navbar */}
      {!hideLayout && <Navbar />}

      {/* Routes */}
      <Routes>

        {/* Public Website Routes */}

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/services/airfreight"
          element={<AirFreight />}
        />

        <Route
          path="/resource/kyc"
          element={<KycPage />}
        />

        <Route
          path="/resource/conversion"
          element={<ConversionPage />}
        />

        <Route
          path="/resource/exchange"
          element={<CurrencyExchange />}
        />

        <Route
          path="/resource/download"
          element={<DownloadPage />}
        />

        <Route path="/track" element={<Track />} />

        <Route path="/rate" element={<Rate />} />

        <Route path="/terms" element={<Terms />} />

        <Route path="/privacy" element={<PrivacyPolicy />} />


        {/* Admin Routes */}

        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />

        <Route
          path="/admin/dashboard"
          element={<AdminDashboard />}
        />

        <Route
          path="/admin/create"
          element={<CreateConsignment />}
        />

        <Route
          path="/admin/consignments"
          element={<ConsignmentList />}
        />

        <Route
          path="/admin/edit/:id"
          element={<EditConsignment />}
        />


      </Routes>

      {/* Footer */}
      {!hideLayout && <Footer />}

    </>
  );
};

export default App;
