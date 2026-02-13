// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import {
//   getConsignmentById,
//   updateConsignment
// } from "../services/api";

// import AdminSidebar from "./AdminSidebar";
// import "./admin.css";

// export default function EditConsignment() {

//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [form, setForm] = useState(null);

//   useEffect(() => {
//     load();
//   }, []);

//   const load = async () => {
//     const data = await getConsignmentById(id);
//     setForm(data);
//   };

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async () => {
//     await updateConsignment(id, form);

//     alert("Updated successfully");

//     navigate("/admin/consignments");
//   };

//   if (!form) return <div>Loading...</div>;

//   return (
//     <div className="admin-container">

//       <AdminSidebar />

//       <div className="admin-content">

//         <div className="admin-header">
//           Edit Consignment
//         </div>

//         {[
//           "trackingId",
//           "customerName",
//           "phone",
//           "origin",
//           "destination",
//           "courierCompany",
//           "courierLink",
//           "shipmentDate",
//           "expectedDeliveryDate"
//         ].map((field) => (

//           <div key={field}>

//             <input
//               name={field}
//               value={
//                 field.includes("Date")
//                   ? form[field]?.substring(0,10)
//                   : form[field]
//               }
//               type={
//                 field.includes("Date")
//                   ? "date"
//                   : "text"
//               }
//               onChange={handleChange}
//             />

//           </div>

//         ))}

//         <br />

//         <button
//           className="btn btn-primary"
//           onClick={handleSubmit}
//         >
//           Update Consignment
//         </button>

//       </div>

//     </div>
//   );
// }







import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  getConsignmentById,
  updateConsignment
} from "../services/api";

import {
  Package,
  User,
  Phone,
  MapPin,
  Truck,
  ExternalLink,
  Calendar,
  Save
} from "lucide-react";

import AdminSidebar from "./AdminSidebar";
import "./admin.css";

export default function EditConsignment() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    load();
  }, []);


  const load = async () => {

    const data = await getConsignmentById(id);

    setForm(data);

  };


  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };


  const handleSubmit = async () => {

    setLoading(true);

    await updateConsignment(id, form);

    setLoading(false);

    alert("Consignment updated successfully");

    navigate("/admin/consignments");

  };


  if (!form)
    return (
      <div className="admin-container">
        <AdminSidebar />
        <div className="admin-content">
          Loading...
        </div>
      </div>
    );


  const fields = [

    { name: "trackingId", icon: Package, label: "Tracking ID" },

    { name: "customerName", icon: User, label: "Customer Name" },

    { name: "phone", icon: Phone, label: "Phone Number" },

    { name: "origin", icon: MapPin, label: "Origin" },

    { name: "destination", icon: MapPin, label: "Destination" },

    { name: "courierCompany", icon: Truck, label: "Courier Company" },

    { name: "courierLink", icon: ExternalLink, label: "Tracking Link" },

    { name: "shipmentDate", icon: Calendar, label: "Shipment Date", type: "date" },

    { name: "expectedDeliveryDate", icon: Calendar, label: "Expected Delivery Date", type: "date" }

  ];


  return (

    <div className="admin-container">

      <AdminSidebar />


      <div className="admin-content">


        {/* Header */}

        <div className="page-header">

          <div className="page-title">

            <Package size={28} />

            <h2>Edit Consignment</h2>

          </div>

        </div>



        {/* Form Card */}

        <div className="edit-card">


          <div className="edit-grid">

            {fields.map(field => {

              const Icon = field.icon;

              return (

                <div
                  key={field.name}
                  className="edit-field"
                >

                  <label>

                    <Icon size={16} />

                    {field.label}

                  </label>


                  <input

                    name={field.name}

                    type={field.type || "text"}

                    value={
                      field.type === "date"
                        ? form[field.name]?.substring(0,10) || ""
                        : form[field.name] || ""
                    }

                    onChange={handleChange}

                  />

                </div>

              );

            })}

          </div>



          {/* Button */}

          <button
            className="btn save-btn"
            onClick={handleSubmit}
            disabled={loading}
          >

            <Save size={18} />

            {
              loading
                ? "Updating..."
                : "Update Consignment"
            }

          </button>


        </div>


      </div>


    </div>

  );

}
