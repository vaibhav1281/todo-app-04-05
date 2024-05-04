import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./actions";

const Auth = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login(username));
  };

  return (
    <div className="container">
      <form className="form">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          className="outline-none border-2 p-2 rounded-md"
        />
        <button type="submit" 
        onClick={handleLogin}
        className="bg-emerald-400 p-2 border-2 border-emerald-400 rounded-md"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
