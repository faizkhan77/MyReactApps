import React, { useState } from "react";
import { Link } from "react-router-dom";
import Home from "./MyRouter/Home";

function SignUp() {
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

  const [Username, setUser] = React.useState('')
  const [Password, setPass] = React.useState('')


  const [idea, setIdea] = useState(false)

  function Display(){
    // alert(`Hello! Here are your details! \n\n 
    // Fullname : ${firstName} ${lastName} \n
    // Age : ${age} \n
    // Gender : ${gender} \n
    // Email : ${email} \n
    // Number : ${phoneNumber} \n
    // Username : ${username} \n
    // Password : ${password}`)
    <Link to={"/Home"}></Link>
  }

  return (
    <div>
      <form>
        <h1 style={{ backgroundColor: "green", color: "white" }}>
          {/* Hello! This is my first React Application */}
        </h1>

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
          type="password"
          placeholder="Create a Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /> <br />
        <input
          className="inputbox"
          type="password"
          placeholder="Re-enter Password"
          value={reenterPassword}
          onChange={(e) => setReenterPassword(e.target.value)}
        />

        <br /> <br />
        {/* <button className="mybtn" onClick={Display} >Sign In</button> */}
        <Link to="/Home">
          <button onClick={()=>setIdea(true)} className="mybtn">Click Me</button>
        </Link>
      </form>
      {
        idea? 
        <Home fname = {firstName} />
        :null

      }
    </div>
  );
}

export default SignUp;
