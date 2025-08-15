import React, { useState } from "react";

const LoginStatus = () => {
  const [userName, setuserName] = useState("Porosh");
  const [isLogin, setIsLogin] = useState(false);
  console.log(userName);

  return (
    <>
      <hr />
      <div className="text-center my-5">
        <p className="text-xl px-4 py-2 rounded-lg font-semibold">
          {isLogin ? `Welcome ${userName}` : "Please Login"}
        </p>
        <button
          onClick={() => setIsLogin(!isLogin)}
          className={`px-4 py-2 rounded-lg font-semibold text-white ${
            isLogin ? "bg-red-500" : "bg-green-500"
          }`}
        >
          {isLogin ? "Logout" : "Login"}
        </button>
      </div>
    </>
  );
};

export default LoginStatus;
