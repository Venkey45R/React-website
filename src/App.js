import React, { useRef } from "react";
import Login from "./Login";

function App() {
  const email = useRef();
  const password = useRef();
  const username = useRef();
  const con = useRef();
  const mobileno = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const usernameValue = username.current.value;
    const mobilenoValue = mobileno.current.value;
    const conValue = con.current.value;

    if (emailValue !== "" && passwordValue !== "" && usernameValue !== "" && mobilenoValue !== "" && conValue !== "") {
      localStorage.setItem("emailData", emailValue);
      localStorage.setItem("passwordData", passwordValue);
      localStorage.setItem("usernameData", usernameValue);
      localStorage.setItem("confirmData", conValue);
      localStorage.setItem("mobileData", mobilenoValue);
      window.location.href = "/login";
    }
    else{
      alert('enter details to proceed');
    }
  };

  return (
    <div className="flex items-center justify-center">
      {localStorage.getItem("emailData") && localStorage.getItem("passwordData") && localStorage.getItem("usernameData")  && localStorage.getItem("mobileData") && localStorage.getItem("confirmData")? (
        <Login />
      ) : (
        <form onSubmit={handleSubmit} className="bg-violet-400 px-8 py-10 mt-2 rounded-2xl">
          <h1 className="my-4 text-center font-bold text-3xl">SIGN UP:</h1>
          <div className="block pb-4">
            <h2 className="py-2 text-2xl">Enter your User name:</h2>
            <input
              type="text"
              className="h-8 px-2 rounded-xl w-80 ml-2"
              ref={username}
            ></input>
          </div>
          <div className="block pb-4">
            <h2 className="py-2 text-2xl">Enter your Email Id:</h2>
            <input
              type="email"
              className="w-80 h-8 px-2 rounded-xl ml-2"
              ref={email}
            ></input>
          </div>
          <div className="block pb-4">
            <h2 className="py-2 text-2xl">Enter your Mobile number:</h2>
            <input
              type="text"
              className="w-80 h-8 px-2 rounded-xl ml-2"
              ref={mobileno}
            ></input>
          </div>
          <div className="block pb-4">
            <h2 className="py-2 text-2xl">Enter your password:</h2>
            <input
              type="password"
              className="w-80 h-8 px-2 rounded-xl ml-2"
              ref={password}
            ></input>
          </div>
          <div className="block pb-4">
            <h2 className="py-2 text-2xl">Confirm Password:</h2>
            <input
              type="password"
              className="w-80 h-8 px-2 rounded-xl ml-2"
              ref={con}
            ></input>
          </div>
          <button type="submit" className="border border-gray-600 bg-pink-500 text-white w-40 h-10 mx-24 my-3 rounded-2xl">
            Login
          </button>
        </form>
      )}
    </div>
  );
}

export default App;
