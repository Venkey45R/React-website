import React, { useRef, useState } from "react";
import Home from "./Home";

function Login() {
  const password = useRef();
  const username = useRef();
  const [passwordValue, setPasswordValue] = useState("");
  const [usernameValue, setUsernameValue] = useState("");
  const [redirectToHome, setRedirectToHome] = useState(false);

  const verify = (event) => {
    event.preventDefault();
    const localname = localStorage.getItem("usernameData");
    const localpassword = localStorage.getItem("passwordData");

    if (localname === usernameValue && localpassword === passwordValue) {
      setRedirectToHome(true);
    }
    else{
      alert('username and password does not matched');
    }
  };

  if (redirectToHome) {
    return <Home />;
  }

  return (
    <div>
      <form onSubmit={verify} className="bg-violet-400 px-10 py-5 mt-20 rounded-xl">
        <h1 className="my-5 text-center font-bold text-3xl">LOGIN FORM</h1>
        <div className="block pb-8">
          <h2 className="py-2 text-2xl">Enter your User name:</h2>
          <input
            type="text"
            className="w-96 h-10 px-3 rounded-xl"
            ref={username}
            onChange={(e) => setUsernameValue(e.target.value)}
          ></input>
        </div>
        <div className="block pb-8">
          <h2 className="py-2 text-2xl">Enter Password:</h2>
          <input
            type="password"
            className="w-96 h-10 px-3 rounded-xl"
            ref={password}
            onChange={(e) => setPasswordValue(e.target.value)}
          ></input>
        </div>
        <button type="submit" className="border border-gray-600 bg-pink-500 text-white w-40 h-10 mx-24 my-3">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
