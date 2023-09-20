// //  Import your images like this (relative to the Sidebar.jsx file in src)
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// // Import your images like this (relative to the Sidebar.jsx file in src)
// import dashboardIcon from './images/Dashboard.png';
// import FollowupIcon from './images/Timesheet.png'
// import userIcon from './images/User.png';
// import leadIcon from './images/Lead.png';
// import Timesheeticon from './images/Timesheet.png'
// import settingIcon from './images/setting.png';
// import './custom-bootstrap.scss'
//  export const Sidebar = () => {
//   const [activeTab, setActiveTab] = useState('dashboard');

//   const handleTabClick = (tabName) => {
//     setActiveTab(tabName);
//   };
//     // Custom styles for the dark theme sidebar
//     const sidebarStyles = {
//       background: 'rgb(55, 51, 51)', // Dark background color
//       color: 'white', // Text color
//     };

//   return (
//     <nav id="sidebar" style={sidebarStyles}>
//     <div className="position-fixed">
//       <ul className="nav flex-column">
//           <li className="nav-item">
//             <Link
//               to="/dashboard"
//               className={`nav-link ${activeTab === 'dashboard' ? 'active' : ''}`}
//               onClick={() => handleTabClick('dashboard')}
//             >
//               <img src={dashboardIcon} alt="Dashboard" className="nav-icon" />
//               Dashboard
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/user"
//               className={`nav-link ${activeTab === 'user' ? 'active' : ''}`}
//               onClick={() => handleTabClick('user')}
//             >
//               <img src={userIcon} alt="User" className="nav-icon" />
//               User
//             </Link>
//           </li>
         
//           <li className="nav-item">
//             <Link
//               to="/lead"
//               className={`nav-link ${activeTab === 'lead' ? 'active' : ''}`}
//               onClick={() => handleTabClick('lead')}
//             >
//               <img src={leadIcon} alt="Lead" className="nav-icon" />
//               Lead
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/follow up"
//               className={`nav-link ${activeTab === 'follow up' ? 'active' : ''}`}
//               onClick={() => handleTabClick('follow up')}
//             >
//               <img src={FollowupIcon} alt="Follow up" className="nav-icon" />
//               Follow up
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/timesheet"
//               className={`nav-link ${activeTab === 'timesheet' ? 'active' : ''}`}
//               onClick={() => handleTabClick('follow up')}
//             >
//               <img src={Timesheeticon} alt="Timesheet" className="nav-icon" />
//               Timesheet
//             </Link>
//             </li>
          
//           <li className="nav-item">
//             <Link
//               to="/setting"
//               className={`nav-link ${activeTab === 'setting' ? 'active' : ''}`}
//               onClick={() => handleTabClick('setting')}
//             > 
//               <img src={settingIcon} alt="Setting" className="nav-icon" />
//               Settings
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Sidebar;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// Import your images
import dashboardIcon from './images/Dashboard.png';
import followUpIcon from './images/FollowUp.png';
import userIcon from './images/User.png';
import leadIcon from './images/Lead.png';
import timesheetIcon from './images/Timesheet.png';
import settingIcon from './images/Setting.png';
import '../styles/Sidebar.css'; 
import Navbar from '../components/Navbar';
const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="sidebar position-fixed"style={{ width: '250px', height: '100%', overflowY: 'auto'}}>
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link
          to="/dashboard"
          className={`nav-link ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => handleTabClick('dashboard')}
        >
          <img src={dashboardIcon} alt="Dashboard" className="nav-icon" />
          Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/dashboard/user"
          className={`nav-link ${activeTab === 'user' ? 'active' : ''}`}
          onClick={() => handleTabClick('user')}
        >
          <img src={userIcon} alt="User" className="nav-icon" />
          User
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/dashboard/lead"
          className={`nav-link ${activeTab === 'lead' ? 'active' : ''}`}
          onClick={() => handleTabClick('lead')}
        >
          <img src={leadIcon} alt="Lead" className="nav-icon" />
          Lead
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/dashboard/followup"
          className={`nav-link ${activeTab === 'followup' ? 'active' : ''}`}
          onClick={() => handleTabClick('followup')}
        >
          <img src={followUpIcon} alt="Follow Up" className="nav-icon" />
          Follow Up
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/dashboard/timesheet"
          className={`nav-link ${activeTab === 'timesheet' ? 'active' : ''}`}
          onClick={() => handleTabClick('timesheet')}
        >
          <img src={timesheetIcon} alt="Timesheet" className="nav-icon" />
          Timesheet
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/dashboard/setting"
          className={`nav-link ${activeTab === 'setting' ? 'active' : ''}`}
          onClick={() => handleTabClick('setting')}
        >
          <img src={settingIcon} alt="Setting" className="nav-icon" />
          Settings
        </Link>
      </li>
    </ul>
  </div>
  );
};

export default Sidebar;
