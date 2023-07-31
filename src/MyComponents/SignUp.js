import React, { useState, createContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Home from "./Home";

const MyContext = createContext();

function SignUp(props) {
  // Create state variables for each input field
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("apple");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [reenterPassword, setReenterPassword] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  let nav = useNavigate();

  function btnfunc() {
    nav("/Home", {
      state: {
        firstName: firstName,
        lastName: lastName,
        age: age,
        gender: gender,
        email: email,
        phoneNumber: phoneNumber,
        username: username,
        password: password,
      },
    });
  }

  return (
    <div className="mainbody">
      <form>
        <h1 id="font">Sign Up</h1>
        <input
          className="inputbox"
          placeholder="First Name"
          style={{ marginRight: "15px" }}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          className="inputbox"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br /> <br />
        <input
          className="inputbox"
          type="number"
          placeholder="Age"
          style={{ marginRight: "15px" }}
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <select
          className="inputbox"
          style={{ width: "210px" }}
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="Gender">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <br /> <br />
        <input
          className="inputbox"
          type="email"
          placeholder="Gmail"
          style={{ marginRight: "15px" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="inputbox"
          type="number"
          placeholder="Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <br /> <br />
        <input
          className="inputbox"
          placeholder="Create a Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br /> <br />
        <input
          className="inputbox"
          type={showPassword ? "text" : "password"}
          placeholder="Create a Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /> <br />
        <input
          className="inputbox"
          type={showPassword ? "text" : "password"}
          placeholder="Re-enter Password"
          value={reenterPassword}
          onChange={(e) => setReenterPassword(e.target.value)}
        />
        <div className="password-container">
          <span className="toggle-switch">
            <input
              type="checkbox"
              id="password-toggle"
              checked={showPassword}
              onChange={togglePasswordVisibility}
            />
            <label htmlFor="password-toggle"></label>
          </span>
        </div>
        <button onClick={btnfunc} className="mybtn">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignUp;
