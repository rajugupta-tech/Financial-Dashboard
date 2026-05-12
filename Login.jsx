import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = () => {
    if (email && password) {
      localStorage.setItem("token", "dummy_token");
      alert("Login Success");
      navigate("/dashboard");
    } else {
      alert("Enter email and password");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Login</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br/>
      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} /><br/>
      <button onClick={login}>Login</button>
    </div>
  );
}
