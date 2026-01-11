import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("No account found, please register first");
      return;
    }

    if (savedUser.email === email && savedUser.password === password) {
      login(savedUser);
      navigate("/");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-form">
      <h4 className="login-title">Login</h4>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-12 col-12">
            <label>Email Address*</label>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="col-12">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="col-sm-6">
            <div className="check-box d-inline-block ml-0 ml-md-2">
              <input type="checkbox" id="remember_me" />
              <label htmlFor="remember_me">Remember me</label>
            </div>
          </div>

          <div className="col-sm-6 text-start text-sm-end">
            <Link className="text-decoration-none text-dark" to="/register">Register</Link>
          </div>

          <div className="col-md-12">
            <button type="submit" className="register-button">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
