import React from "react";
import { useLocation } from "react-router-dom";

function Home() {
  const loc = useLocation();
  return (
    <div className="mainbody">
      <h1 className="logins">Welcome! You have successfully Signed In!</h1>
      <h1>
        Full Name : {loc.state.firstName} {loc.state.lastName} <br />
        Age : {loc.state.age} <br />
        Gender : {loc.state.gender} <br />
        Email : {loc.state.email} <br />
        Number : {loc.state.phoneNumber} <br />
        Username : {loc.state.username} <br />
        Password : {loc.state.password} <br />
      </h1>
    </div>
  );
}

export default Home;
