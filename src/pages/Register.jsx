import { motion } from "framer-motion";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo2 from "../assets/express-images/logo2.jpeg";
import image20 from "../assets/express-images/image20.jpg";

const Register = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${image20})` }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="relative z-10 w-full max-w-5xl bg-white
                   rounded-[36px] shadow-2xl overflow-hidden
                   grid md:grid-cols-2"
      >
        {/* LEFT BRAND */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-[#b21f2d] to-[#8a1823]
                     flex flex-col justify-center items-center p-10"
        >
          <motion.img
            src={logo2}
            alt="ANS Express"
            initial={{ scale: 0.6, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.6 }}
            className="w-56 mb-6"
          />

          <p className="text-white text-center text-lg max-w-sm">
            Create your account to track shipments and manage services easily.
          </p>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="p-12"
        >
          <h2 className="text-4xl font-extrabold text-[#140826] mb-10">
            Create Account
          </h2>

          {/* NAME */}
          <div className="mb-6">
            <label className="text-sm font-semibold text-gray-600">
              Full Name
            </label>
            <div className="flex items-center border rounded-xl px-4 mt-2
                            focus-within:border-[#b21f2d] transition">
              <FiUser className="text-gray-400" />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 outline-none"
              />
            </div>
          </div>

          {/* EMAIL */}
          <div className="mb-6">
            <label className="text-sm font-semibold text-gray-600">
              Email Address
            </label>
            <div className="flex items-center border rounded-xl px-4 mt-2
                            focus-within:border-[#b21f2d] transition">
              <FiMail className="text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 outline-none"
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div className="mb-6">
            <label className="text-sm font-semibold text-gray-600">
              Password
            </label>
            <div className="flex items-center border rounded-xl px-4 mt-2
                            focus-within:border-[#b21f2d] transition">
              <FiLock className="text-gray-400" />
              <input
                type="password"
                placeholder="Create password"
                className="w-full p-3 outline-none"
              />
            </div>
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="mb-8">
            <label className="text-sm font-semibold text-gray-600">
              Confirm Password
            </label>
            <div className="flex items-center border rounded-xl px-4 mt-2
                            focus-within:border-[#b21f2d] transition">
              <FiLock className="text-gray-400" />
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full p-3 outline-none"
              />
            </div>
          </div>

          {/* REGISTER BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-[#b21f2d] hover:bg-[#8a1823]
                       text-white py-4 rounded-xl font-bold
                       transition shadow-lg"
          >
            Register
          </motion.button>

          {/* LOGIN LINK */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center text-sm text-gray-600 mt-8"
          >
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#b21f2d] font-semibold hover:underline"
            >
              Sign In
            </Link>
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Register;
