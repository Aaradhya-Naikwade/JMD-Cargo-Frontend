// import { useState } from "react";
// import { loginAdmin } from "../services/api";
// import { useNavigate } from "react-router-dom";
// import "./adminLogin.css";

// export default function AdminLogin() {

//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {

//     const res =
//       await loginAdmin({
//         email,
//         password
//       });

//     if (res.success) {

//       localStorage.setItem(
//         "adminToken",
//         res.token
//       );

//       navigate("/admin/dashboard");

//     } else {

//       alert(res.message);

//     }
//   };

//   return (
//     <div className="admin-login-container">

//       <div className="admin-login-card">

//         <div className="admin-login-title">
//           JMD Cargo Admin
//         </div>

//         <div className="admin-login-subtitle">
//           Sign in to continue
//         </div>

//         <input
//           className="admin-login-input"
//           type="email"
//           placeholder="Admin Email"
//           value={email}
//           onChange={(e) =>
//             setEmail(e.target.value)
//           }
//         />

//         <input
//           className="admin-login-input"
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) =>
//             setPassword(e.target.value)
//           }
//         />

//         <button
//           className="admin-login-button"
//           onClick={handleLogin}
//         >
//           Login
//         </button>

//         <div className="admin-login-footer">
//           JMD Cargo
//         </div>

//       </div>

//     </div>
//   );
// }














import { useState } from "react";
import { loginAdmin } from "../services/api";
import { useNavigate } from "react-router-dom";

import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  LogIn,
  Truck
} from "lucide-react";

import "./adminLogin.css";

export default function AdminLogin() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {

      setLoading(true);

      const res = await loginAdmin({
        email,
        password
      });

      setLoading(false);

      if (res.success) {

        localStorage.setItem(
          "adminToken",
          res.token
        );

        navigate("/admin/dashboard");

      } else {

        alert(res.message);

      }

    } catch (error) {

      setLoading(false);

      alert("Login failed");

    }

  };

  return (

    <div className="admin-login-container">

      <div className="admin-login-card">

        {/* Logo */}
        <div className="admin-login-logo">
          <Truck size={32} color="#b21f2d" />
          <span>JMD Cargo</span>
        </div>

        {/* Title */}
        <div className="admin-login-title">
          Admin Login
        </div>

        <div className="admin-login-subtitle">
          Sign in to access admin dashboard
        </div>


        {/* Email Input */}
        <div className="input-group">

          <Mail
            size={18}
            className="input-icon"
          />

          <input
            type="email"
            placeholder="Enter admin email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

        </div>


        {/* Password Input */}
        <div className="input-group">

          <Lock
            size={18}
            className="input-icon"
          />

          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            placeholder="Enter password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <div
            className="password-toggle"
            onClick={() =>
              setShowPassword(!showPassword)
            }
          >

            {
              showPassword
                ? <EyeOff size={18} />
                : <Eye size={18} />
            }

          </div>

        </div>


        {/* Login Button */}
        <button
          className="admin-login-button"
          onClick={handleLogin}
          disabled={loading}
        >

          {
            loading
              ? "Signing in..."
              :
              <>
                <LogIn size={18} />
                Login
              </>
          }

        </button>


        {/* Footer */}
        <div className="admin-login-footer">
          © 2026 JMD Cargo. All rights reserved.
        </div>

      </div>

    </div>

  );

}
