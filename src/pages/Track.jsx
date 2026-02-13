// import { useState } from "react";
// import { motion } from "framer-motion";
// import { FiSearch, FiMapPin } from "react-icons/fi"
// import logo2 from "../assets/express-images/logo2.jpeg";
// import TrackShipment from "../component/TrackShipment";

// const Track = () => {
//   const [trackingId, setTrackingId] = useState("");

//   const handleTrack = () => {
//     if (!trackingId) return;
//     alert(`Tracking ID: ${trackingId}`);
//   };

//   return (
//     <section className="overflow-hidden bg-[#f6f8f7]">
//       {/* HERO */}
//       <div className="relative py-24 px-4 text-center">
//         {/* BACKGROUND IMAGE PATH */}
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(${logo2})` }}
//         />
//         <div className="absolute inset-0 bg-black/20" />

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9 }}
//           className="relative z-10 text-white"
//         >
//           <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
//             Track & Trace
//           </h1>
//           <p className="max-w-2xl mx-auto text-white/90">
//             Track your shipment in real-time and stay updated with delivery
//             status.
//           </p>
//         </motion.div>
//       </div>

//       {/* TRACK CARD */}
//       <div className="max-w-4xl mx-auto px-4 -mt-20 relative z-20">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="bg-white rounded-2xl shadow-2xl p-8 md:p-10"
//         >
//           {/* <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-8 text-[#b21f2d]">
//             Track Your Shipment
//           </h2> */}
//           <TrackShipment />

//         </motion.div>
//       </div>

//       {/* INFO SECTION */}
//       <div className="max-w-6xl mx-auto px-4 py-24">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="grid md:grid-cols-3 gap-8 text-center"
//         >
//           {[
//             {
//               title: "Real-Time Updates",
//               text: "Get live tracking updates at every stage of delivery.",
//             },
//             {
//               title: "Global Coverage",
//               text: "Track domestic & international shipments worldwide.",
//             },
//             {
//               title: "Secure & Reliable",
//               text: "Your shipment data is safe and encrypted with us.",
//             },
//           ].map((item, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ y: -8 }}
//               transition={{ duration: 0.3 }}
//               className="bg-white rounded-2xl shadow-md p-6"
//             >
//               <h3 className="text-lg font-bold mb-2 text-[#b21f2d]">
//                 {item.title}
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 {item.text}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Track;








import { useState } from "react";
import { motion } from "framer-motion";
import { FiSearch, FiMapPin } from "react-icons/fi"
import logo2 from "../assets/express-images/logo2.jpeg";

import TrackShipment from "../component/TrackShipment";

const Track = () => {
  const [trackingId, setTrackingId] = useState("");

  const handleTrack = () => {
    if (!trackingId) return;
    alert(`Tracking ID: ${trackingId}`);
  };

  return (
    <section className="overflow-hidden bg-[#f6f8f7]">
      {/* HERO */}
      <div className="relative py-24 px-4 text-center">
        {/* BACKGROUND IMAGE PATH */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${logo2})` }}
        />
        <div className="absolute inset-0 bg-black/20" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 text-white"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Shipment Tracking Portal
          </h1>
          <p className="max-w-2xl mx-auto text-white/90">
            Enter your shipment reference number to view the latest movement
            details and delivery progress updates.
          </p>
        </motion.div>
      </div>

      {/* TRACK CARD */}
      <div className="max-w-4xl mx-auto px-4 -mt-20 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-2xl p-8 md:p-10"
        >
          {/* <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-8 text-[#b21f2d]">
            Check Delivery Status
          </h2>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <FiMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Enter Shipment Reference Number"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                className="w-full border rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-[#b21f2d] outline-none"
              />
            </div>

            <button
              onClick={handleTrack}
              className="bg-[#b21f2d] hover:bg-[#8a1823] text-white font-semibold px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition"
            >
              <FiSearch />
              Check Status
            </button>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            Use your shipment ID or booking number to access current delivery
            information and transit updates.
          </p> */}

          <TrackShipment />
        </motion.div>
      </div>

      {/* INFO SECTION */}
      <div className="max-w-6xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 text-center"
        >
          {[
            {
              title: "Live Movement Details",
              text: "View shipment progress as it moves through different transit points.",
            },
            {
              title: "Domestic & International Tracking",
              text: "Monitor consignments across cities and global destinations.",
            },
            {
              title: "Accurate Status Information",
              text: "Access reliable delivery updates and estimated arrival details.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-md p-6"
            >
              <h3 className="text-lg font-bold mb-2 text-[#b21f2d]">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Track;
