
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// import {
//   getConsignments,
//   updateConsignmentStatus,
//   deleteConsignment   // ✅ added
// } from "../services/api";

// import AdminSidebar from "./AdminSidebar";
// import "./admin.css";

// export default function ConsignmentList() {

//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);

//   // Filters
//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [courierFilter, setCourierFilter] = useState("All");
//   const [originFilter, setOriginFilter] = useState("All");
//   const [destinationFilter, setDestinationFilter] = useState("All");

//   const navigate = useNavigate();

//   useEffect(() => {
//     loadConsignments();
//   }, []);

//   useEffect(() => {
//     applyFilters();
//   }, [data, search, statusFilter, courierFilter, originFilter, destinationFilter]);

//   // Load consignments
//   const loadConsignments = async () => {

//     try {

//       const res = await getConsignments();

//       if (res.success) {
//         setData(res.consignments);
//         setFilteredData(res.consignments);
//       }

//     } catch (error) {
//       console.error(error);
//       alert("Failed to load consignments");
//     }
//   };

//   // Apply filters
//   const applyFilters = () => {

//     let result = [...data];

//     if (search) {
//       result = result.filter(item =>
//         item.trackingId.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     if (statusFilter !== "All") {
//       result = result.filter(item =>
//         item.status === statusFilter
//       );
//     }

//     if (courierFilter !== "All") {
//       result = result.filter(item =>
//         item.courierCompany === courierFilter
//       );
//     }

//     if (originFilter !== "All") {
//       result = result.filter(item =>
//         item.origin === originFilter
//       );
//     }

//     if (destinationFilter !== "All") {
//       result = result.filter(item =>
//         item.destination === destinationFilter
//       );
//     }

//     setFilteredData(result);
//   };

//   // Toggle Active / Inactive
//   const toggleStatus = async (item) => {

//     try {

//       const newStatus =
//         item.status === "Active"
//           ? "Inactive"
//           : "Active";

//       const res = await updateConsignmentStatus(
//         item._id,
//         newStatus
//       );

//       if (res.success) {
//         alert(`Consignment ${newStatus}`);
//         loadConsignments();
//       }

//     } catch (error) {
//       console.error(error);
//       alert("Status update failed");
//     }
//   };

//   // ✅ DELETE FUNCTION
//   const handleDelete = async (id) => {

//     const confirmDelete =
//       window.confirm(
//         "Are you sure you want to delete this consignment?"
//       );

//     if (!confirmDelete) return;

//     try {

//       const res = await deleteConsignment(id);

//       if (res.success) {
//         alert("Consignment deleted successfully");
//         loadConsignments();
//       } else {
//         alert(res.message);
//       }

//     } catch (error) {
//       console.error(error);
//       alert("Delete failed");
//     }
//   };

//   // Unique filter values
//   const getUnique = (field) => {
//     return ["All", ...new Set(data.map(item => item[field]))];
//   };

//   return (
//     <div className="admin-container">

//       <AdminSidebar />

//       <div className="admin-content">

//         <div className="admin-header">
//           Consignment Management
//         </div>

//         {/* FILTER BAR */}

//         <div className="filter-bar">

//           <input
//             placeholder="Search Tracking ID"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />

//           <select
//             value={statusFilter}
//             onChange={(e) =>
//               setStatusFilter(e.target.value)
//             }
//           >
//             {getUnique("status").map(status => (
//               <option key={status}>
//                 {status}
//               </option>
//             ))}
//           </select>

//           <select
//             value={courierFilter}
//             onChange={(e) =>
//               setCourierFilter(e.target.value)
//             }
//           >
//             {getUnique("courierCompany").map(c => (
//               <option key={c}>
//                 {c}
//               </option>
//             ))}
//           </select>

//           <select
//             value={originFilter}
//             onChange={(e) =>
//               setOriginFilter(e.target.value)
//             }
//           >
//             {getUnique("origin").map(o => (
//               <option key={o}>
//                 {o}
//               </option>
//             ))}
//           </select>

//           <select
//             value={destinationFilter}
//             onChange={(e) =>
//               setDestinationFilter(e.target.value)
//             }
//           >
//             {getUnique("destination").map(d => (
//               <option key={d}>
//                 {d}
//               </option>
//             ))}
//           </select>

//         </div>

//         {/* LIST */}

//         {filteredData.length === 0 && (
//           <div className="card">
//             No consignments found
//           </div>
//         )}

//         {filteredData.map((item) => (

//           <div key={item._id} className="card">

//             <p><strong>Tracking ID:</strong> {item.trackingId}</p>

//             <p><strong>Customer Name:</strong> {item.customerName}</p>

//             <p><strong>Phone:</strong> {item.phone}</p>

//             <p><strong>Origin:</strong> {item.origin}</p>

//             <p><strong>Destination:</strong> {item.destination}</p>

//             <p><strong>Courier:</strong> {item.courierCompany}</p>

//             <p>
//               <strong>Tracking Link:</strong>{" "}
//               <a href={item.courierLink} target="_blank">
//                 Track Shipment
//               </a>
//             </p>

//             <p>
//               <strong>Status:</strong>{" "}
//               <span className={
//                 item.status === "Active"
//                   ? "status-active"
//                   : "status-inactive"
//               }>
//                 {item.status}
//               </span>
//             </p>

//             {/* BUTTONS */}

//             <div style={{ marginTop: "15px" }}>

//               <button
//                 className="btn btn-primary"
//                 onClick={() =>
//                   navigate(`/admin/edit/${item._id}`)
//                 }
//               >
//                 Edit
//               </button>

//               &nbsp;&nbsp;

//               <button
//                 className={
//                   item.status === "Active"
//                     ? "btn btn-danger"
//                     : "btn btn-success"
//                 }
//                 onClick={() =>
//                   toggleStatus(item)
//                 }
//               >
//                 {item.status === "Active"
//                   ? "Deactivate"
//                   : "Activate"}
//               </button>

//               &nbsp;&nbsp;

//               {/* ✅ DELETE BUTTON */}
//               <button
//                 className="btn btn-danger"
//                 onClick={() =>
//                   handleDelete(item._id)
//                 }
//               >
//                 Delete
//               </button>

//             </div>

//           </div>

//         ))}

//       </div>

//     </div>
//   );
// }






import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Search,
  Package,
  User,
  Phone,
  MapPin,
  Truck,
  ExternalLink,
  Edit,
  Trash2,
  Power,
  PowerOff,
  Filter
} from "lucide-react";

import {
  getConsignments,
  updateConsignmentStatus,
  deleteConsignment
} from "../services/api";

import AdminSidebar from "./AdminSidebar";
import "./admin.css";

export default function ConsignmentList() {

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [courierFilter, setCourierFilter] = useState("All");
  const [originFilter, setOriginFilter] = useState("All");
  const [destinationFilter, setDestinationFilter] = useState("All");

  const navigate = useNavigate();

  useEffect(() => {
    loadConsignments();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [data, search, statusFilter, courierFilter, originFilter, destinationFilter]);

  const loadConsignments = async () => {
    try {
      const res = await getConsignments();

      if (res.success) {
        setData(res.consignments);
        setFilteredData(res.consignments);
      }

    } catch (error) {
      alert("Failed to load consignments");
    }
  };

  const applyFilters = () => {

    let result = [...data];

    if (search) {
      result = result.filter(item =>
        item.trackingId.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (statusFilter !== "All")
      result = result.filter(item => item.status === statusFilter);

    if (courierFilter !== "All")
      result = result.filter(item => item.courierCompany === courierFilter);

    if (originFilter !== "All")
      result = result.filter(item => item.origin === originFilter);

    if (destinationFilter !== "All")
      result = result.filter(item => item.destination === destinationFilter);

    setFilteredData(result);
  };

  const toggleStatus = async (item) => {

    const newStatus =
      item.status === "Active" ? "Inactive" : "Active";

    const res = await updateConsignmentStatus(
      item._id,
      newStatus
    );

    if (res.success) {
      loadConsignments();
    }
  };

  const handleDelete = async (id) => {

    if (!window.confirm("Delete this consignment?"))
      return;

    const res = await deleteConsignment(id);

    if (res.success)
      loadConsignments();
  };

  const getUnique = (field) => {
    return ["All", ...new Set(data.map(item => item[field]))];
  };

  return (
    <div className="admin-container">

      <AdminSidebar />

      <div className="admin-content">

        {/* HEADER */}

        <div className="page-header">

          <div className="page-title">
            <Package size={28} />
            <h2>Consignment Management</h2>
          </div>

        </div>


        {/* FILTER BAR */}

        <div className="filter-container">

          <div className="search-box">
            <Search size={18} />
            <input
              placeholder="Search Tracking ID..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="filter-group">

            <Filter size={18} />

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              {getUnique("status").map(s =>
                <option key={s}>{s}</option>
              )}
            </select>

            <select
              value={courierFilter}
              onChange={(e) => setCourierFilter(e.target.value)}
            >
              {getUnique("courierCompany").map(c =>
                <option key={c}>{c}</option>
              )}
            </select>

            <select
              value={originFilter}
              onChange={(e) => setOriginFilter(e.target.value)}
            >
              {getUnique("origin").map(o =>
                <option key={o}>{o}</option>
              )}
            </select>

            <select
              value={destinationFilter}
              onChange={(e) => setDestinationFilter(e.target.value)}
            >
              {getUnique("destination").map(d =>
                <option key={d}>{d}</option>
              )}
            </select>

          </div>

        </div>


        {/* LIST */}

        {filteredData.length === 0 && (
          <div className="empty-state">
            <Package size={48} />
            <p>No consignments found</p>
          </div>
        )}


        <div className="card-grid">

          {filteredData.map(item => (

            <div key={item._id} className="consignment-card">

              <div className="card-header">

                <div className="tracking">
                  <Package size={18} />
                  {item.trackingId}
                </div>

                <span className={
                  item.status === "Active"
                    ? "badge active"
                    : "badge inactive"
                }>
                  {item.status}
                </span>

              </div>


              <div className="card-body">

                <p>
                  <User size={16} />
                  {item.customerName}
                </p>

                <p>
                  <Phone size={16} />
                  {item.phone}
                </p>

                <p>
                  <MapPin size={16} />
                  {item.origin} → {item.destination}
                </p>

                <p>
                  <Truck size={16} />
                  {item.courierCompany}
                </p>

                <a
                  href={item.courierLink}
                  target="_blank"
                  className="track-link"
                >
                  <ExternalLink size={16} />
                  Track Shipment
                </a>

              </div>


              <div className="card-actions">

                <button
                  className="btn edit"
                  onClick={() =>
                    navigate(`/admin/edit/${item._id}`)
                  }
                >
                  <Edit size={16} />
                  Edit
                </button>


                <button
                  className={
                    item.status === "Active"
                      ? "btn deactivate"
                      : "btn activate"
                  }
                  onClick={() => toggleStatus(item)}
                >
                  {item.status === "Active"
                    ? <PowerOff size={16} />
                    : <Power size={16} />
                  }

                  {item.status === "Active"
                    ? "Deactivate"
                    : "Activate"}
                </button>


                <button
                  className="btn delete"
                  onClick={() =>
                    handleDelete(item._id)
                  }
                >
                  <Trash2 size={16} />
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}
