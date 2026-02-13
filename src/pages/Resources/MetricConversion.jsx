import { useState } from "react";
import { motion } from "framer-motion";
import { FiBox, FiArrowRight } from "react-icons/fi";
import image17 from "../../assets/express-images/image17.jpg";

const MetricConversion = () => {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState(null);

  const calculateWeight = () => {
    if (!length || !width || !height) return;

    const cubicSize =
      Math.ceil(length) * Math.ceil(width) * Math.ceil(height);

    const volumetricWeight = (cubicSize / 5000).toFixed(2);
    setResult(volumetricWeight);
  };

  return (
    <section className="bg-[#f6f8f7] overflow-hidden">

            <div className="relative h-[45vh] flex items-center justify-center">
              <div className="absolute inset-0 bg-gray-300">
                <img src={image17} className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-[#140826]/50" />
      
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 text-center px-4 text-white"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
Metric <span className="text-[#b21f2d]">Conversion</span>                </h1>
                <p className="max-w-2xl mx-auto text-white/90 text-lg">
                  Calculate volumetric (dimensional) weight using ANS Express courier
          standards.
                </p>
              </motion.div>
            </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-14">
        {/* LEFT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold mb-6 text-[#140826]">
            What is Volumetric Weight?
          </h2>

          <p className="text-gray-600 mb-5 leading-relaxed">
            Shipping charges will be based on the dimensional weight of the
            shipment when the dimensional weight exceeds the actual weight.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Dimensional weight is determined by using{" "}
            <span className="font-semibold text-[#b21f2d]">
              ANS Express volumetric standard
            </span>
            .
          </p>

          <div className="space-y-5">
            <div className="flex gap-3">
              <FiBox className="text-[#b21f2d] mt-1" />
              <p>
                <strong>Step 1:</strong> Calculate cubic size – multiply
                <strong> length × width × height </strong>
                (rounded up to nearest cm).
              </p>
            </div>

            <div className="flex gap-3">
              <FiBox className="text-[#b21f2d] mt-1" />
              <p>
                <strong>Step 2:</strong> Divide cubic size by
                <strong> 5000 </strong> to get volumetric weight (kg).
              </p>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              Note: Maximum weight of a package may vary by destination.  
              Please contact our Customer Service for more details.
            </p>
          </div>
        </motion.div>

        {/* RIGHT CALCULATOR */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 border"
        >
          <h3 className="text-2xl font-bold mb-6 text-[#140826]">
            Volumetric Weight Calculator
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
            <input
              type="number"
              placeholder="Length (cm)"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#b21f2d] outline-none"
            />
            <input
              type="number"
              placeholder="Width (cm)"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#b21f2d] outline-none"
            />
            <input
              type="number"
              placeholder="Height (cm)"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#b21f2d] outline-none"
            />
          </div>

          <button
            onClick={calculateWeight}
            className="w-full bg-[#b21f2d] hover:bg-[#9a1a25] text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition"
          >
            Show Result <FiArrowRight />
          </button>

          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg"
            >
              <p className="font-semibold text-[#140826]">
                Your Volumetric Weight is:
              </p>
              <p className="text-2xl font-extrabold mt-1 text-[#b21f2d]">
                {result} kg
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default MetricConversion;
