// import { FiTruck, FiGlobe, FiShield } from "react-icons/fi";
// import { useLocation } from "react-router-dom";
// import image6 from "../assets/express-images/image6.jpg";
// import logo2 from "../assets/express-images/logo2.jpeg";

// const About = () => {
//   const location = useLocation();
//   const showHero = location.pathname === "/about";

//   return (
//     <section className="bg-[#f6f7fb] overflow-hidden">
//       {/* HERO */}
//       {showHero && (
//         <div className="relative h-[45vh] flex items-center justify-center overflow-hidden">
//           <img
//             src={logo2}
//             alt="About background"
//             className="absolute inset-0 w-full h-full object-cover object-center"
//           />

//           <div className="absolute inset-0 bg-gradient-to-r from-[#140826]/80 via-[#140826]/10 to-[#b21f2d]/10" />

//           <h1 className="relative z-10 text-white text-4xl sm:text-5xl font-extrabold tracking-wide animate-fadeIn">
//             About Us
//           </h1>
//         </div>
//       )}

//       {/* CONTENT */}
//       <div
//         className={`max-w-7xl mx-auto px-4 ${
//           showHero ? "py-16" : "py-8"
//         } grid lg:grid-cols-2 gap-12 items-center`}
//       >
//         <div className="animate-slideUp">
//           <p className="text-[#b21f2d] font-semibold tracking-widest mb-3">
//             WHO WE ARE
//           </p>

//           <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-[#140826]">
//             We Provide Fast & Reliable Logistics Solutions
//           </h2>

//           <p className="text-gray-600 leading-relaxed mb-6">
//             We are a professional logistics company offering air, sea, and road
//             freight services across the globe.
//           </p>

//           <p className="text-gray-600 leading-relaxed">
//             With modern technology, expert teams, and trusted partners, we help
//             businesses grow by simplifying transportation.
//           </p>
//         </div>

//         <div className="relative animate-slideUp delay-200">
//           <div className="h-72 sm:h-80 rounded-2xl bg-gradient-to-br from-[#140826] to-[#b21f2d] shadow-2xl" />
//           <img
//             src={image6}
//             alt="About Us"
//             className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg"
//           />
//         </div>
//       </div>

// {/* FEATURES */}
// <div className="bg-white py-16">
//   <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[1200px]">
//     {[
//       {
//         icon: <FiTruck size={30} />,
//         title: "Fast Delivery",
//         desc: "Quick and safe transportation for all types of cargo worldwide.",
//       },
//       {
//         icon: <FiGlobe size={30} />,
//         title: "Global Network",
//         desc: "Connected with trusted partners across multiple countries.",
//       },
//       {
//         icon: <FiShield size={30} />,
//         title: "Secure Service",
//         desc: "Your shipments are protected with strict safety standards.",
//       },
//     ].map((item, i) => (
//       <div
//         key={i}
//         className="
//           group relative bg-white rounded-2xl p-8 text-center
//           border border-gray-100
//           transition-all duration-700 ease-out
//           hover:-translate-y-5
//           hover:shadow-[0_40px_80px_-30px_rgba(0,0,0,0.45)]
//           hover:[transform:rotateX(6deg)_rotateY(-6deg)]
//           overflow-hidden
//         "
//       >
//         {/* GLOW LAYER (same as ChooseUs) */}
//         <div
//           className="
//             pointer-events-none absolute -inset-20
//             opacity-0 group-hover:opacity-100
//             transition duration-700
//             bg-[radial-gradient(circle_at_30%_30%,rgba(178,31,45,0.25),transparent_60%)]
//           "
//         />

//         {/* CONTENT */}
//         <div className="relative z-10">
//           {/* ICON */}
//           <div
//             className="
//               mx-auto mb-5
//               w-16 h-16 rounded-xl
//               flex items-center justify-center
//               text-[#b21f2d]
//               bg-[#b21f2d15]
//               transition-all duration-700
//               group-hover:bg-[#b21f2d]
//               group-hover:text-white
//               group-hover:-translate-y-2
//               group-hover:scale-110
//             "
//           >
//             {item.icon}
//           </div>

//           {/* TITLE */}
//           <h3
//             className="
//               font-bold text-xl mb-2 text-[#140826]
//               transition-all duration-500
//               group-hover:-translate-y-1
//             "
//           >
//             {item.title}
//           </h3>

//           {/* DESC */}
//           <p
//             className="
//               text-gray-600 text-sm
//               transition-all duration-500
//               group-hover:translate-y-1
//             "
//           >
//             {item.desc}
//           </p>
//         </div>

//         {/* BORDER */}
//         <span
//           className="
//             absolute inset-0 rounded-2xl
//             opacity-0 group-hover:opacity-100
//             transition duration-700
//             ring-1 ring-[#b21f2d]/30
//           "
//         />
//       </div>
//     ))}
//   </div>
// </div>


//       {/* ANIMATIONS */}
//       <style>
//         {`
//           @keyframes fadeIn {
//             from { opacity: 0; }
//             to { opacity: 1; }
//           }
//           .animate-fadeIn {
//             animation: fadeIn 1s ease forwards;
//           }

//           @keyframes slideUp {
//             from { opacity: 0; transform: translateY(40px); }
//             to { opacity: 1; transform: translateY(0); }
//           }
//           .animate-slideUp {
//             animation: slideUp 1s ease forwards;
//           }

//           @keyframes scaleIn {
//             from { opacity: 0; transform: scale(0.9); }
//             to { opacity: 1; transform: scale(1); }
//           }
//           .animate-scaleIn {
//             animation: scaleIn 0.8s ease forwards;
//           }

//           @keyframes iconFloat {
//             0%,100% { transform: translateY(0); }
//             50% { transform: translateY(-6px); }
//           }
//           .animate-iconFloat {
//             animation: iconFloat 3s ease-in-out infinite;
//           }
//         `}
//       </style>
//     </section>
//   );
// };

// export default About;





import { FiTruck, FiGlobe, FiShield } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import image6 from "../assets/express-images/image6.jpg";
import logo2 from "../assets/express-images/logo2.jpeg";

const About = () => {
  const location = useLocation();
  const showHero = location.pathname === "/about";

  return (
    <section className="bg-[#f6f7fb] overflow-hidden">
      {/* HERO */}
      {showHero && (
        <div className="relative h-[45vh] flex items-center justify-center overflow-hidden">
          <img
            src={logo2}
            alt="About background"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#140826]/80 via-[#140826]/10 to-[#b21f2d]/10" />

          <h1 className="relative z-10 text-white text-4xl sm:text-5xl font-extrabold tracking-wide animate-fadeIn">
            About Our Company
          </h1>
        </div>
      )}

      {/* CONTENT */}
      <div
        className={`max-w-7xl mx-auto px-4 ${
          showHero ? "py-16" : "py-8"
        } grid lg:grid-cols-2 gap-12 items-center`}
      >
        <div className="animate-slideUp">
          <p className="text-[#b21f2d] font-semibold tracking-widest mb-3">
            OUR STORY
          </p>

          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-[#140826]">
            Delivering Excellence Through Smart Logistics
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            We are a modern logistics and transportation company committed to
            providing dependable freight solutions tailored to business needs.
            Our services cover air, sea, and land transportation with complete
            operational transparency.
          </p>

          <p className="text-gray-600 leading-relaxed">
            By combining advanced technology, experienced professionals, and a
            strong partner network, we simplify complex supply chains and help
            companies move forward with confidence.
          </p>
        </div>

        <div className="relative animate-slideUp delay-200">
          <div className="h-72 sm:h-80 rounded-2xl bg-gradient-to-br from-[#140826] to-[#b21f2d] shadow-2xl" />
          <img
            src={image6}
            alt="About Us"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>

{/* FEATURES */}
<div className="bg-white py-16">
  <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[1200px]">
    {[
      {
        icon: <FiTruck size={30} />,
        title: "Express Operations",
        desc: "Streamlined transportation processes ensuring faster turnaround times.",
      },
      {
        icon: <FiGlobe size={30} />,
        title: "Worldwide Reach",
        desc: "A strong international presence with reliable logistics partners.",
      },
      {
        icon: <FiShield size={30} />,
        title: "Trusted Handling",
        desc: "Strict quality and safety protocols to protect every shipment.",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="
          group relative bg-white rounded-2xl p-8 text-center
          border border-gray-100
          transition-all duration-700 ease-out
          hover:-translate-y-5
          hover:shadow-[0_40px_80px_-30px_rgba(0,0,0,0.45)]
          hover:[transform:rotateX(6deg)_rotateY(-6deg)]
          overflow-hidden
        "
      >
        <div
          className="
            pointer-events-none absolute -inset-20
            opacity-0 group-hover:opacity-100
            transition duration-700
            bg-[radial-gradient(circle_at_30%_30%,rgba(178,31,45,0.25),transparent_60%)]
          "
        />

        <div className="relative z-10">
          <div
            className="
              mx-auto mb-5
              w-16 h-16 rounded-xl
              flex items-center justify-center
              text-[#b21f2d]
              bg-[#b21f2d15]
              transition-all duration-700
              group-hover:bg-[#b21f2d]
              group-hover:text-white
              group-hover:-translate-y-2
              group-hover:scale-110
            "
          >
            {item.icon}
          </div>

          <h3
            className="
              font-bold text-xl mb-2 text-[#140826]
              transition-all duration-500
              group-hover:-translate-y-1
            "
          >
            {item.title}
          </h3>

          <p
            className="
              text-gray-600 text-sm
              transition-all duration-500
              group-hover:translate-y-1
            "
          >
            {item.desc}
          </p>
        </div>

        <span
          className="
            absolute inset-0 rounded-2xl
            opacity-0 group-hover:opacity-100
            transition duration-700
            ring-1 ring-[#b21f2d]/30
          "
        />
      </div>
    ))}
  </div>
</div>

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease forwards;
          }

          @keyframes slideUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-slideUp {
            animation: slideUp 1s ease forwards;
          }

          @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-scaleIn {
            animation: scaleIn 0.8s ease forwards;
          }

          @keyframes iconFloat {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }
          .animate-iconFloat {
            animation: iconFloat 3s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default About;
