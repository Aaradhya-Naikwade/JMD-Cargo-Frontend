// import { useEffect, useState } from "react";
// import AdminSidebar from "./AdminSidebar";
// import { getConsignments } from "../services/api";
// import "./admin.css";

// export default function AdminDashboard() {

//   const [stats, setStats] = useState({
//     total: 0,
//     active: 0,
//     inactive: 0
//   });

//   useEffect(() => {
//     load();
//   }, []);

//   const load = async () => {

//     const res = await getConsignments();

//     const total = res.consignments.length;

//     const active =
//       res.consignments.filter(
//         c => c.status === "Active"
//       ).length;

//     const inactive =
//       res.consignments.filter(
//         c => c.status === "Inactive"
//       ).length;

//     setStats({
//       total,
//       active,
//       inactive
//     });
//   };

//   return (
//     <div className="admin-container">

//       <AdminSidebar />

//       <div className="admin-content">

//         <div className="admin-header">
//           Dashboard
//         </div>

//         <div className="dashboard-grid">

//           <div className="dashboard-card">
//             <h3>Total</h3>
//             <p>{stats.total}</p>
//           </div>

//           <div className="dashboard-card">
//             <h3>Active</h3>
//             <p>{stats.active}</p>
//           </div>

//           <div className="dashboard-card">
//             <h3>Inactive</h3>
//             <p>{stats.inactive}</p>
//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }






import { useEffect, useState } from "react";
import AdminSidebar from "./AdminSidebar";
import { getConsignments } from "../services/api";

import {
  LayoutDashboard,
  Package,
  CheckCircle,
  XCircle
} from "lucide-react";

import "./admin.css";

export default function AdminDashboard() {

  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    inactive: 0
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {

    try {

      const res = await getConsignments();

      const total = res.consignments.length;

      const active =
        res.consignments.filter(
          c => c.status === "Active"
        ).length;

      const inactive =
        res.consignments.filter(
          c => c.status === "Inactive"
        ).length;

      setStats({
        total,
        active,
        inactive
      });

      setLoading(false);

    } catch {

      setLoading(false);

    }

  };

  return (

    <div className="admin-container">

      <AdminSidebar />

      <div className="admin-content">


        {/* Header */}
        <div className="admin-header">

          <div className="admin-header-left">

            <LayoutDashboard size={22} />

            <span>Dashboard</span>

          </div>

        </div>



        {/* Stats Cards */}

        {
          loading
          ?
          <div className="loading-text">
            Loading dashboard...
          </div>
          :
          <div className="dashboard-grid">


            {/* Total */}
            <div className="dashboard-card">

              <div className="dashboard-card-top">

                <Package
                  size={26}
                  color="#b21f2d"
                />

                <span>Total Consignments</span>

              </div>

              <div className="dashboard-number">
                {stats.total}
              </div>

            </div>



            {/* Active */}
            <div className="dashboard-card">

              <div className="dashboard-card-top">

                <CheckCircle
                  size={26}
                  color="#16a34a"
                />

                <span>Active Consignments</span>

              </div>

              <div className="dashboard-number">
                {stats.active}
              </div>

            </div>



            {/* Inactive */}
            <div className="dashboard-card">

              <div className="dashboard-card-top">

                <XCircle
                  size={26}
                  color="#6b7280"
                />

                <span>Inactive Consignments</span>

              </div>

              <div className="dashboard-number">
                {stats.inactive}
              </div>

            </div>


          </div>
        }


      </div>

    </div>

  );

}
