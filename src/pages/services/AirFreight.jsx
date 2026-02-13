import { motion } from "framer-motion";
import { FiPhoneCall, FiCheckCircle } from "react-icons/fi";
import image10 from "../../assets/express-images/image10.jpg";
import image11 from "../../assets/express-images/image11.jpg";
import image12 from "../../assets/express-images/image12.jpg";
import image13 from "../../assets/express-images/image13.jpg";
import image14 from "../../assets/express-images/image14.jpg";


const AirFreight = () => {
  const galleryImages = [image12, image13, image14];

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-gray-50 overflow-hidden">
      {/* HERO */}
      <div className="relative h-[45vh] flex items-center justify-center">
        {/* IMAGE */}
        <div className="absolute inset-0 bg-gray-300">
          <img src={image10} className="w-full h-full object-cover" />
        </div>

        <div className="absolute inset-0 bg-[#140826]/50" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            Air Transport Services
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto text-lg">
            Fast, secure, and reliable air freight solutions designed to move
            your cargo across the globe with speed and precision.
          </p>
        </motion.div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-14 items-center">
        {/* TEXT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p className="text-[#b21f2d] font-semibold tracking-widest mb-3">
            AIR FREIGHT SERVICES
          </p>

          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
            Reliable & Time-Critical Air Cargo Solutions
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Our air freight services ensure fast transit times, global reach,
            and maximum security for your shipments. Whether it's urgent
            documents or large cargo, we deliver with precision and care.
          </p>

          <ul className="space-y-4 mb-8">
            {[
              "Worldwide airport-to-airport delivery",
              "Express & priority air cargo services",
              "Secure handling & real-time tracking",
              "Custom clearance assistance",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <FiCheckCircle className="text-[#b21f2d] mt-1" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

          {/* CALL NOW */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="tel:+917089828175"
            className="inline-flex items-center gap-3
                       bg-[#b21f2d] hover:bg-[#9a1a25]
                       text-white
                       px-8 py-4 rounded-lg font-semibold transition"
          >
            <FiPhoneCall size={20} />
            Call Us Now
          </motion.a>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="h-[420px] rounded-3xl bg-gray-300 shadow-xl">
            <img src={image11} className="w-full h-full object-cover rounded-3xl" />
          </div>
        </motion.div>
      </div>

      {/* GALLERY */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-center mb-14"
          >
            Our Air Freight <span className="text-[#b21f2d]">Operations</span>
          </motion.h3>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {galleryImages.map((img, i) => (
    <motion.div
      key={i}
      whileHover={{ y: -10, scale: 1.03 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.2 }}
      viewport={{ once: true }}
      className="h-64 bg-gray-300 rounded-2xl shadow-lg overflow-hidden"
    >
      <img
        src={img}
        alt={`Air Freight ${i + 1}`}
        className="w-full h-full object-cover"
      />
    </motion.div>
  ))}
</div>

        </div>
      </div>
    </section>
  );
};

export default AirFreight;
