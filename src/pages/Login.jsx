import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const localStorageKeys = Object.keys(localStorage);
    localStorageKeys.forEach((key) => {
      const user = JSON.parse(localStorage.getItem(key));
      if (user.email === email) {
        if (user.password === password) {
          const userId = key;
          return navigate("/home", { state: { userId } });
        }
      }
    });
  };

  return (
    <form className="register">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        width="150"
        height="60"
        viewBox="0 0 3352.9411764705883 771.4706418923332"
      >
        <g transform="scale(17.647058823529413) translate(10, 10)">
          <defs id="SvgjsDefs2009"></defs>
          <g
            id="SvgjsG2010"
            transform="matrix(1.581111112766806,0,0,1.581111112766806,-2.5561307757706735,-7.905553302036441)"
            fill="#111111"
          >
            <path d="M15.36 5 q0.28 0 0.49 0.21 t0.21 0.49 l0 13.4 q0 0.28 -0.21 0.49 t-0.49 0.21 l-1.52 0 q-0.3 0 -0.5 -0.21 t-0.2 -0.49 l0 -9.04 l-3.7 4.76 q-0.22 0.26 -0.56 0.26 l0 0 q-0.16 0 -0.32 -0.07 t-0.24 -0.21 l-6.56 -8.68 q-0.12 -0.14 -0.14 -0.35 t0.08 -0.38 t0.26 -0.28 t0.36 -0.11 l1.76 0 q0.34 0 0.56 0.28 l4.24 5.6 l4.14 -5.6 q0.22 -0.28 0.58 -0.28 l1.76 0 z M3.84 14.7 q0.28 0 0.49 0.2 t0.21 0.5 l0 3.7 q0 0.28 -0.21 0.49 t-0.49 0.21 l-1.52 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -3.7 q0 -0.3 0.21 -0.5 t0.49 -0.2 l1.52 0 z M29.996000000000002 5.52 q1.22 0.46 2.2 1.48 q2.1 2.12 2.1 5.41 t-2.1 5.43 q-0.98 1.02 -2.2 1.48 q-1.26 0.52 -2.58 0.52 l-5.66 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -1.44 q0 -0.3 0.21 -0.51 t0.49 -0.21 l5.6 0 q1.78 0 2.89 -1.3 t1.11 -3.26 t-1.11 -3.26 t-2.89 -1.3 l-5.6 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.51 l0 -1.44 q0 -0.28 0.21 -0.49 t0.49 -0.21 l5.66 0 q1.32 0 2.58 0.52 z M43.632000000000005 17.06 q0.24 0.08 0.38 0.27 t0.14 0.43 l0 1.54 q0 0.32 -0.26 0.54 q-0.2 0.16 -0.44 0.16 q-0.1 0 -0.14 -0.02 q-1.86 -0.36 -3.2 -1.72 q-1.8 -1.84 -1.8 -4.84 l0 -7.7 q0 -0.3 0.21 -0.51 t0.49 -0.21 l1.54 0 q0.3 0 0.51 0.21 t0.21 0.51 l0 7.74 q0 1.9 1.08 2.9 q0.56 0.52 1.28 0.7 z M50.532000000000004 5 q0.3 0 0.51 0.21 t0.21 0.51 l0 7.7 q0 3 -1.8 4.84 q-1.34 1.36 -3.2 1.72 q-0.04 0.02 -0.14 0.02 q-0.24 0 -0.44 -0.16 q-0.26 -0.2 -0.26 -0.56 l0 -1.54 q0 -0.22 0.14 -0.41 t0.38 -0.27 q0.76 -0.22 1.28 -0.7 q1.08 -0.96 1.08 -2.9 l0 -7.74 q0 -0.3 0.21 -0.51 t0.51 -0.21 l1.52 0 z M65.028 5.52 q1.22 0.46 2.2 1.48 q2.1 2.12 2.1 5.41 t-2.1 5.43 q-0.98 1.02 -2.2 1.48 q-1.26 0.52 -2.58 0.52 l-5.66 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -1.44 q0 -0.3 0.21 -0.51 t0.49 -0.21 l5.6 0 q1.78 0 2.89 -1.3 t1.11 -3.26 t-1.11 -3.26 t-2.89 -1.3 l-5.6 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.51 l0 -1.44 q0 -0.28 0.21 -0.49 t0.49 -0.21 l5.66 0 q1.32 0 2.58 0.52 z M78.664 17.06 q0.24 0.08 0.38 0.27 t0.14 0.43 l0 1.54 q0 0.32 -0.26 0.54 q-0.2 0.16 -0.44 0.16 q-0.1 0 -0.14 -0.02 q-1.86 -0.36 -3.2 -1.72 q-1.8 -1.84 -1.8 -4.84 l0 -7.7 q0 -0.3 0.21 -0.51 t0.49 -0.21 l1.54 0 q0.3 0 0.51 0.21 t0.21 0.51 l0 7.74 q0 1.9 1.08 2.9 q0.56 0.52 1.28 0.7 z M85.564 5 q0.3 0 0.51 0.21 t0.21 0.51 l0 7.7 q0 3 -1.8 4.84 q-1.34 1.36 -3.2 1.72 q-0.04 0.02 -0.14 0.02 q-0.24 0 -0.44 -0.16 q-0.26 -0.2 -0.26 -0.56 l0 -1.54 q0 -0.22 0.14 -0.41 t0.38 -0.27 q0.76 -0.22 1.28 -0.7 q1.08 -0.96 1.08 -2.9 l0 -7.74 q0 -0.3 0.21 -0.51 t0.51 -0.21 l1.52 0 z M101.52 17.12 q0.28 0 0.49 0.21 t0.21 0.49 l0 1.44 q0 0.28 -0.21 0.49 t-0.49 0.21 l-10.74 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -1.46 q0 -0.24 0.16 -0.44 l2.86 -3.46 q0.22 -0.26 0.54 -0.26 l1.92 0 q0.2 0 0.38 0.11 t0.27 0.3 t0.06 0.4 t-0.17 0.35 l-1.92 2.32 l7.34 0 z M101.52 5 q0.28 0 0.49 0.21 t0.21 0.51 l0 1.46 q0 0.26 -0.16 0.46 l-2.86 3.42 q-0.2 0.26 -0.54 0.26 l-1.9 0 q-0.2 0 -0.38 -0.11 t-0.28 -0.29 q-0.16 -0.44 0.1 -0.76 l1.92 -2.3 l-7.2 0 q-0.3 0 -0.51 -0.21 t-0.21 -0.51 l0 -1.42 q0 -0.3 0.21 -0.51 t0.51 -0.21 l10.6 0 z M108.436 10.94 q0.3 0 0.5 0.21 t0.2 0.51 l0 7.48 q0 0.28 -0.2 0.49 t-0.5 0.21 l-1.52 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -7.48 q0 -0.3 0.21 -0.51 t0.49 -0.21 l1.52 0 z M108.436 5 q0.3 0 0.5 0.21 t0.2 0.49 l0 3.7 q0 0.3 -0.2 0.51 t-0.5 0.21 l-1.52 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.51 l0 -3.7 q0 -0.28 0.21 -0.49 t0.49 -0.21 l1.52 0 z"></path>
          </g>
        </g>
      </svg>
      <div className="register__content">
        <h1>Login</h1>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email here"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password here"
          />
        </div>
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </div>
    </form>
  );
};

export default Login;