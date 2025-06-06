// import React from "react";
// import { Link } from "react-router-dom";
// import "./Signup-login.css";

// const preventRefresh = (e) => {
//   e.preventDefault();
// };

// export default function Login() {
//   return (
//     <div className="abc">
//     <div className="wrapper signIn">
//       <div className="form">
//         <div className="heading">LOGIN</div>
//         <form>
//           <div>
//             <label htmlFor="name">Name</label>
//             <input type="text" id="name" placeholder="Enter your name" />
//           </div>
//           <div>
//             <label htmlFor="e-mail">E-Mail</label>
//             <input type="email" id="e-mail" placeholder="Enter you mail" />
//           </div>
//           <button  className="submit" type="submit" onClick={preventRefresh}>
//             Submit
//           </button>
//         </form>
//         <p>
//           Don't have an account ? <Link to="/signup"> Sign In </Link>
//         </p>
//       </div>
//     </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Signup-login.css";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const validate = () => {
    const { email, password } = formData;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      toast.error("Email is required");
      return false;
    }
    if (!emailRegex.test(email)) {
      toast.error("Enter a valid email");
      return false;
    }

    if (!password.trim()) {
      toast.error("Password is required");
      return false;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      toast.success("Login successful!");
      setTimeout(() => {
        navigate("/");
      }, 1500); // delay to show toast
    }
  };

  return (
    <div className="abc">
      <div className="wrapper signIn">
        <div className="form">
          <div className="heading">LOGIN</div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">E-Mail</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <button className="submit" type="submit">
              Submit
            </button>
          </form>

          <p>
            Don't have an account? <Link to="/signup">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
