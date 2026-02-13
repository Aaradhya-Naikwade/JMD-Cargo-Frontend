import { useState } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import logo2 from "../assets/express-images/logo2.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Contact = () => {
  const location = useLocation();
  const showHero = location.pathname === "/contact";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="bg-[#f6f7fb] overflow-hidden">
      {/* HERO */}
      {showHero && (
        <div className="relative h-[45vh] flex items-center justify-center">
          <div className="absolute inset-0 bg-[#140826]" />
             <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${logo2})` }}
                  />
                  <div className="absolute inset-0 bg-black/20" />


          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-white text-4xl sm:text-5xl font-extrabold"
          >
            Contact <span className="text-[#b21f2d]">Us</span>
          </motion.h1>
        </div>
      )}

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT INFO */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-[#b21f2d] font-semibold tracking-widest">
            GET IN TOUCH
          </p>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#140826]">
            Contact Us Today
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Have questions about shipping, tracking or documentation?  
            Our team is always ready to help you.
          </p>

          <div className="space-y-4 pt-4">
            <InfoCard
              icon={<FiPhone />}
              title="Call Us"
              text="+91 : 001-45084828"
            />
            <InfoCard
              icon={<FiMapPin />}
              title="Office Address"
              text="Unit No. 305 H-17A,Upper Ground Floor, Kalkaji, New Delhi -19"
            />
            <InfoCard
              icon={<FiMail />}
              title="Email Us"
              text="Jmdcargo6061@gmail.com"
            />
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-8"
        >
          <h3 className="text-2xl font-extrabold text-[#140826] mb-6">
            Feel Free To Write Us
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <Input
              name="phone"
              placeholder="Mobile"
              value={form.phone}
              onChange={handleChange}
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message..."
              value={form.message}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl border border-gray-300
                         focus:border-[#b21f2d]
                         focus:ring-2 focus:ring-[#b21f2d40]
                         outline-none transition"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-full bg-[#b21f2d]
                         hover:bg-[#8a1823]
                         text-white py-3 rounded-xl
                         font-semibold transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

/* REUSABLE INPUT */
const Input = ({ type = "text", ...props }) => (
  <input
    type={type}
    required
    className="w-full p-4 rounded-xl border border-gray-300
               focus:border-[#b21f2d]
               focus:ring-2 focus:ring-[#b21f2d40]
               outline-none transition"
    {...props}
  />
);

/* INFO CARD */
const InfoCard = ({ icon, title, text }) => (
  <motion.div
    whileHover={{ y: -6 }}
    className="flex gap-4 items-start bg-white p-5 rounded-2xl
               shadow hover:shadow-xl transition"
  >
    <div className="w-12 h-12 flex items-center justify-center rounded-xl
                    bg-[#b21f2d15] text-[#b21f2d] text-xl">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-[#140826]">{title}</h4>
      <p className="text-sm text-gray-600">{text}</p>
    </div>
  </motion.div>
);

export default Contact;
