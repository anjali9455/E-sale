// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaUser, FaSearch } from "react-icons/fa";
// import { RiLogoutBoxLine } from "react-icons/ri";

// const Navbar = () => {
//   const navigate = useNavigate();

//   // Function to handle logout
//   const handleLogout = () => {
//     // Implement your logout logic here
//     // For example, clearing user session, etc.
//     // After logout, navigate to the login page
//     navigate("/login");
//   };

//   const [showProfile, setShowProfile] = useState(false);

//   const handleProfileClick = () => {
//     setShowProfile(!showProfile);
//   };

//   return (
//     <div className="row py-4">
//       <div className="col-9"></div>
//       <div className="row col-3">
//         <div className="col-3">
//           <FaSearch />
//         </div>
//         <div className="col-3">sdsd</div>
//         <div className="col-3">sdsd</div>
//         <div className="col-3">
//           <button className="btn" onClick={handleLogout}>
//             <RiLogoutBoxLine />
//             Log Out
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaUser, FaSearch, FaBell, FaFlag } from "react-icons/fa";
// import { BiKey } from "react-icons/bi";
// import { RiLogoutBoxLine } from "react-icons/ri";
// import { BsArrowUp } from "react-icons/bs";

// const Navbar = () => {
//   const navigate = useNavigate();

//   const user = {
//     avatar: "your_avatar_url",
//     name: "John",
//   };

//   const handleLogout = async () => {
//     navigate("/login");
//   };

//   const [showProfile, setShowProfile] = useState(false);

//   const handleProfileClick = () => {
//     setShowProfile(!showProfile);
//   };

//   return (
//     <div className="" >
//       <button
//         // className="navbar-toggler"
//         type="button"
//         // data-bs-toggle="collapse"
//         // data-bs-target="#navbarNav"
//         // aria-controls="navbarNav"
//         // aria-expanded="false"
//         // aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//         Button
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <a className="nav-link" href="#">
//               <FaSearch />
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">
//               <FaBell />
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">
//               <FaFlag />
//             </a>
//           </li>
//         </ul>
//         <ul className="navbar-nav ms-auto">
//           <li className="nav-item dropdown">
//             <button
//               className="btn btn-light nav-link dropdown-toggle"
//               type="button"
//               id="profileDropdown"
//               data-bs-toggle="dropdown"
//               aria-expanded="false"
//             >
//               {user?.avatar ? (
//                 <img
//                   className="profileImage"
//                   src={user.avatar}
//                   alt={`${user.name} `}
//                 />
//               ) : (
//                 <FaUser className="profileImage" />
//               )}
//               <span className={`username ${showProfile ? "open" : ""}`}>
//                 {user?.name} <BsArrowUp />
//               </span>
//             </button>
//             <ul
//               className={`dropdown-menu ${showProfile ? "show" : ""}`}
//               aria-labelledby="profileDropdown"
//             >
//               <li>
//                 <Link to="profile" className="dropdown-item">
//                   <BiKey className="itemIcon" />
//                   Change Password
//                 </Link>
//               </li>
//               <li>
//                 <button className="dropdown-item" onClick={handleLogout}>
//                   <RiLogoutBoxLine className="itemIcon" />
//                   Log Out
//                 </button>
//               </li>
//             </ul>
//           </li>
//         </ul>
//       </div>

//     </div>
//   );
// };

// export default Navbar;import React, { useState } from "react";
import React, { useState } from "react";
import { FaUser, FaSearch } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";
import "../styles/Navbar.css"

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    fetch('http://localhost:3001/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: searchQuery }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Search response:', data);
      })
      .catch((error) => {
        console.error('Error searching:', error);
      });
  };
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3001/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: "username" }), // Replace with the actual username
      });
  
      if (response.ok) {
        console.log("Logout successful");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("An error occurred during logout:", error);
    }
  };

  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="search-icon" onClick={handleSearch}>
          <FaSearch />
        </div>
        <div className="logout-button" onClick={handleLogout}>
          <button className="btn">
            <RiLogoutBoxLine />
            Log Out
          </button>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
