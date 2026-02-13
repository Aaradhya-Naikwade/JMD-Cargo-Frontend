import { motion } from "framer-motion";

const companies = [
  { name: "UPS" },
  { name: "TNT" },
  { name: "FedEx" },
  { name: "Aramex" },
  { name: "DHL" },
];

const ExpressCourier = () => {
  return (
    <section className="py-24 bg-[#f6f7fb] overflow-hidden">

      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 text-center mb-16"
      >
        <p className="text-[#b21f2d] font-semibold tracking-widest mb-3">
          EXPRESS COURIER INDUSTRY
        </p>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0d051a]">
          Trusted Global Courier Partners
        </h2>
      </motion.div>

      {/* MARQUEE STRIP */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-12 sm:gap-20 w-max px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 28,
            ease: "linear",
          }}
        >
          {[...companies, ...companies].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.06 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="
                min-w-[240px] sm:min-w-[300px]
                h-32 sm:h-36
                flex items-center justify-center
                rounded-2xl
                bg-white
                border border-gray-200
                shadow-lg hover:shadow-[0_25px_60px_-20px_#b21f2d80]
                relative overflow-hidden
                group
              "
            >
              {/* DARK HOVER OVERLAY */}
              <div
                className="
                  absolute inset-0 bg-[#0d051a]
                  opacity-0 group-hover:opacity-100
                  transition duration-500
                "
              />

              {/* SHINE EFFECT */}
              <span
                className="
                  absolute inset-0
                  -translate-x-full
                  group-hover:translate-x-full
                  transition-transform duration-1000
                  bg-gradient-to-r from-transparent via-white/40 to-transparent
                "
              />

              {/* TEXT / LOGO */}
              <span
                className="
                  relative z-10
                  text-3xl sm:text-4xl
                  font-extrabold
                  text-[#0d051a]
                  group-hover:text-[#b21f2d]
                  transition-colors duration-300
                "
              >
                {item.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default ExpressCourier;
