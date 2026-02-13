// import React from "react";
// import { motion } from "framer-motion";
// import { FiPhoneCall, FiCheckCircle, FiHelpCircle } from "react-icons/fi";
// import image15 from "../../assets/express-images/image15.jpg";
// import image16 from "../../assets/express-images/image16.jpg";


// const faqs = [
//   {
//     q: "Why is KYC required for courier services?",
//     a: "KYC is mandatory to comply with government regulations and to ensure secure, legal, and transparent shipment processing.",
//   },
//   {
//     q: "What documents are required for KYC?",
//     a: "Valid ID proof, address proof, and business documents (if applicable) are required.",
//   },
//   {
//     q: "Is KYC mandatory for every shipment?",
//     a: "Yes, KYC is mandatory for both domestic and international shipments.",
//   },
//   {
//     q: "Is my information safe with you?",
//     a: "Absolutely. Your data is stored securely and used only for verification purposes.",
//   },
// ];

// const KnowYourCustomer = () => {
//   const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   return (
//     <section className="bg-gray-50 overflow-hidden">
//       {/* HERO */}
//       <div className="relative h-[45vh] flex items-center justify-center">
//         <div className="absolute inset-0 bg-gray-300">
//           <img src={image15} className="w-full h-full object-cover" />
//         </div>
//         <div className="absolute inset-0 bg-[#140826]/20" />

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="relative z-10 text-center px-4 text-white"
//         >
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
//             Know Your Customer <span className="text-[#b21f2d]">(KYC)</span>
//           </h1>
//           <p className="max-w-2xl mx-auto text-white/90 text-lg">
//             Ensuring secure, compliant, and trustworthy courier services through
//             proper customer verification.
//           </p>
//         </motion.div>
//       </div>

//       {/* CONTENT */}
//       <div className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-16 items-center">
//         {/* LEFT TEXT */}
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//         >
//           <p className="text-[#b21f2d] font-semibold tracking-widest mb-3">
//             KYC INFORMATION
//           </p>

//           <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-[#140826]">
//             Why KYC Is Important?
//           </h2>

//           <p className="text-gray-600 leading-relaxed mb-6">
//             Know Your Customer (KYC) is a mandatory verification process that
//             helps us prevent fraud, ensure legal compliance, and deliver secure
//             courier services. It builds trust between customers and service
//             providers while protecting shipments from misuse.
//           </p>

//           <ul className="space-y-4 mb-8">
//             {[
//               "Mandatory for domestic & international shipments",
//               "Ensures compliance with government regulations",
//               "Prevents fraud & unauthorized shipments",
//               "Faster and hassle-free shipment processing",
//             ].map((item, i) => (
//               <li key={i} className="flex items-start gap-3">
//                 <FiCheckCircle className="text-[#b21f2d] mt-1" />
//                 <span className="text-gray-700">{item}</span>
//               </li>
//             ))}
//           </ul>

//           {/* CALL NOW */}
//           <motion.a
//             whileHover={{ scale: 1.05 }}
//             href="tel:+917089828175"
//             className="inline-flex items-center gap-3 bg-[#b21f2d]
//                        hover:bg-[#9a1a25]
//                        text-white px-8 py-4 rounded-lg
//                        font-semibold transition"
//           >
//             <FiPhoneCall size={20} />
//             Call Us Now
//           </motion.a>
//         </motion.div>

//         {/* RIGHT IMAGE */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <div className="h-[420px] rounded-3xl bg-gray-300 shadow-xl">
//             <img src={image16} className="w-full h-full object-cover rounded-3xl" />
//           </div>
//         </motion.div>
//       </div>

//       {/* FAQ SECTION */}
//       <div className="bg-white py-20">
//         <div className="max-w-5xl mx-auto px-4">
//           <motion.h3
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//             className="text-3xl font-extrabold text-center mb-14 text-[#140826]"
//           >
//             Frequently Asked <span className="text-[#b21f2d]">Questions</span>
//           </motion.h3>

//           <div className="space-y-6">
//             {faqs.map((item, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.15 }}
//                 viewport={{ once: true }}
//                 className="bg-gray-50 border rounded-xl p-6 hover:shadow-lg transition"
//               >
//                 <div className="flex items-center gap-3 mb-2">
//                   <FiHelpCircle className="text-[#b21f2d]" />
//                   <h4 className="font-semibold text-lg text-[#140826]">
//                     {item.q}
//                   </h4>
//                 </div>
//                 <p className="text-gray-600 text-sm leading-relaxed">
//                   {item.a}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default KnowYourCustomer;











import React from "react";
import { motion } from "framer-motion";
import { FiPhoneCall, FiCheckCircle, FiHelpCircle } from "react-icons/fi";
import image15 from "../../assets/express-images/image15.jpg";
import image16 from "../../assets/express-images/image16.jpg";


const faqs = [
  {
    q: "Why do I need to complete customer verification?",
    a: "Customer verification helps us maintain secure shipping standards and comply with regulatory requirements for safe parcel movement.",
  },
  {
    q: "Which documents are accepted for verification?",
    a: "Government-issued identity proof and valid address proof are generally required for successful verification.",
  },
  {
    q: "Does verification apply to all shipments?",
    a: "Yes, verification is required before processing both domestic and international consignments.",
  },
  {
    q: "How is my submitted information protected?",
    a: "All submitted details are handled confidentially and used strictly for shipment authentication purposes.",
  },
];

const KnowYourCustomer = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-gray-50 overflow-hidden">
      {/* HERO */}
      <div className="relative h-[45vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gray-300">
          <img src={image15} className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-[#140826]/20" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4 text-white"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            Customer Verification <span className="text-[#b21f2d]">(KYC)</span>
          </h1>
          <p className="max-w-2xl mx-auto text-white/90 text-lg">
            Strengthening shipment security and compliance through reliable
            identity verification processes.
          </p>
        </motion.div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT TEXT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p className="text-[#b21f2d] font-semibold tracking-widest mb-3">
            VERIFICATION DETAILS
          </p>

          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-[#140826]">
            Why Verification Matters?
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Identity verification is an essential step in ensuring safe and
            transparent logistics operations. It helps reduce risks, prevents
            misuse of courier channels, and supports smooth shipment handling
            across regions.
          </p>

          <ul className="space-y-4 mb-8">
            {[
              "Required for regulated shipment processing",
              "Supports legal and compliance standards",
              "Reduces risk of fraudulent consignments",
              "Speeds up documentation and dispatch",
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
            className="inline-flex items-center gap-3 bg-[#b21f2d]
                       hover:bg-[#9a1a25]
                       text-white px-8 py-4 rounded-lg
                       font-semibold transition"
          >
            <FiPhoneCall size={20} />
            Contact Support
          </motion.a>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="h-[420px] rounded-3xl bg-gray-300 shadow-xl">
            <img src={image16} className="w-full h-full object-cover rounded-3xl" />
          </div>
        </motion.div>
      </div>

      {/* FAQ SECTION */}
      <div className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-center mb-14 text-[#140826]"
          >
            Common <span className="text-[#b21f2d]">Questions</span>
          </motion.h3>

          <div className="space-y-6">
            {faqs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-gray-50 border rounded-xl p-6 hover:shadow-lg transition"
              >
                <div className="flex items-center gap-3 mb-2">
                  <FiHelpCircle className="text-[#b21f2d]" />
                  <h4 className="font-semibold text-lg text-[#140826]">
                    {item.q}
                  </h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowYourCustomer;
