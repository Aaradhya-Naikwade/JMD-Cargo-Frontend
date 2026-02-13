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
          LEGAL INFORMATION
        </p>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#140826] mb-8">
          Terms and Conditions
        </h2>

        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 space-y-10">
          <Section
            title="1. The Way Bill"
            content={[
              "The ANS EXPRESS way bill is non-negotiable and the shipper acknowledges that it has been prepared by the shipper or by ANS EXPRESS on behalf of the shipper.",
              "The responsibility of ANS EXPRESS for a shipment ceases when the consignee acknowledges receipt by signature.",
              "All shipments under the way bill are carried at Owner’s risk.",
            ]}
          />

          <Section
            title="2. Shipper’s Obligation & Acknowledgement"
            content={[
              "Shipper / Consignee authorizes ANS EXPRESS India to carry out Customs clearance on their behalf.",
              "The shipper warrants lawful ownership and correct declaration of goods.",
              "Packing of shipment is solely the responsibility of the shipper.",
              "ANS EXPRESS may hold shipments for a maximum of 10 days; thereafter it may destroy the shipment without notice.",
            ]}
          />

          <Section
            title="3. Fees & Payment"
            content={[
              "All bookings are strictly prepaid; no credit terms apply.",
              "Duties, taxes and legal compliances are the responsibility of the consignee unless booked in DDP mode.",
              "Invoices are raised thrice a month (10th, 20th & month end).",
              "Refunds (if applicable) are processed within 7 working days.",
            ]}
          />

          <Section
            title="4. Right of Inspection"
            content={[
              "ANS EXPRESS reserves the right to inspect any shipment.",
              "Shipments not conforming to these terms may be refused without reason.",
            ]}
          />

          <Section
            title="5. Insurance"
            content={[
              "Shipment insurance may be arranged by the shipper at their own cost.",
            ]}
          />

          <Section
            title="6. Octroi / Local Taxes"
            content={[
              "All applicable Octroi, Sales Tax or Duties shall be payable by the consignee.",
              "ANS EXPRESS reserves the right of lien until all dues are cleared.",
            ]}
          />

          <Section
            title="7. Chargeable Weight"
            content={[
              "Shipments are charged on the higher of actual or volumetric weight.",
              "Volumetric weight is calculated as per applicable standards.",
            ]}
          />

          <Section
            title="8. Lien on Goods"
            content={[
              "ANS EXPRESS holds lien on goods for freight, customs, taxes and charges.",
              "Goods may be auctioned or destroyed if dues remain unpaid for 10 days.",
            ]}
          />

          <Section
            title="9. Limitation of Liability"
            content={[
              "Maximum liability is limited to the lowest of Rs.1000/-, actual loss, or declared value.",
              "Overall liability shall not exceed Rs.5000/- per shipment.",
            ]}
          />

          <Section
            title="10. Consequential Damages"
            content={[
              "ANS EXPRESS shall not be liable for indirect or consequential losses including loss of profits or markets.",
            ]}
          />

          <Section
            title="11. Liabilities Not Assumed"
            content={[
              "No liability for delays due to force majeure, strikes, customs actions or airline schedules.",
              "No liability for electrical or magnetic damage to media.",
            ]}
          />

          <Section
            title="12. Claims"
            content={[
              "Claims must be submitted in writing within 15 days of shipment acceptance.",
              "No claims will be entertained until all dues are paid.",
            ]}
          />

          <Section
            title="13. Materials Accepted for Carriage"
            content={[
              "Restricted, prohibited or dangerous goods are not accepted unless agreed in writing.",
              "A detailed list is available on request.",
            ]}
          />

          <div className="pt-6 border-t text-sm text-gray-600">
            <strong className="text-[#0c0516]">
              NOTE:
            </strong>{" "}
            All disputes & claims are subject to Delhi Jurisdiction only.
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
