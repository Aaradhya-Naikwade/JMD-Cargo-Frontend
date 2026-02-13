// import { useState } from "react";
// import AdminSidebar from "./AdminSidebar";
// import { createConsignment } from "../services/api";
// import "./admin.css";

// export default function CreateConsignment() {

//   const [form, setForm] = useState({
//     trackingId: "",
//     customerName: "",
//     phone: "",
//     origin: "",
//     destination: "",
//     courierCompany: "",
//     courierLink: "",
//     shipmentDate: "",
//     expectedDeliveryDate: "",
//     status: "Active"
//   });

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async () => {

//     const res = await createConsignment(form);

//     if (res.success) {
//       alert("Consignment Created");

//       setForm({
//         trackingId: "",
//         customerName: "",
//         phone: "",
//         origin: "",
//         destination: "",
//         courierCompany: "",
//         courierLink: "",
//         shipmentDate: "",
//         expectedDeliveryDate: "",
//         status: "Active"
//       });

//     } else {
//       alert(res.message);
//     }
//   };

//   return (
//     <div className="admin-container">

//       <AdminSidebar />

//       <div className="admin-content">

//         <div className="admin-header">
//           Create Consignment
//         </div>

//         <div className="form-container">

//           <input
//             name="trackingId"
//             placeholder="Tracking ID"
//             value={form.trackingId}
//             onChange={handleChange}
//           />

//           <input
//             name="customerName"
//             placeholder="Customer Name"
//             value={form.customerName}
//             onChange={handleChange}
//           />

//           <input
//             name="phone"
//             placeholder="Phone Number"
//             value={form.phone}
//             onChange={handleChange}
//           />

//           <input
//             name="origin"
//             placeholder="Origin"
//             value={form.origin}
//             onChange={handleChange}
//           />

//           <input
//             name="destination"
//             placeholder="Destination"
//             value={form.destination}
//             onChange={handleChange}
//           />

//           <input
//             name="courierCompany"
//             placeholder="Courier Company"
//             value={form.courierCompany}
//             onChange={handleChange}
//           />

//           <input
//             name="courierLink"
//             placeholder="Courier Tracking Link"
//             value={form.courierLink}
//             onChange={handleChange}
//           />

//           <label>Shipment Date</label>

//           <input
//             type="date"
//             name="shipmentDate"
//             value={form.shipmentDate}
//             onChange={handleChange}
//           />

//           <label>Expected Delivery Date</label>

//           <input
//             type="date"
//             name="expectedDeliveryDate"
//             value={form.expectedDeliveryDate}
//             onChange={handleChange}
//           />

//           <label>Status</label>

//           <select
//             name="status"
//             value={form.status}
//             onChange={handleChange}
//           >
//             <option value="Active">Active</option>
//             <option value="Inactive">Inactive</option>
//           </select>

//           <button
//             className="btn btn-primary"
//             onClick={handleSubmit}
//           >
//             Create Consignment
//           </button>

//         </div>

//       </div>

//     </div>
//   );
// }







import { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import { createConsignment } from "../services/api";

import {
    PlusSquare,
    Package,
    User,
    Phone,
    MapPin,
    Truck,
    Link as LinkIcon,
    Calendar,
    CheckCircle
} from "lucide-react";

import "./admin.css";

export default function CreateConsignment() {

    const [form, setForm] = useState({

        trackingId: "",
        customerName: "",
        phone: "",
        origin: "",
        destination: "",
        courierCompany: "",
        courierLink: "",
        shipmentDate: "",
        expectedDeliveryDate: "",
        status: "Active"

    });

    const [loading, setLoading] = useState(false);


    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };


    const handleSubmit = async () => {

        if (!form.trackingId || !form.customerName) {

            alert("Please fill required fields");
            return;

        }

        try {

            setLoading(true);

            const res = await createConsignment(form);

            setLoading(false);

            if (res.success) {

                alert("Consignment Created Successfully");

                setForm({

                    trackingId: "",
                    customerName: "",
                    phone: "",
                    origin: "",
                    destination: "",
                    courierCompany: "",
                    courierLink: "",
                    shipmentDate: "",
                    expectedDeliveryDate: "",
                    status: "Active"

                });

            } else {

                alert(res.message);

            }

        } catch {

            setLoading(false);
            alert("Error creating consignment");

        }

    };


    return (

        <div className="admin-container">

            <AdminSidebar />


            <div className="admin-content full-height">


                {/* Header */}
                <div className="admin-header">

                    <div className="admin-header-left">

                        <PlusSquare size={22} />

                        <span>Create Consignment</span>

                    </div>

                </div>



                {/* Scroll Area */}
                <div className="form-scroll-area">


                    <div className="form-card">


                        {/* GRID START */}
                        <div className="form-grid">


                            {/* Tracking ID */}
                            <div className="form-group">
                                <label>
                                    <Package size={16} />
                                    Tracking ID
                                </label>

                                <input
                                    name="trackingId"
                                    value={form.trackingId}
                                    onChange={handleChange}
                                    placeholder="Enter tracking ID"
                                />
                            </div>



                            {/* Customer Name */}
                            <div className="form-group">
                                <label>
                                    <User size={16} />
                                    Customer Name
                                </label>

                                <input
                                    name="customerName"
                                    value={form.customerName}
                                    onChange={handleChange}
                                    placeholder="Enter customer name"
                                />
                            </div>



                            {/* Phone */}
                            <div className="form-group">
                                <label>
                                    <Phone size={16} />
                                    Phone Number
                                </label>

                                <input
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="Enter phone"
                                />
                            </div>



                            {/* Origin */}
                            <div className="form-group">
                                <label>
                                    <MapPin size={16} />
                                    Origin
                                </label>

                                <input
                                    name="origin"
                                    value={form.origin}
                                    onChange={handleChange}
                                    placeholder="Enter origin"
                                />
                            </div>



                            {/* Destination */}
                            <div className="form-group">
                                <label>
                                    <MapPin size={16} />
                                    Destination
                                </label>

                                <input
                                    name="destination"
                                    value={form.destination}
                                    onChange={handleChange}
                                    placeholder="Enter destination"
                                />
                            </div>



                            {/* Courier Company */}
                            <div className="form-group">
                                <label>
                                    <Truck size={16} />
                                    Courier Company
                                </label>

                                <input
                                    name="courierCompany"
                                    value={form.courierCompany}
                                    onChange={handleChange}
                                    placeholder="Enter courier company"
                                />
                            </div>



                            {/* Shipment Date */}
                            <div className="form-group">
                                <label>
                                    <Calendar size={16} />
                                    Shipment Date
                                </label>

                                <input
                                    type="date"
                                    name="shipmentDate"
                                    value={form.shipmentDate}
                                    onChange={handleChange}
                                />
                            </div>



                            {/* Expected Delivery */}
                            <div className="form-group">
                                <label>
                                    <Calendar size={16} />
                                    Expected Delivery Date
                                </label>

                                <input
                                    type="date"
                                    name="expectedDeliveryDate"
                                    value={form.expectedDeliveryDate}
                                    onChange={handleChange}
                                />
                            </div>



                            {/* Courier Link */}
                            <div className="form-group">
                                <label>
                                    <LinkIcon size={16} />
                                    Courier Link
                                </label>

                                <input
                                    name="courierLink"
                                    value={form.courierLink}
                                    onChange={handleChange}
                                    placeholder="Enter tracking link"
                                />
                            </div>



                            {/* Status */}
                            <div className="form-group">
                                <label>
                                    <CheckCircle size={16} />
                                    Status
                                </label>

                                <select
                                    name="status"
                                    value={form.status}
                                    onChange={handleChange}
                                >

                                    <option value="Active">
                                        Active
                                    </option>

                                    <option value="Inactive">
                                        Inactive
                                    </option>

                                </select>
                            </div>


                        </div>
                        {/* GRID END */}



                        {/* Button */}
                        <button
                            className="btn-primary full-width"
                            onClick={handleSubmit}
                            disabled={loading}
                        >

                            {loading ? "Creating..." : "Create Consignment"}

                        </button>


                    </div>


                </div>


            </div>


        </div>

    );

}
