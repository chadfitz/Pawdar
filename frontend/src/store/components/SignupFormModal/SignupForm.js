import { useState } from "react";
import * as sessionActions from "../../session";
import { useDispatch } from "react-redux";
import "./SignupForm.css";

const SignupForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword){
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          let data;
          try {
              // .clone() essentially allows you to read the response body twice
            data = await res.clone().json();
          } catch {
            data = await res.text(); // Will hit this case if the server is down
          }
          if (data?.errors) setErrors(data.errors);
          else if (data) setErrors(data);
          else setErrors([res.statusText]);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <div className="inner-signup-modal-content-container">
      <div className="upper-content">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <ul>
            {errors.map(error => <li key={error}>{error}</li>)}
          </ul>
          <label>
            <input type="text" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
          </label>
          <label>
            <input type="text" placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} required />
          </label>
          <label>
            <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required />
          </label>
          <label>
            <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} required />
          </label>
          <button>SIGN UP</button>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;