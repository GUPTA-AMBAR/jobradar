import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jobradar from './images/jobimage.jpg';
import { TbZoomScanFilled } from "react-icons/tb";
import { MdPreview } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaBuilding } from "react-icons/fa";
import { GrLogin } from "react-icons/gr";
import { FaSignInAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { CompaniesContext, HomeContext, LoginContext, SignupContext,JobContext } from '../../store/store';

const Frontend = ({ children }) => {
  const { handleSignup } = useContext(SignupContext);
  const navigate1 = useNavigate();

  const handleOnSignup = () => {
    handleSignup();
    navigate1('/signup');
  };

  const { handleLogin } = useContext(LoginContext);
  const navigate2 = useNavigate();

  const handleOnLogin = () => {
    handleLogin();
    navigate2('/Login');
  };

  const { handleCompany } = useContext(CompaniesContext);
  const navigate3 = useNavigate();

  const handleOnCompany = () => {
    handleCompany();
    navigate3('/company');
  };

  const {handleHome} = useContext(HomeContext);
  const navigate4 = useNavigate();

  const handleOnHome=()=>{
    handleHome();
    navigate4('/');
  }

  const {handleJob} = useContext(JobContext);
  const navigate5 = useNavigate();

  const handleOnJob=()=>{
    handleJob();
    navigate5('/jobs');
  }


  

  const [isProfileHovered, setIsProfileHovered] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-500 p-4 flex items-center justify-between fixed top-0 left-0 w-full z-50">
        <div>
          <h1 className="text-white text-xl font-semibold"><b>JOB-RADAR</b></h1>
        </div>
        <center>
          <img src={jobradar} style={{ borderRadius: "6px", height: "40px" }} alt="Job Radar" />
        </center>
        <div className="flex items-center space-x-4">
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-3"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ borderRadius: "6px" }}
            />
            <button
              className="btn btn-outline-success"
              type="submit"
              style={{ background: "yellow", borderRadius: "6px" }}
            >
              Search
            </button>
          </form> */}
        </div>
      </nav>

      {/* Sidebar and Content */}
      <div className="flex flex-1 pt-16">
        {/* Sidebar */}
        <aside className="bg-gray-800 text-white w-64 p-4 fixed h-screen">
          <nav>
            <ul className="space-y-2">
            <li>
                <div className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer">
                  <div className="flex items-center" onClick={handleOnHome}>
                  <FaHome style={{ marginRight: "7px" }} />
                    <span>Home</span>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer">
                  <div className="flex items-center" onClick={handleOnJob}>
                    <TbZoomScanFilled style={{ marginRight: "7px" }} />
                    <span>Jobs</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer">
                  <div className="flex items-center">
                    <MdPreview style={{ marginRight: "7px" }} />
                    <span>Reviews</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer">
                  <div className="flex items-center" onClick={handleOnCompany}>
                    <FaBuilding style={{ marginRight: "7px" }} />
                    <span>Companies</span>
                  </div>
                </div>
              </li>
              <li
                onMouseEnter={() => setIsProfileHovered(true)}
                onMouseLeave={() => setIsProfileHovered(false)}
              >
                <div className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer">
                  <div className="flex items-center">
                    <CgProfile style={{ marginRight: "7px" }} />
                    <span>Profile</span>
                  </div>
                </div>
                {isProfileHovered && (
                  <ul className="bg-gray-700 mt-2 rounded-md">
                    <li>
                      <a
                        className="block p-2 hover:bg-gray-600 flex items-center"
                        onClick={handleOnLogin}
                      >
                        <GrLogin style={{ marginRight: "7px" }} />
                        Login
                      </a>
                    </li>
                    <li>
                      <a
                        className="block p-2 hover:bg-gray-600 flex items-center"
                        onClick={handleOnSignup}
                      >
                        <FaSignInAlt style={{ marginRight: "7px" }} />
                        Sign-up
                      </a>
                    </li>
                    <li>
                      <a className="block p-2 hover:bg-gray-600 flex items-center">
                        <MdDashboard style={{ marginRight: "7px" }} />
                        Dashboard
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-64 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Frontend;
