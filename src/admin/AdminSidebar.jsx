// import { Link } from "react-router-dom";
// import "./admin.css";

// export default function AdminSidebar() {
//   return (
//     <div className="admin-sidebar">

//       <h2>JMD Cargo Admin</h2>

//       <Link to="/admin/dashboard">Dashboard</Link>

//       <Link to="/admin/create">Create Consignment</Link>

//       <Link to="/admin/consignments">View Consignments</Link>

//       <Link to="/admin/login">Logout</Link>

//     </div>
//   );
// }







import { Link, useLocation, useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  PlusSquare,
  Package,
  LogOut,
  Truck
} from "lucide-react";

import "./admin.css";

export default function AdminSidebar() {

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("adminToken");

    navigate("/admin/login");

  };

  const menu = [

    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: LayoutDashboard
    },

    {
      name: "Create Consignment",
      path: "/admin/create",
      icon: PlusSquare
    },

    {
      name: "View Consignments",
      path: "/admin/consignments",
      icon: Package
    }

  ];

  return (

    <div className="admin-sidebar">

      {/* Logo */}
      <div className="admin-sidebar-logo">

        <Truck size={26} color="#ffffff" />

        <span>JMD Cargo Admin</span>

      </div>


      {/* Menu */}
      <div className="admin-sidebar-menu">

        {

          menu.map((item) => {

            const Icon = item.icon;

            const active =
              location.pathname === item.path;

            return (

              <Link
                key={item.path}
                to={item.path}
                className={
                  active
                    ? "admin-sidebar-link active"
                    : "admin-sidebar-link"
                }
              >

                <Icon size={18} />

                {item.name}

              </Link>

            );

          })

        }


        {/* Logout */}

        <div
          className="admin-sidebar-link logout"
          onClick={handleLogout}
        >

          <LogOut size={18} />

          Logout

        </div>

      </div>

    </div>

  );

}
