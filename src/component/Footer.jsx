// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { FiPhone, FiMail, FiMapPin, FiInstagram } from "react-icons/fi";
// import { FaXTwitter, FaPinterestP } from "react-icons/fa6";
// import { motion } from "framer-motion";

// const Footer = () => {
//   const navigate = useNavigate();

//   const container = {
//     hidden: {},
//     show: { transition: { staggerChildren: 0.18 } },
//   };

//   const item = {
//     hidden: { opacity: 0, y: 40 },
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   return (
//     <footer className="bg-[#06010c] text-white pt-24">
//       <motion.div
//         variants={container}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//         className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14"
//       >
//         {/* ABOUT */}
//         <motion.div variants={item}>
//           <h3 className="text-3xl font-extrabold mb-5 text-[#b21f2d]">
//             JMD CARGO
//           </h3>

//           <p className="text-sm text-white/75 leading-relaxed mb-7">
//             JMD Cargo is a trusted logistics and courier service provider,
//             delivering fast, secure, and reliable shipping solutions worldwide.
//           </p>

//           <div className="flex gap-4">
//             {[FiInstagram, FaXTwitter, FaPinterestP].map((Icon, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ scale: 1.2, y: -4 }}
//                 className="p-2 rounded-full bg-white/10 hover:bg-[#b21f2d]/20 cursor-pointer"
//               >
//                 <Icon />
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* QUICK LINKS */}
//         <motion.div variants={item}>
//           <h4 className="font-semibold text-xl mb-5 text-[#b21f2d]">
//             Quick Links
//           </h4>
//           <ul className="space-y-4 text-sm text-white/75">
//             {[
//               { name: "Home", path: "/" },
//               { name: "About Us", path: "/about" },
//               { name: "Get Rate", path: "/rate" },
//               { name: "Contact Us", path: "/contact" },
//             ].map((item, i) => (
//               <li
//                 key={i}
//                 onClick={() => {
//                   navigate(item.path);
//                   window.scrollTo({ top: 0, behavior: "smooth" });
//                 }}
//                 className="hover:text-[#b21f2d] hover:translate-x-2 transition cursor-pointer"
//               >
//                 {item.name}
//               </li>
//             ))}
//           </ul>
//         </motion.div>

//         {/* SERVICES */}
//         <motion.div variants={item}>
//           <h4 className="font-semibold text-xl mb-5 text-[#b21f2d]">
//             Our Services
//           </h4>
//           <ul className="space-y-4 text-sm text-white/75">
//             <li
//               onClick={() => {
//                 navigate("/services/AirFreight");
//                 window.scrollTo({ top: 0, behavior: "smooth" });
//               }}
//               className="hover:text-[#b21f2d] hover:translate-x-2 transition cursor-pointer"
//             >
//               Air Freight
//             </li>
//           </ul>
//         </motion.div>

//         {/* CONTACT */}
//         <motion.div variants={item}>
//           <h4 className="font-semibold text-xl mb-5 text-[#b21f2d]">
//             Contact
//           </h4>

//           <ul className="space-y-5 text-sm text-white/75">
//             <motion.li whileHover={{ x: 6 }} className="flex items-center gap-3">
//               <FiPhone className="text-[#b21f2d]" />
//               +91 : 011-45084828
//             </motion.li>

//             <motion.li whileHover={{ x: 6 }} className="flex items-center gap-3">
//               <FiMail className="text-[#b21f2d]" />
//               Jmdcargo6061@gmail.com
//             </motion.li>

//             <motion.li whileHover={{ x: 6 }} className="flex items-center gap-3">
//               <FiMapPin className="text-[#b21f2d]" />
//              Unit No. 305, H-17A, Upper Ground Floor,Kalkaji, New Delhi -19
//             </motion.li>
//           </ul>
//         </motion.div>
//       </motion.div>

//       {/* BOTTOM BAR */}
//       <div className="border-t border-white/10 mt-20 py-8 px-4">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
//           <p>© {new Date().getFullYear()} Express. All Rights Reserved.</p>
// <div className="flex gap-6">
//   {["/Terms", "/privacy", "/contact"].map((path, i) => (
//     <span
//       key={i}
//       onClick={() => {
//         navigate(path);
//         window.scrollTo({ top: 0, behavior: "smooth" });
//       }}
//       className="hover:text-[#b21f2d] cursor-pointer transition"
//     >
//       {path.replace("/", "").replace("-", " ")}
//     </span>
//   ))}
// </div>

//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;










import React from "react";
import { useNavigate } from "react-router-dom";
import { FiPhone, FiMail, FiMapPin, FiInstagram } from "react-icons/fi";
import { FaXTwitter, FaPinterestP } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  const navigate = useNavigate();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.18 } },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <footer className="bg-[#06010c] text-white pt-24">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14"
      >
        {/* ABOUT */}
        <motion.div variants={item}>
          <h3 className="text-3xl font-extrabold mb-5 text-[#b21f2d]">
            JMD CARGO
          </h3>

          <p className="text-sm text-white/75 leading-relaxed mb-7">
            JMD Cargo is a trusted logistics and courier service provider,
            delivering fast, secure, and reliable shipping solutions worldwide.
          </p>

          <div className="flex gap-4">
            {[FiInstagram, FaXTwitter, FaPinterestP].map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2, y: -4 }}
                className="p-2 rounded-full bg-white/10 hover:bg-[#b21f2d]/20 cursor-pointer"
              >
                <Icon />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div variants={item}>
          <h4 className="font-semibold text-xl mb-5 text-[#b21f2d]">
            Quick Links
          </h4>
          <ul className="space-y-4 text-sm text-white/75">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Get Rate", path: "/rate" },
              { name: "Contact Us", path: "/contact" },
            ].map((item, i) => (
              <li
                key={i}
                onClick={() => {
                  navigate(item.path);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="hover:text-[#b21f2d] hover:translate-x-2 transition cursor-pointer"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* SERVICES */}
        <motion.div variants={item}>
          <h4 className="font-semibold text-xl mb-5 text-[#b21f2d]">
            Our Services
          </h4>
          <ul className="space-y-4 text-sm text-white/75">
            <li
              onClick={() => {
                navigate("/services/AirFreight");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="hover:text-[#b21f2d] hover:translate-x-2 transition cursor-pointer"
            >
              Air Freight
            </li>
          </ul>
        </motion.div>

        {/* CONTACT */}
        <motion.div variants={item}>
          <h4 className="font-semibold text-xl mb-5 text-[#b21f2d]">
            Contact
          </h4>

          <ul className="space-y-5 text-sm text-white/75">
            <motion.li whileHover={{ x: 6 }} className="flex items-center gap-3">
              <FiPhone className="text-[#b21f2d]" />
              +91 : 011-45084828
            </motion.li>

            <motion.li whileHover={{ x: 6 }} className="flex items-center gap-3">
              <FiMail className="text-[#b21f2d]" />
              Jmdcargo6061@gmail.com
            </motion.li>

            <motion.li whileHover={{ x: 6 }} className="flex items-center gap-3">
              <FiMapPin className="text-[#b21f2d]" />
             Unit No. 305, H-17A, Upper Ground Floor,Kalkaji, New Delhi -19
            </motion.li>
          </ul>
        </motion.div>
      </motion.div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 mt-20 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Express. All Rights Reserved.</p>
<div className="flex gap-6">
  {["/Terms", "/privacy", "/contact"].map((path, i) => (
    <span
      key={i}
      onClick={() => {
        navigate(path);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="hover:text-[#b21f2d] cursor-pointer transition"
    >
      {path.replace("/", "").replace("-", " ")}
    </span>
  ))}
</div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
