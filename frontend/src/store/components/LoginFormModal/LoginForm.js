import { useState } from "react";
import * as sessionActions from "../../session";
import { useDispatch } from "react-redux";
import "./LoginForm.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  };

  const demoLogin = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential: 'Demo-lition', password: 'password' }))
      .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  };

  return (
    <div className="inner-login-modal-content-container">
      <div className="login-modal-upper-content">
        <h1>Log In</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <ul>
            {errors.map(error => <li className="login-error" key={error}>{error}</li>)}
          </ul>
          <label>
            <input
              type="text"
              placeholder="Username or Email"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </label>
          <label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">LOG IN</button>
        </form>
      </div>
      <div className="login-modal-divider">
        or log in with Demo User
      </div>
      <div className="login-modal-lower-content">
        <button onClick={demoLogin}>DEMO LOG IN</button>
      </div>
    </div>
  );
}

export default LoginForm;