// import { FiEdit3, FiLayers, FiTruck } from "react-icons/fi";
// import image7 from "../assets/express-images/image7.jpg";

// const steps = [
//   {
//     id: "01",
//     title: "Enter Shipment Details",
//     desc: "Provide shipment information including weight, size, and destination.",
//     icon: <FiEdit3 size={30} />,
//   },
//   {
//     id: "02",
//     title: "Choose Your Service",
//     desc: "Select air, sea, or road freight based on your delivery needs.",
//     icon: <FiLayers size={30} />,
//   },
//   {
//     id: "03",
//     title: "Ready To Go Your Goods",
//     desc: "Your shipment is prepared, dispatched, and tracked securely.",
//     icon: <FiTruck size={30} />,
//   },
// ];

// const WorkProcess = () => {
//   return (
//     <section className="bg-[#f6f7fb] py-20 overflow-hidden">
//       {/* HEADER */}
//       <div className="text-center mb-16 px-4 animate-fadeIn">
//         <p className="text-[#b21f2d] font-semibold tracking-widest mb-3">
//           WORK PROCESS
//         </p>

//         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#140826]">
//           Easy 3 Working Steps
//         </h2>

//         <p className="text-gray-600 max-w-2xl mx-auto mt-4">
//           Simple, fast, and transparent logistics process to move your goods
//           safely across the globe.
//         </p>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
//         {/* IMAGE */}
//         <div className="relative animate-slideLeft">
//           <div className="h-[420px] rounded-3xl bg-gradient-to-br from-[#140826] to-[#b21f2d] shadow-2xl">
//             <img
//               src={image7}
//               className="w-full h-full object-cover rounded-3xl"
//               alt=""
//             />
//           </div>
//         </div>

//         {/* STEPS */}
// {/* STEPS */}
// <div className="space-y-8 perspective-[1200px]">
//   {steps.map((step, index) => (
//     <div
//       key={step.id}
//       className="
//         group relative flex gap-5 items-start
//         p-6 rounded-2xl bg-white
//         border border-gray-100
//         transition-all duration-700 ease-out
//         hover:-translate-y-4
//         hover:shadow-[0_35px_70px_-30px_rgba(0,0,0,0.45)]
//         hover:[transform:rotateX(6deg)_rotateY(-6deg)]
//         overflow-hidden
//       "
//     >
//       {/* GLOW LAYER */}
//       <div
//         className="
//           pointer-events-none absolute -inset-20
//           opacity-0 group-hover:opacity-100
//           transition duration-700
//           bg-[radial-gradient(circle_at_30%_30%,rgba(178,31,45,0.25),transparent_60%)]
//         "
//       />

//       {/* ICON */}
//       <div
//         className="
//           relative z-10 shrink-0
//           w-14 h-14 sm:w-16 sm:h-16 rounded-xl
//           flex items-center justify-center
//           bg-[#b21f2d15] text-[#b21f2d]
//           transition-all duration-700
//           group-hover:bg-[#b21f2d]
//           group-hover:text-white
//           group-hover:-translate-y-2
//           group-hover:scale-110
//         "
//       >
//         {step.icon}
//       </div>

//       {/* CONTENT */}
//       <div className="relative z-10">
//         <span className="text-sm font-bold text-[#b21f2d]">
//           STEP {step.id}
//         </span>

//         <h3
//           className="
//             text-xl font-bold mt-1 mb-2 text-[#140826]
//             transition-all duration-500
//             group-hover:-translate-y-1
//           "
//         >
//           {step.title}
//         </h3>

//         <p
//           className="
//             text-gray-600 text-sm leading-relaxed
//             transition-all duration-500
//             group-hover:translate-y-1
//           "
//         >
//           {step.desc}
//         </p>
//       </div>

//       {/* BORDER */}
//       <span
//         className="
//           absolute inset-0 rounded-2xl
//           opacity-0 group-hover:opacity-100
//           transition duration-700
//           ring-1 ring-[#b21f2d]/30
//         "
//       />
//     </div>
//   ))}
// </div>

//       </div>

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
//             animation: slideUp 0.9s ease forwards;
//           }

//           @keyframes slideLeft {
//             from { opacity: 0; transform: translateX(-50px); }
//             to { opacity: 1; transform: translateX(0); }
//           }
//           .animate-slideLeft {
//             animation: slideLeft 1s ease forwards;
//           }

//           /* MOBILE ICON ANIMATION */
//           @keyframes iconFloat {
//             0%,100% { transform: translateY(0); }
//             50% { transform: translateY(-6px); }
//           }
//           .animate-iconFloat {
//             animation: iconFloat 2.5s ease-in-out infinite;
//           }
//         `}
//       </style>
//     </section>
//   );
// };

// export default WorkProcess;






import { FiEdit3, FiLayers, FiTruck } from "react-icons/fi";
import image7 from "../assets/express-images/image7.jpg";

const steps = [
  {
    id: "01",
    title: "Submit Your Shipping Info",
    desc: "Enter complete cargo details such as dimensions, quantity, and delivery location.",
    icon: <FiEdit3 size={30} />,
  },
  {
    id: "02",
    title: "Select Preferred Transport Mode",
    desc: "Choose the most suitable freight option based on urgency and budget.",
    icon: <FiLayers size={30} />,
  },
  {
    id: "03",
    title: "Dispatch & Real-Time Tracking",
    desc: "Your shipment is securely handled, shipped on time, and monitored until delivery.",
    icon: <FiTruck size={30} />,
  },
];

const WorkProcess = () => {
  return (
    <section className="bg-[#f6f7fb] py-20 overflow-hidden">
      {/* HEADER */}
      <div className="text-center mb-16 px-4 animate-fadeIn">
        <p className="text-[#b21f2d] font-semibold tracking-widest mb-3">
          HOW IT WORKS
        </p>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#140826]">
          Simple & Efficient Process
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          A streamlined workflow designed to ensure smooth coordination,
          secure handling, and timely delivery of every shipment.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        {/* IMAGE */}
        <div className="relative animate-slideLeft">
          <div className="h-[420px] rounded-3xl bg-gradient-to-br from-[#140826] to-[#b21f2d] shadow-2xl">
            <img
              src={image7}
              className="w-full h-full object-cover rounded-3xl"
              alt=""
            />
          </div>
        </div>

        {/* STEPS */}
        <div className="space-y-8 perspective-[1200px]">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="
                group relative flex gap-5 items-start
                p-6 rounded-2xl bg-white
                border border-gray-100
                transition-all duration-700 ease-out
                hover:-translate-y-4
                hover:shadow-[0_35px_70px_-30px_rgba(0,0,0,0.45)]
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

              <div
                className="
                  relative z-10 shrink-0
                  w-14 h-14 sm:w-16 sm:h-16 rounded-xl
                  flex items-center justify-center
                  bg-[#b21f2d15] text-[#b21f2d]
                  transition-all duration-700
                  group-hover:bg-[#b21f2d]
                  group-hover:text-white
                  group-hover:-translate-y-2
                  group-hover:scale-110
                "
              >
                {step.icon}
              </div>

              <div className="relative z-10">
                <span className="text-sm font-bold text-[#b21f2d]">
                  PHASE {step.id}
                </span>

                <h3
                  className="
                    text-xl font-bold mt-1 mb-2 text-[#140826]
                    transition-all duration-500
                    group-hover:-translate-y-1
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    text-gray-600 text-sm leading-relaxed
                    transition-all duration-500
                    group-hover:translate-y-1
                  "
                >
                  {step.desc}
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
            animation: slideUp 0.9s ease forwards;
          }

          @keyframes slideLeft {
            from { opacity: 0; transform: translateX(-50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .animate-slideLeft {
            animation: slideLeft 1s ease forwards;
          }

          @keyframes iconFloat {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }
          .animate-iconFloat {
            animation: iconFloat 2.5s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default WorkProcess;
