import React from "react";

function Welcome(name){
    let sayHi = `Hey !${name.name}`;
    let greetMessage = `Welcome to Newton School.`;
    return (
        <div>
            <h1>{sayHi}</h1>
            <h2>{greetMessage}</h2>
        </div>
    );
}

export default Welcome;