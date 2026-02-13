import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo2 from "../assets/express-images/logo2.jpeg";


const RateCalculator = () => {
  const navigate = useNavigate();

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full bg-gray-50">
      {/* HERO */}
      <div className="relative h-[45vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gray-300">
          <img src={logo2} className="w-full h-full object-cover" />
        </div>

        <div className="absolute inset-0 bg-[#140826]/30" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-4"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
            Rate Calculator
          </h1>

          <p className="text-sm text-white/80">
            <span
              onClick={() => navigate("/")}
              className="cursor-pointer hover:text-[#b21f2d] transition"
            >
              Home
            </span>
            <span className="mx-2">→</span>
            <span className="text-white/60">Rate Calculator</span>
          </p>
        </motion.div>
      </div>

      {/* CARD */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 -mt-24 relative z-20"
      >
        <div className="bg-white rounded-2xl shadow-2xl border overflow-hidden">
          {/* HEADER */}
          <div className="px-6 py-5 border-b bg-gray-50">
            <h2 className="text-xl font-bold text-[#0b0514]">
              Rate Calculator
            </h2>
          </div>

          {/* FORM */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* DATE */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Date <span className="text-[#b21f2d]">*</span>
              </label>
              <input
                type="date"
                className="w-full border rounded-lg px-3 py-2
                focus:ring-2 focus:ring-[#b21f2d] outline-none"
              />
            </div>

            {/* DESTINATION */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Destination <span className="text-[#b21f2d]">*</span>
              </label>
              <select
                className="w-full border rounded-lg px-3 py-2
                focus:ring-2 focus:ring-[#b21f2d] outline-none"
              >
                <option>-- Select --</option>
                <option>Delhi</option>
                <option>Mumbai</option>
                <option>Bangalore</option>
              </select>
            </div>

            {/* WEIGHT */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Weight <span className="text-[#b21f2d]">*</span>
              </label>
              <input
                type="number"
                placeholder="Actual Weight (kg)"
                className="w-full border rounded-lg px-3 py-2
                focus:ring-2 focus:ring-[#b21f2d] outline-none"
              />
            </div>

            {/* GOODS TYPE */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Goods Type
              </label>
              <select
                className="w-full border rounded-lg px-3 py-2
                focus:ring-2 focus:ring-[#b21f2d] outline-none"
              >
                <option>All</option>
                <option>Documents</option>
                <option>Electronics</option>
              </select>
            </div>

            {/* BUTTON */}
            <div className="flex items-end">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full bg-[#b21f2d] hover:bg-[#9a1a24]
                text-white font-semibold py-3 rounded-lg transition"
              >
                Show
              </motion.button>
            </div>
          </div>

          {/* REPORT */}
          <div className="border-t">
            <div className="px-6 py-4 bg-gray-50">
              <h2 className="text-lg font-semibold text-[#140826]">
                Rate Report
              </h2>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="h-24"></div>
    </div>
  );
};

export default RateCalculator;
