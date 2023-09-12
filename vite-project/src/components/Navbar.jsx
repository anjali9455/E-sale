// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// // import { useDashboardContext } from "../DashboardProvider";
// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
// import { FaUser, FaSearch } from "react-icons/fa"; // Import Font Awesome icons
// import { BsArrowUp } from "react-icons/bs"; // Import Bootstrap icons
// import { BiKey } from "react-icons/bi"; // Import Bootstrap icons
// import { RiLogoutBoxLine } from "react-icons/ri"; // Import Bootstrap icons

// const Navbar = () => {
// //   const { user, logoutUser } = useDashboardContext();
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     await logoutUser();
//     navigate("/login");
//   };

//   const [showProfile, setShowProfile] = useState(false);

//   const handleProfileClick = () => {
//     setShowProfile(!showProfile);
//   };
//   const navbarStyles = {
//     background: 'rgb(140, 17, 17)', // Dark background color
//     color: 'dark', // Text color
//   };

//   return (
      
//     <nav className="navbar navbar-expand-lg navbar-light bg-black">
//       <div className="container"> 
//         {/* {/* <Link className="navbar-brand" to="/">
//           Your Logo
//         </Link> */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item dropdown">
//               <button
//                 className="btn btn-light nav-link dropdown-toggle"
//                 type="button"
//                 id="profileDropdown"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                  {/* {user?.user?.avatar ? (
//                  <img
//                    className="profileImage"
//                   src={user.user.avatar}
//                    alt={`${user.user.name} `}
//                    />
//                 ) : (
//                   <FaUser className="profileImage" />
//                 )} 
//                 <span className={`username ${showProfile ? "open" : ""}`}>
//                   {user?.user?.name} <BsArrowUp />
//                 </span> */}
                
//               </button>
//               <ul
//                 className={`dropdown-menu ${showProfile ? "show" : ""}`}
//                 aria-labelledby="profileDropdown"
//               >
//                 <li>
//                   <Link to="profile" className="dropdown-item">
//                     <BiKey className="itemIcon" />
//                     Change Password
//                   </Link>
//                 </li>
//                 <li>
//                   <button
//                     className="dropdown-item"
//                     onClick={handleLogout}
//                   >
//                     <RiLogoutBoxLine className="itemIcon" />
//                     Log Out
//                   </button>
//                 </li>
//               </ul>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser, FaSearch, FaBell, FaFlag } from "react-icons/fa";
import { BiKey } from "react-icons/bi";
import { RiLogoutBoxLine } from "react-icons/ri";
import { BsArrowUp } from "react-icons/bs";

const Navbar = () => {
  const navigate = useNavigate();

  const user = {
    avatar: "your_avatar_url",
    name: "John",
  };

  const handleLogout = async () => {
    navigate("/login");
  };

  const [showProfile, setShowProfile] = useState(false);

  const handleProfileClick = () => {
    setShowProfile(!showProfile);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FaSearch />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FaBell />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FaFlag />
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <button
                className="btn btn-light nav-link dropdown-toggle"
                type="button"
                id="profileDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {user?.avatar ? (
                  <img
                    className="profileImage"
                    src={user.avatar}
                    alt={`${user.name} `}
                  />
                ) : (
                  <FaUser className="profileImage" />
                )}
                <span className={`username ${showProfile ? "open" : ""}`}>
                  {user?.name} <BsArrowUp />
                </span>
              </button>
              <ul
                className={`dropdown-menu ${showProfile ? "show" : ""}`}
                aria-labelledby="profileDropdown"
              >
                <li>
                  <Link to="profile" className="dropdown-item">
                    <BiKey className="itemIcon" />
                    Change Password
                  </Link>
                </li>
                <li>
                  <button className="dropdown-item" onClick={handleLogout}>
                    <RiLogoutBoxLine className="itemIcon" />
                    Log Out
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
