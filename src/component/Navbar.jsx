import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FiChevronDown, FiArrowRight } from "react-icons/fi";
import logo2 from "../assets/express-images/logo2.jpeg";

import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDrop, setMobileDrop] = useState(null);
  const closeTimer = useRef(null);

  const openMenuNow = (menu) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(menu);
  };

  const closeMenuDelay = () => {
    closeTimer.current = setTimeout(() => {
      setOpenMenu(null);
    }, 200);
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileDrop(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* TOP BAR */}
      <div className="hidden lg:block bg-[#140826] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between flex-wrap gap-3">
          <span className="flex items-center gap-2">
            <HiOutlineLocationMarker className="text-[#b21f2d]" />
            Unit No. 305 H-17A, Upper Ground Floor, Kalkaji, New Delhi -19
          </span>

          <span className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <HiOutlineMail className="text-[#b21f2d]" />
              Jmdcargo6061@gmail.com
            </span>
            <span className="flex items-center gap-2">
              <HiOutlinePhone className="text-[#b21f2d]" />
              +91 : 011-45084828
            </span>
          </span>
        </div>
      </div>

      {/* MAIN NAV */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
          <img
            src={logo2}
            alt="logo"
            className="h-14 hover:scale-105 transition-transform duration-300"
          />

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-8 font-semibold text-[#140826]">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Home
            </Link>{" "}
            <Link
              className="nav-link"
              to="/about"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              About
            </Link>
            {/* SERVICES */}
            <li
              className="relative"
              onMouseEnter={() => openMenuNow("services")}
              onMouseLeave={closeMenuDelay}
            >
              <span className="flex items-center gap-1 cursor-pointer nav-link">
                Services <FiChevronDown />
              </span>

              {openMenu === "services" && (
                <div className="absolute top-12 left-0 w-56 bg-white rounded-xl shadow-xl animate-fade">
                  <Link
                    className="block px-4 py-3 hover:bg-[#b21f2d15]"
                    to="/services/AirFreight"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    Air Freight
                  </Link>
                </div>
              )}
            </li>
            {/* RESOURCES */}
            <li
              className="relative"
              onMouseEnter={() => openMenuNow("resources")}
              onMouseLeave={closeMenuDelay}
            >
              <span className="flex items-center gap-1 cursor-pointer nav-link">
                Resources <FiChevronDown />
              </span>

              {openMenu === "resources" && (
                <div className="absolute top-12 left-0 w-64 bg-white rounded-xl shadow-xl animate-fade">
                  <Link
                    className="block px-4 py-3 hover:bg-[#b21f2d15]"
                    to="/resource/kyc"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    KYC
                  </Link>
                  <Link
                    className="block px-4 py-3 hover:bg-[#b21f2d15]"
                    to="/resource/conversion"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    Metric Conversion
                  </Link>
                  <Link
                    className="block px-4 py-3 hover:bg-[#b21f2d15]"
                    to="/resource/exchange"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    Currency Calculator
                  </Link>
                  <Link
                    className="block px-4 py-3 hover:bg-[#b21f2d15]"
                    to="/resource/download"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    Downloads
                  </Link>
                </div>
              )}
            </li>
            <Link
              className="nav-link"
              to="/track"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Track & Trace
            </Link>
            <Link
              className="nav-link"
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Contact
            </Link>
            <Link
              className="nav-link"
              to="/Rate"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Rate
            </Link>
            <Link
              to="/login"
              className="flex items-center gap-2 bg-[#b21f2d] text-white px-6 py-2 rounded-full hover:scale-105 transition"
            >
              Login <FiArrowRight />
            </Link>
          </ul>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-[#b21f2d]"
          >
            <IoMdMenu size={30} />
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={closeMobile} />

          <div className="absolute left-0 top-0 h-full w-[80%] bg-white animate-slide">
            <div className="flex justify-between items-center p-4 border-b">
              <img src={logo2} className="h-10" />
              <IoMdClose
                size={26}
                className="text-[#b21f2d]"
                onClick={closeMobile}
              />
            </div>

            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Track", "/track"],
              ["Contact", "/contact"],
            ].map(([label, path]) => (
              <Link
                key={label}
                to={path}
                onClick={closeMobile}
                className="block px-4 py-3 border-b font-semibold text-[#140826] hover:bg-[#b21f2d15]"
              >
                {label}
              </Link>
            ))}

            {/* SERVICES */}
            <button
              onClick={() =>
                setMobileDrop(mobileDrop === "services" ? null : "services")
              }
              className="w-full flex justify-between px-4 py-3 font-semibold text-[#140826]"
            >
              Services
              <FiChevronDown
                className={`transition-transform ${mobileDrop === "services" && "rotate-180"}`}
              />
            </button>

            {mobileDrop === "services" && (
              <Link
                className="block px-6 py-2 hover:bg-[#b21f2d15]"
                to="/services/AirFreight"
                onClick={closeMobile}
              >
                Air Freight
              </Link>
            )}

            {/* RESOURCES */}
            <button
              onClick={() =>
                setMobileDrop(mobileDrop === "resources" ? null : "resources")
              }
              className="w-full flex justify-between px-4 py-3 font-semibold text-[#140826]"
            >
              Resources
              <FiChevronDown
                className={`transition-transform ${mobileDrop === "resources" && "rotate-180"}`}
              />
            </button>

            {mobileDrop === "resources" && (
              <div>
                <Link
                  className="block px-6 py-2 hover:bg-[#b21f2d15]"
                  to="/resource/kyc"
                  onClick={closeMobile}
                >
                  KYC
                </Link>
                <Link
                  className="block px-6 py-2 hover:bg-[#b21f2d15]"
                  to="/resource/conversion"
                  onClick={closeMobile}
                >
                  Metric Conversion
                </Link>
                <Link
                  className="block px-6 py-2 hover:bg-[#b21f2d15]"
                  to="/resource/exchange"
                  onClick={closeMobile}
                >
                  Currency Calculator
                </Link>
                <Link
                  className="block px-6 py-2 hover:bg-[#b21f2d15]"
                  to="/resource/download"
                  onClick={closeMobile}
                >
                  Downloads
                </Link>
              </div>
            )}

            <Link
              to="/login"
              onClick={closeMobile}
              className="m-4 flex items-center justify-center gap-2 bg-[#b21f2d] text-white py-3 rounded-lg font-semibold"
            >
              Login <FiArrowRight />
            </Link>
          </div>
        </div>
      )}

      {/* ANIMATIONS */}
      <style>{`
        .nav-link {
          position: relative;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 0;
          height: 2px;
          background: #b21f2d;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }

        .animate-fade {
          animation: fade 0.25s ease-out;
        }
        @keyframes fade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-slide {
          animation: slide 0.3s ease-out;
        }
        @keyframes slide {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
