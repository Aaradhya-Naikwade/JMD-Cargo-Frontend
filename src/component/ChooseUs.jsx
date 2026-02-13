// import {
//   FaGlobe,
//   FaClock,
//   FaHeadset,
//   FaBoxOpen,
//   FaCogs,
//   FaAward,
// } from "react-icons/fa";

// const chooseUsData = [
//   {
//     icon: <FaGlobe />,
//     title: "Global Network",
//     desc: "Worldwide logistics network with trusted partners across continents.",
//   },
//   {
//     icon: <FaClock />,
//     title: "Right Time Delivery",
//     desc: "We ensure your shipments arrive safely and always on schedule.",
//   },
//   {
//     icon: <FaHeadset />,
//     title: "24-Hour Support",
//     desc: "Our expert support team is available 24/7 for your assistance.",
//   },
//   {
//     icon: <FaBoxOpen />,
//     title: "Special Shipments",
//     desc: "Handling fragile, oversized & high-value goods with care.",
//   },
//   {
//     icon: <FaCogs />,
//     title: "Bespoke Solutions",
//     desc: "Customized logistics solutions designed for your business.",
//   },
//   {
//     icon: <FaAward />,
//     title: "Esteemed Company",
//     desc: "Trusted by top companies with years of industry excellence.",
//   },
// ];

// const ChooseUs = () => {
//   return (
//     <section className="relative py-28 bg-[#f6f7fb] overflow-hidden">
//       {/* BACKGROUND FLOATING BLOBS */}
//       <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#b21f2d]/10 rounded-full blur-3xl animate-blob" />
//       <div className="absolute top-1/3 -right-40 w-96 h-96 bg-[#140826]/10 rounded-full blur-3xl animate-blob delay-2000" />

//       <div className="relative max-w-7xl mx-auto px-6">
//         {/* HEADING */}
//         <div className="text-center mb-24 animate-fadeDown">
//           <p className="text-[#b21f2d] tracking-widest font-semibold mb-4">
//             WHY CHOOSE US
//           </p>
//           <h2 className="text-4xl md:text-5xl font-extrabold text-[#0d051a] leading-tight">
//             Some Reasons to <span className="text-[#b21f2d]">Choose Us</span>
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto mt-5">
//             We combine speed, safety, and smart logistics solutions to help your
//             business grow globally.
//           </p>
//         </div>

//         {/* CARDS */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 perspective-[1600px]">
//           {chooseUsData.map((item, index) => (
//             <div
//               key={index}
//               style={{ animationDelay: `${index * 140}ms` }}
//               className="
//                 group relative bg-white rounded-[28px] p-10
//                 border border-gray-100
//                 overflow-hidden
//                 animate-cardReveal
//                 transition-all duration-[1000ms]
//                 ease-[cubic-bezier(.16,1,.3,1)]
//                 hover:-translate-y-8
//                 hover:[transform:rotateX(10deg)_rotateY(-10deg)]
//                 hover:shadow-[0_60px_120px_-35px_rgba(0,0,0,0.55)]
//               "
//             >
//               {/* SHIMMER LAYER */}
//               <div
//                 className="
//                 absolute inset-0 opacity-0 group-hover:opacity-100
//                 transition duration-700
//                 bg-[linear-gradient(120deg,transparent,rgba(178,31,45,0.18),transparent)]
//                 animate-shimmer
//               "
//               />

//               {/* AURORA GLOW */}
//               <div
//                 className="
//                   pointer-events-none absolute -inset-28
//                   opacity-0 group-hover:opacity-100
//                   transition duration-700
//                   bg-[radial-gradient(circle_at_30%_20%,rgba(178,31,45,0.45),transparent_65%)]
//                   animate-glowFloat
//                 "
//               />

//               {/* CONTENT */}
//               <div className="relative z-10">
//                 {/* ICON */}
//                 <div
//                   className="
//                     w-16 h-16 rounded-2xl mb-7
//                     flex items-center justify-center
//                     text-3xl
//                     bg-[#b21f2d15] text-[#b21f2d]
//                     transition-all duration-700
//                     group-hover:bg-[#b21f2d]
//                     group-hover:text-white
//                     group-hover:scale-125
//                     group-hover:-translate-y-4
//                     group-hover:rotate-12
//                     animate-iconFloat
//                   "
//                 >
//                   {item.icon}
//                 </div>

//                 {/* TITLE */}
//                 <h3
//                   className="
//                     text-xl font-bold mb-4 text-[#0d051a]
//                     transition-all duration-500
//                     group-hover:text-[#b21f2d]
//                     group-hover:-translate-y-1
//                   "
//                 >
//                   {item.title}
//                 </h3>

//                 {/* DESC */}
//                 <p
//                   className="
//                     text-gray-600 leading-relaxed
//                     transition-all duration-500
//                     group-hover:translate-y-1
//                     group-hover:text-gray-700
//                   "
//                 >
//                   {item.desc}
//                 </p>
//               </div>

//               {/* MAGNETIC BORDER */}
//               <span
//                 className="
//                   absolute inset-0 rounded-[28px]
//                   opacity-0 group-hover:opacity-100
//                   transition duration-700
//                   ring-1 ring-[#b21f2d]/40
//                 "
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ANIMATIONS */}
//       <style>
//         {`
//           @keyframes fadeDown {
//             from { opacity: 0; transform: translateY(-40px); }
//             to { opacity: 1; transform: translateY(0); }
//           }
//           .animate-fadeDown {
//             animation: fadeDown 1.1s ease forwards;
//           }

//           @keyframes cardReveal {
//             from {
//               opacity: 0;
//               transform: translateY(70px) scale(0.92);
//             }
//             to {
//               opacity: 1;
//               transform: translateY(0) scale(1);
//             }
//           }
//           .animate-cardReveal {
//             animation: cardReveal 1.1s cubic-bezier(.16,1,.3,1) forwards;
//           }

//           @keyframes iconFloat {
//             0%,100% { transform: translateY(0); }
//             50% { transform: translateY(-8px); }
//           }
//           .animate-iconFloat {
//             animation: iconFloat 4s ease-in-out infinite;
//           }

//           @keyframes glowFloat {
//             0% { transform: translate(0,0); }
//             50% { transform: translate(30px,-25px); }
//             100% { transform: translate(0,0); }
//           }
//           .animate-glowFloat {
//             animation: glowFloat 7s ease-in-out infinite;
//           }

//           @keyframes shimmer {
//             0% { transform: translateX(-100%); }
//             100% { transform: translateX(100%); }
//           }
//           .animate-shimmer {
//             animation: shimmer 2.5s ease-in-out infinite;
//           }

//           @keyframes blob {
//             0%,100% { transform: translate(0,0) scale(1); }
//             50% { transform: translate(30px,-20px) scale(1.1); }
//           }
//           .animate-blob {
//             animation: blob 10s ease-in-out infinite;
//           }
//         `}
//       </style>
//     </section>
//   );
// };

// export default ChooseUs;










import {
  FaGlobe,
  FaClock,
  FaHeadset,
  FaBoxOpen,
  FaCogs,
  FaAward,
} from "react-icons/fa";

const chooseUsData = [
  {
    icon: <FaGlobe />,
    title: "International Coverage",
    desc: "Strong global presence with reliable logistics partners in major trade regions.",
  },
  {
    icon: <FaClock />,
    title: "On-Schedule Performance",
    desc: "Committed to precise timelines with efficient planning and execution.",
  },
  {
    icon: <FaHeadset />,
    title: "Dedicated Assistance",
    desc: "Our professional support team ensures smooth communication at every step.",
  },
  {
    icon: <FaBoxOpen />,
    title: "Careful Cargo Handling",
    desc: "Specialized management for sensitive, heavy, and high-value shipments.",
  },
  {
    icon: <FaCogs />,
    title: "Smart Logistics Planning",
    desc: "Optimized supply chain strategies tailored to your operational needs.",
  },
  {
    icon: <FaAward />,
    title: "Proven Industry Experience",
    desc: "Recognized for consistent service quality and long-term client partnerships.",
  },
];

const ChooseUs = () => {
  return (
    <section className="relative py-28 bg-[#f6f7fb] overflow-hidden">
      {/* BACKGROUND FLOATING BLOBS */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#b21f2d]/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-[#140826]/10 rounded-full blur-3xl animate-blob delay-2000" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* HEADING */}
        <div className="text-center mb-24 animate-fadeDown">
          <p className="text-[#b21f2d] tracking-widest font-semibold mb-4">
            OUR ADVANTAGES
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0d051a] leading-tight">
            Why Businesses <span className="text-[#b21f2d]">Trust Us</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-5">
            Delivering dependable logistics solutions through innovation,
            precision, and a commitment to long-term partnerships.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 perspective-[1600px]">
          {chooseUsData.map((item, index) => (
            <div
              key={index}
              style={{ animationDelay: `${index * 140}ms` }}
              className="
                group relative bg-white rounded-[28px] p-10
                border border-gray-100
                overflow-hidden
                animate-cardReveal
                transition-all duration-[1000ms]
                ease-[cubic-bezier(.16,1,.3,1)]
                hover:-translate-y-8
                hover:[transform:rotateX(10deg)_rotateY(-10deg)]
                hover:shadow-[0_60px_120px_-35px_rgba(0,0,0,0.55)]
              "
            >
              <div
                className="
                absolute inset-0 opacity-0 group-hover:opacity-100
                transition duration-700
                bg-[linear-gradient(120deg,transparent,rgba(178,31,45,0.18),transparent)]
                animate-shimmer
              "
              />

              <div
                className="
                  pointer-events-none absolute -inset-28
                  opacity-0 group-hover:opacity-100
                  transition duration-700
                  bg-[radial-gradient(circle_at_30%_20%,rgba(178,31,45,0.45),transparent_65%)]
                  animate-glowFloat
                "
              />

              <div className="relative z-10">
                <div
                  className="
                    w-16 h-16 rounded-2xl mb-7
                    flex items-center justify-center
                    text-3xl
                    bg-[#b21f2d15] text-[#b21f2d]
                    transition-all duration-700
                    group-hover:bg-[#b21f2d]
                    group-hover:text-white
                    group-hover:scale-125
                    group-hover:-translate-y-4
                    group-hover:rotate-12
                    animate-iconFloat
                  "
                >
                  {item.icon}
                </div>

                <h3
                  className="
                    text-xl font-bold mb-4 text-[#0d051a]
                    transition-all duration-500
                    group-hover:text-[#b21f2d]
                    group-hover:-translate-y-1
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    text-gray-600 leading-relaxed
                    transition-all duration-500
                    group-hover:translate-y-1
                    group-hover:text-gray-700
                  "
                >
                  {item.desc}
                </p>
              </div>

              <span
                className="
                  absolute inset-0 rounded-[28px]
                  opacity-0 group-hover:opacity-100
                  transition duration-700
                  ring-1 ring-[#b21f2d]/40
                "
              />
            </div>
          ))}
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes fadeDown {
            from { opacity: 0; transform: translateY(-40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeDown {
            animation: fadeDown 1.1s ease forwards;
          }

          @keyframes cardReveal {
            from {
              opacity: 0;
              transform: translateY(70px) scale(0.92);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          .animate-cardReveal {
            animation: cardReveal 1.1s cubic-bezier(.16,1,.3,1) forwards;
          }

          @keyframes iconFloat {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          .animate-iconFloat {
            animation: iconFloat 4s ease-in-out infinite;
          }

          @keyframes glowFloat {
            0% { transform: translate(0,0); }
            50% { transform: translate(30px,-25px); }
            100% { transform: translate(0,0); }
          }
          .animate-glowFloat {
            animation: glowFloat 7s ease-in-out infinite;
          }

          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .animate-shimmer {
            animation: shimmer 2.5s ease-in-out infinite;
          }

          @keyframes blob {
            0%,100% { transform: translate(0,0) scale(1); }
            50% { transform: translate(30px,-20px) scale(1.1); }
          }
          .animate-blob {
            animation: blob 10s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default ChooseUs;
