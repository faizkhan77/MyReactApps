import React from "react";

function Home(props){
    return(
        <div>
            <h1>Welcome! You have successfully Signed In!</h1>
            <h3>Hello {props.fname}</h3>
        </div>
    )
}

export default Home;