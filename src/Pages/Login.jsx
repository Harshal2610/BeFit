import { useState } from "react";
import PageNav from "../components/PageNav";
import styles from "./Login.module.css";
import { useDetails } from "../contexts/DetailsContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { detail } = useDetails();
  const navigate = useNavigate();
  console.log(detail);

  function handelSubmit(e) {
    e.preventDefault();
    if (email === detail.email && password === detail.password)
      navigate("/app");
    else {
      alert("Incorrect Email or Password");
    }
  }

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form} onSubmit={handelSubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Email...."
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password...."
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <button className={styles.btn}>Login</button>
        </div>
      </form>
    </main>
  );
}

export default Login;
