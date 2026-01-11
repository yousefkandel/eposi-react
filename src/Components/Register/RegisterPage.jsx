import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.password
    ) {
      alert("Please fill all fields");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify({
        name: `${form.firstName} ${form.lastName}`,
        email: form.email,
        password: form.password,
      })
    );

    navigate("/");
  };

  return (
    <div className="login-form">
      <h4 className="login-title">Register</h4>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 col-12 mb-20">
            <label>First Name</label>
            <input
              name="firstName"
              type="text"
              placeholder="First Name"
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 col-12 mb-20">
            <label>Last Name</label>
            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              onChange={handleChange}
            />
          </div>

          <div className="col-md-12 mb-20">
            <label>Email Address*</label>
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-20">
            <label>Password</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-20">
            <label>Confirm Password</label>
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              onChange={handleChange}
            />
          </div>

          <div className="col-12">
            <button type="submit" className="register-button mt-0">
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
