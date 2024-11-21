import React,{useContext} from "react";
import { LoginContext,SignupContext } from '../../store/store';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {


  // handle signup
  const {handleSignup}= useContext(SignupContext);
  const navigate1 = useNavigate();

  const handleOnSignup=()=>{
    handleSignup();
    navigate1('/signup');
  }
  // handle login
  const {handleLogin } = useContext(LoginContext);
  const navigate2 = useNavigate();

  const handleOnLogin = () => {
    handleLogin(); // Toggle login state
    navigate2('/Login'); // Navigate to Login page
  };

  return (
    <>
    <div className="font-sans">
      <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100">
        <div className="relative sm:max-w-sm w-full">
          <div className="card bg-blue-400 shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6"></div>
          <div className="card bg-red-400 shadow-lg w-full h-full rounded-3xl absolute transform rotate-6"></div>
          <div className="relative w-full rounded-3xl px-6 py-4 bg-gray-100 shadow-md">
            <label
              htmlFor="login"
              className="block mt-3 text-sm text-gray-700 text-center font-semibold"
            >
              <b style={{fontSize:"30px"}}>Password-Reset</b>
            </label>
            <form method="#" action="#" className="mt-10">

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div className="mt-7">
                <button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                  Reset Password
                </button>
              </div>

              <div className="flex mt-7 justify-center w-full">
                <button className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"  onClick={handleOnLogin}>
                 login
                </button>

                <button className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"  onClick={handleOnSignup}>
                  Sign-up
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ForgetPassword;