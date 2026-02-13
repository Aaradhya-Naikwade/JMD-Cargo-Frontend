import { useState } from "react";
import { motion } from "framer-motion";
import { FiRepeat, FiArrowRight } from "react-icons/fi";
import image18 from "../../assets/express-images/image18.jpg";

const rates = {
  USD: 1,
  INR: 83,
  EUR: 0.92,
  GBP: 0.79,
  AED: 3.67,
};

const CurrencyExchange = () => {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [result, setResult] = useState(null);

  const convertCurrency = () => {
    if (!amount) return;

    const usdAmount = amount / rates[from];
    const converted = (usdAmount * rates[to]).toFixed(2);
    setResult(converted);
  };

  const swapCurrency = () => {
    setFrom(to);
    setTo(from);
    setResult(null);
  };

  return (
    <section className="overflow-hidden">
      {/* HERO */}

      <div className="relative h-[45vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gray-300">
          <img src={image18} className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-[#140826]/50" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4 text-white"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            Currency <span className="text-[#b21f2d]">Exchange</span>
          </h1>{" "}
          <p className="max-w-3xl mx-auto text-white/90">
            Easily convert currencies with accurate exchange calculations for
            international shipping and payments.
          </p>
        </motion.div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-16">
        {/* LEFT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold mb-6">
            What is Currency Exchange?
          </h2>

          <p className="text-gray-600 mb-5 leading-relaxed">
            Currency exchange is the process of converting one country’s
            currency into another based on current exchange rates.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Exchange rates may vary depending on market conditions, bank
            policies, and international trade.
          </p>

          <ul className="space-y-4 text-gray-600">
            <li>• Used in international shipping & payments</li>
            <li>• Helps calculate exact payable amount</li>
            <li>• Rates can change daily</li>
          </ul>
        </motion.div>

        {/* RIGHT CONVERTER */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6">
            Currency <span className="text-[#b21f2d]">Converter</span>
          </h3>

          <div className="space-y-5">
            <input
              type="number"
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#b21f2d] outline-none"
            />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
              <select
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="border rounded-lg px-4 py-3"
              >
                {Object.keys(rates).map((cur) => (
                  <option key={cur}>{cur}</option>
                ))}
              </select>

              <button
                onClick={swapCurrency}
                className="flex justify-center items-center"
              >
                <FiRepeat className="text-2xl text-gray-600 hover:rotate-180 transition-transform duration-300" />
              </button>

              <select
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="border rounded-lg px-4 py-3"
              >
                {Object.keys(rates).map((cur) => (
                  <option key={cur}>{cur}</option>
                ))}
              </select>
            </div>

            <button
              onClick={convertCurrency}
              className="w-full bg-[#b21f2d] text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-[#9a1a25] transition"
            >
              Convert <FiArrowRight />
            </button>

            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-6 p-4 bg-gray-100 rounded-lg"
              >
                <p className="font-semibold">Converted Amount:</p>
                <p className="text-2xl font-extrabold mt-1">
                  {result} {to}
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CurrencyExchange;
