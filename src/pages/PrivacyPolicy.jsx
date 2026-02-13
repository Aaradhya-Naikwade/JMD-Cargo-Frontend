import { useLocation } from "react-router-dom";

const PrivacyPolicy = () => {
  const location = useLocation();
  const showHero = location.pathname === "/privacy-policy";

  return (
    <section className="bg-[#f6f7fb] overflow-hidden">
      {/* HERO */}
      {showHero && (
        <div className="relative h-[45vh] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-[#140826] via-[#271a3b] to-[#140826]" />
          <div className="absolute inset-0 bg-black/40" />

          <h1 className="relative z-10 text-white text-4xl sm:text-5xl font-extrabold animate-fadeIn">
            Privacy Policy
          </h1>
        </div>
      )}

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-16 animate-slideUp">
        <p className="text-[#b21f2d] font-semibold tracking-widest mb-3">
          YOUR PRIVACY MATTERS
        </p>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#140826] mb-6">
          Privacy Policy – ANS Express Services
        </h2>

        <p className="text-gray-600 mb-10 max-w-3xl">
          We don’t spam your data. Please read our Privacy Policy carefully to
          understand how we collect, use and protect your information.
        </p>

        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 space-y-10">
          <Section
            title="Introduction"
            content={[
              "This Privacy Policy governs the manner in which ANS Express Services collects, uses, maintains and discloses information collected from users of www.ansexpress.co.in.",
              "This policy applies to the Site and all products and services offered by ANS Express Services.",
            ]}
          />

          <Section
            title="Personal Identification Information"
            content={[
              "We may collect personal identification information when users visit our site, fill out a form or interact with services available on our Site.",
              "Users may visit our Site anonymously.",
              "We collect personal information only if users voluntarily submit such information.",
              "Refusal to provide personal information may prevent users from engaging in certain Site-related activities.",
            ]}
          />

          <Section
            title="Non-Personal Identification Information"
            content={[
              "We may collect non-personal identification information whenever users interact with our Site.",
              "This may include browser type, device information, operating system and Internet service provider details.",
            ]}
          />

          <Section
            title="Web Browser Cookies"
            content={[
              "We do not appreciate or actively use cookies for tracking purposes.",
            ]}
          />

          <Section
            title="How We Use Collected Information"
            content={[
              "ANS Express Services may collect and use personal information to personalize user experience.",
              "Aggregated information helps us understand how users as a group use our services.",
            ]}
          />

          <Section
            title="How We Protect Your Information"
            content={[
              "We adopt appropriate data collection, storage and processing practices.",
              "Security measures are in place to protect against unauthorized access, alteration or disclosure of personal information.",
            ]}
          />

          <Section
            title="Sharing Your Personal Information"
            content={[
              "We do not sell, trade or rent users’ personal identification information.",
              "Generic aggregated demographic information may be shared with trusted partners for business purposes.",
            ]}
          />

          <Section
            title="Your Acceptance of These Terms"
            content={[
              "By using this Site, you signify your acceptance of this policy.",
              "Continued use of the Site following changes to this policy will be deemed acceptance of those changes.",
            ]}
          />

          <Section
            title="Contacting Us"
            content={[
              "If you have any questions about this Privacy Policy or your dealings with this Site, please contact us at:",
              "Email: csd@ansexpress.com",
            ]}
          />
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
    <h3 className="text-xl font-bold text-[#0c0516] mb-3">{title}</h3>
    <ul className="space-y-2 text-gray-600 text-sm leading-relaxed list-disc pl-5">
      {content.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
);

export default PrivacyPolicy;
