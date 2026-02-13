// import { useLocation } from "react-router-dom";

// const TermsAndConditions = () => {
//   const location = useLocation();
//   const showHero = location.pathname === "/terms";

//   return (
//     <section className="bg-[#f6f7fb] overflow-hidden">
//       {/* HERO */}
//       {showHero && (
//         <div className="relative h-[45vh] flex items-center justify-center">
//           <div className="absolute inset-0 bg-gradient-to-r from-[#140826] via-[#271a3b] to-[#140826]" />
//           <div className="absolute inset-0 bg-black/40" />

//           <h1 className="relative z-10 text-white text-4xl sm:text-5xl font-extrabold animate-fadeIn">
//             Terms & Conditions
//           </h1>
//         </div>
//       )}

//       {/* CONTENT */}
//       <div className="max-w-6xl mx-auto px-4 py-16 animate-slideUp">
//         <p className="text-[#b21f2d] font-semibold tracking-widest mb-3">
//           LEGAL INFORMATION
//         </p>

//         <h2 className="text-3xl sm:text-4xl font-extrabold text-[#140826] mb-8">
//           Terms and Conditions
//         </h2>

//         <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 space-y-10">
//           <Section
//             title="1. The Way Bill"
//             content={[
//               "The ANS EXPRESS way bill is non-negotiable and the shipper acknowledges that it has been prepared by the shipper or by ANS EXPRESS on behalf of the shipper.",
//               "The responsibility of ANS EXPRESS for a shipment ceases when the consignee acknowledges receipt by signature.",
//               "All shipments under the way bill are carried at Owner’s risk.",
//             ]}
//           />

//           <Section
//             title="2. Shipper’s Obligation & Acknowledgement"
//             content={[
//               "Shipper / Consignee authorizes ANS EXPRESS India to carry out Customs clearance on their behalf.",
//               "The shipper warrants lawful ownership and correct declaration of goods.",
//               "Packing of shipment is solely the responsibility of the shipper.",
//               "ANS EXPRESS may hold shipments for a maximum of 10 days; thereafter it may destroy the shipment without notice.",
//             ]}
//           />

//           <Section
//             title="3. Fees & Payment"
//             content={[
//               "All bookings are strictly prepaid; no credit terms apply.",
//               "Duties, taxes and legal compliances are the responsibility of the consignee unless booked in DDP mode.",
//               "Invoices are raised thrice a month (10th, 20th & month end).",
//               "Refunds (if applicable) are processed within 7 working days.",
//             ]}
//           />

//           <Section
//             title="4. Right of Inspection"
//             content={[
//               "ANS EXPRESS reserves the right to inspect any shipment.",
//               "Shipments not conforming to these terms may be refused without reason.",
//             ]}
//           />

//           <Section
//             title="5. Insurance"
//             content={[
//               "Shipment insurance may be arranged by the shipper at their own cost.",
//             ]}
//           />

//           <Section
//             title="6. Octroi / Local Taxes"
//             content={[
//               "All applicable Octroi, Sales Tax or Duties shall be payable by the consignee.",
//               "ANS EXPRESS reserves the right of lien until all dues are cleared.",
//             ]}
//           />

//           <Section
//             title="7. Chargeable Weight"
//             content={[
//               "Shipments are charged on the higher of actual or volumetric weight.",
//               "Volumetric weight is calculated as per applicable standards.",
//             ]}
//           />

//           <Section
//             title="8. Lien on Goods"
//             content={[
//               "ANS EXPRESS holds lien on goods for freight, customs, taxes and charges.",
//               "Goods may be auctioned or destroyed if dues remain unpaid for 10 days.",
//             ]}
//           />

//           <Section
//             title="9. Limitation of Liability"
//             content={[
//               "Maximum liability is limited to the lowest of Rs.1000/-, actual loss, or declared value.",
//               "Overall liability shall not exceed Rs.5000/- per shipment.",
//             ]}
//           />

//           <Section
//             title="10. Consequential Damages"
//             content={[
//               "ANS EXPRESS shall not be liable for indirect or consequential losses including loss of profits or markets.",
//             ]}
//           />

//           <Section
//             title="11. Liabilities Not Assumed"
//             content={[
//               "No liability for delays due to force majeure, strikes, customs actions or airline schedules.",
//               "No liability for electrical or magnetic damage to media.",
//             ]}
//           />

//           <Section
//             title="12. Claims"
//             content={[
//               "Claims must be submitted in writing within 15 days of shipment acceptance.",
//               "No claims will be entertained until all dues are paid.",
//             ]}
//           />

//           <Section
//             title="13. Materials Accepted for Carriage"
//             content={[
//               "Restricted, prohibited or dangerous goods are not accepted unless agreed in writing.",
//               "A detailed list is available on request.",
//             ]}
//           />

//           <div className="pt-6 border-t text-sm text-gray-600">
//             <strong className="text-[#0c0516]">
//               NOTE:
//             </strong>{" "}
//             All disputes & claims are subject to Delhi Jurisdiction only.
//           </div>
//         </div>
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
//             animation: slideUp 1s ease forwards;
//           }
//         `}
//       </style>
//     </section>
//   );
// };

// const Section = ({ title, content }) => (
//   <div className="animate-fadeIn">
//     <h3 className="text-xl font-bold text-[#090411] mb-3">{title}</h3>
//     <ul className="space-y-2 text-gray-600 text-sm leading-relaxed list-disc pl-5">
//       {content.map((item, i) => (
//         <li key={i}>{item}</li>
//       ))}
//     </ul>
//   </div>
// );

// export default TermsAndConditions;










import { useLocation } from "react-router-dom";

const TermsAndConditions = () => {
  const location = useLocation();
  const showHero = location.pathname === "/terms";

  return (
    <section className="bg-[#f6f7fb] overflow-hidden">
      {/* HERO */}
      {showHero && (
        <div className="relative h-[45vh] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-[#140826] via-[#271a3b] to-[#140826]" />
          <div className="absolute inset-0 bg-black/40" />

          <h1 className="relative z-10 text-white text-4xl sm:text-5xl font-extrabold animate-fadeIn">
            Terms & Conditions
          </h1>
        </div>
      )}

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-16 animate-slideUp">
        <p className="text-[#b21f2d] font-semibold tracking-widest mb-3">
          COMPANY POLICIES
        </p>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#140826] mb-8">
          Terms of Service
        </h2>

        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 space-y-10">
          <Section
            title="1. Shipping Agreement"
            content={[
              "By booking a shipment with our company, the customer agrees to all applicable service terms and conditions.",
              "The shipping label or receipt serves as proof of contract between the sender and the company.",
              "All shipments are transported subject to operational guidelines and safety regulations.",
            ]}
          />

          <Section
            title="2. Customer Responsibilities"
            content={[
              "The sender must provide accurate shipment details including weight, value, and description of goods.",
              "The sender confirms that the goods are legally owned and permitted for transportation.",
              "Proper packaging is the sole responsibility of the sender to ensure safe delivery.",
              "Incorrect or incomplete information may result in delays or additional charges.",
            ]}
          />

          <Section
            title="3. Pricing & Payments"
            content={[
              "Shipping charges must be paid in advance unless otherwise agreed in writing.",
              "Additional charges such as duties, taxes, or remote area fees may apply.",
              "All rates are calculated based on actual or volumetric weight, whichever is higher.",
              "Refunds, if approved, will be processed within a reasonable business period.",
            ]}
          />

          <Section
            title="4. Inspection Rights"
            content={[
              "The company reserves the right to inspect any shipment for safety or regulatory compliance.",
              "Shipments that violate transportation policies may be refused or returned.",
            ]}
          />

          <Section
            title="5. Insurance Coverage"
            content={[
              "Customers may request shipment insurance at the time of booking for additional protection.",
              "Without insurance, liability will be limited as per company policy.",
            ]}
          />

          <Section
            title="6. Taxes & Government Charges"
            content={[
              "Any applicable government duties, customs fees, or local taxes must be paid by the recipient unless prepaid.",
              "The company may hold goods until all outstanding charges are cleared.",
            ]}
          />

          <Section
            title="7. Weight Calculation"
            content={[
              "Shipping cost is determined by comparing actual weight and volumetric weight.",
              "Volumetric weight is calculated using standard industry formulas.",
            ]}
          />

          <Section
            title="8. Holding & Disposal of Goods"
            content={[
              "If shipments remain unclaimed, the company may store them for a limited time.",
              "After the holding period, goods may be returned, auctioned, or disposed of as per policy.",
            ]}
          />

          <Section
            title="9. Limitation of Liability"
            content={[
              "The company’s liability for loss or damage is limited to the declared value or standard compensation policy.",
              "Compensation will not exceed the maximum limit defined under company guidelines.",
            ]}
          />

          <Section
            title="10. Indirect Loss"
            content={[
              "The company shall not be responsible for indirect or consequential damages such as business loss or delay penalties.",
            ]}
          />

          <Section
            title="11. Delays Beyond Control"
            content={[
              "The company is not liable for delays caused by weather conditions, strikes, customs clearance, or other unforeseen events.",
              "Delivery timelines are estimates and not guaranteed unless explicitly stated.",
            ]}
          />

          <Section
            title="12. Claims & Disputes"
            content={[
              "All claims for loss or damage must be reported within the specified claim period.",
              "Claims will only be processed after verification and clearance of outstanding dues.",
            ]}
          />

          <Section
            title="13. Prohibited Items"
            content={[
              "Hazardous, illegal, or restricted items are not accepted for shipment.",
              "Customers must review the prohibited items list before booking a shipment.",
            ]}
          />

          <div className="pt-6 border-t text-sm text-gray-600">
            <strong className="text-[#0c0516]">
              NOTE:
            </strong>{" "}
            All disputes shall be subject to the jurisdiction of the registered office location of the company.
          </div>
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
        `}
      </style>
    </section>
  );
};

const Section = ({ title, content }) => (
  <div className="animate-fadeIn">
    <h3 className="text-xl font-bold text-[#090411] mb-3">{title}</h3>
    <ul className="space-y-2 text-gray-600 text-sm leading-relaxed list-disc pl-5">
      {content.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
);

export default TermsAndConditions;
