import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { admin_login } from "../../store/Reducers/authReducer";

const AdminLogin = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const inputHandle = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(admin_login(state));
  };
  return (
    <div className="min-w-screen min-h-screen bg-[#719671] flex justify-center items-center">
      <div className="max-w-sm w-full bg-white rounded-2xl shadow-md">
        <div className="p-6 shadow-xl ">
          <div className="flex justify-center w-[100px] mb-5">
            <img src="http://localhost:3000/images/logo.png" alt="" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 text-center">
            Admin Login
          </h1>

          {/* form */}
          <form onSubmit={handleSubmit}>
            {/* email */}
            <div className="flex flex-col gap-1 mb-3">
              <label htmlFor="email" className="text-gray-700 font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                required
                value={state.email}
                onChange={inputHandle}
                className="border-2 rounded-md p-2 focus:outline-none focus:border-blue-500 required:"
              />
            </div>
            {/* password */}
            <div className="flex flex-col gap-1 mb-3">
              <label htmlFor="password" className="text-gray-700 font-medium">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                required
                value={state.password}
                onChange={inputHandle}
                className="border-2 rounded-md p-2 focus:outline-none focus:border-blue-500 required:"
              />
            </div>
            {/*Forgetpassword  */}
            <div className="flex justify-end w-full gap-3 mb-3">
              <Link>
                <p className="text-blue-600 font-semibold hover:text-blue-900 text-sm">
                  Forget Password
                </p>
              </Link>
            </div>
            {/* signin button */}
            <div className="flex justify-center mb-3 ">
              <button className="bg-green-600 w-full text-white px-3  py-2 rounded-lg hover:bg-green-700">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
