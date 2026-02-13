import { motion } from "framer-motion";
import { FiDownload, FiFileText, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import image19 from "../../assets/express-images/image19.jpg";

const documents = [
  { name: "Annexure A", file: "annexure-a.xls" },
  { name: "Commercial Invoice", file: "invoice1.xls" },
  { name: "Packing List", file: "packing-list.xls" },
  { name: "Invoice Copy", file: "invoice2.xls" },
  { name: "Footwear Declaration", file: "footwear-declaration.doc" },
  { name: "US Checklist", file: "us-checklist.xls" },
  { name: "Quota Charge Statement", file: "quota-charge.xls" },
  { name: "GR Waiver Form (Free Trade)", file: "gr-waiver-sample.xls" },
  { name: "SDF Form", file: "sdf-form.xls" },
  { name: "Annexure I for Drawback", file: "annexure-drawback.xls" },
  { name: "GR Waiver (Repair & Return)", file: "gr-waiver-return.xls" },
  { name: "Indemnity", file: "indemnity.doc" },
  { name: "MOP Affidavit", file: "mop-affidavit.doc" },
  { name: "Appendix IV for Drawback", file: "appendix-iv.xls" },
  { name: "Multiple Country Declaration", file: "multiple-country.xls" },
  { name: "Bank Letter", file: "bank-letter.doc" },
  { name: "Negative Declaration", file: "negative-declaration.xls" },
  { name: "Biological", file: "biological.doc" },
  { name: "Non-DG Declaration", file: "non-dg.doc" },
];

const resources = [
  { name: "Know Your Customer (KYC)", path: "/resource/kyc" },
  { name: "Metric Conversion", path: "/resource/conversion" },
  { name: "Currency Calculator", path: "/resource/exchange" },
  { name: "Document Download", path: "/resource/download" },
];

const DocumentDownload = () => {
  return (
    <section className="overflow-hidden bg-[#f6f8f7]">
      {/* HERO */}
      <div className="relative h-[45vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={image19}
            alt="banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[#140826]/60" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4 text-white"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            Document <span className="text-[#b21f2d]">Download</span>
          </h1>
          <p className="max-w-3xl mx-auto text-white/90">
            Easily download all required shipping and compliance documents.
          </p>
        </motion.div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-4 gap-14">
        {/* DOCUMENT LIST */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-3"
        >
          <h2 className="text-3xl font-extrabold mb-10 text-[#b21f2d]">
            Other Documents
          </h2>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <FiFileText className="text-2xl text-[#0e061a]" />
                  <h3 className="font-semibold text-[#0a0413] text-sm">
                    {doc.name}
                  </h3>
                </div>

                {/* ✅ FIXED DOWNLOAD LINK */}
                <a
                  href={`/documents/${doc.file}`}
                  download
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0c0516] hover:text-[#b21f2d]"
                >
                  Download <FiDownload />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RESOURCES */}
        <motion.div className="bg-white rounded-2xl shadow-lg p-6 h-fit border">
          <h3 className="text-xl font-bold mb-6 text-[#b21f2d]">Resources</h3>

          <ul className="space-y-4">
            {resources.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="flex items-center justify-between px-4 py-3 bg-[#f6f8f7] rounded-lg font-medium text-gray-700 hover:bg-[#b21f2d] hover:text-white transition"
                >
                  {item.name}
                  <FiArrowRight />
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default DocumentDownload;
