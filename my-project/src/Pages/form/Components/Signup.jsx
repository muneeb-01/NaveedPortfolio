import React, { useState } from "react";
import { toast } from "react-toastify";
const Signup = ({ handleIsSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isValid = () => {
    if (email.length == 0) {
      toast.error("Enter email to proceed.");
      return false;
    }
    if (username.length == 0) {
      toast.error("Enter username to proceed.");
      return false;
    }
    if (password.length == 0) {
      toast.error("Enter password to proceed.");
      return false;
    }
    if (confirmPassword.length == 0) {
      toast.error("Enter password to proceed.");
      return false;
    }
    if (password != confirmPassword) {
      toast.error("Password and confirm password must be same.");
      return false;
    }
    return true;
  };
  const handleSignup = () => {
    if (isValid()) {
    }
  };
  return (
    <div className="overflow-hidden bg-white rounded-md shadow-lg lg:w-[30%]">
      <div className="p-5 bg-white md:flex-1">
        <h3 className="my-4 text-2xl font-semibold text-gray-700 text-center font-Gilgan">
          Sign Up
        </h3>
        <form
          action="#"
          className="flex flex-col space-y-4 font-poppins text-sm"
        >
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-gray-500"
            >
              Email address
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              autoFocus
              className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <div className="flex items-center justify-between">
              <label
                htmlFor="username"
                className="text-sm font-semibold text-gray-500"
              >
                Username
              </label>
            </div>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              id="username"
              className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-sm font-semibold text-gray-500"
              >
                Password
              </label>
            </div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <div className="flex items-center justify-between">
              <label
                htmlFor="confirm-password"
                className="text-sm font-semibold text-gray-500"
              >
                Confirm Password
              </label>
            </div>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              id="confirm-password"
              className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
            />
          </div>
          <div>
            <button
              type="submit"
              onClick={handleSignup}
              className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
            >
              Sign Up
            </button>
          </div>
          <a
            onClick={() => handleIsSignup(true)}
            className="py-2 cursor-pointer text-sm text-gray-500"
          >
            Already have an account?
            <span className="text-blue-500 underline pl-1">Log In</span>?
          </a>
        </form>
      </div>
    </div>
  );
};

export default Signup;
