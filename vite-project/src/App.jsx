import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthLayout from './components/AuthLayout';
import SidebarLayout from './components/SidebarLayout';
import DashboardLayout from './components/DashboardLayout';
import UserList from './components/UserList';
import LeadForm from './components/LeadForm';
import FollowUp from './components/FollowUp';
import TimesheetList from './components/TimesheetList';
import Login from './components/Login';
import Register from './components/Register';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="*" element={<AuthLayout />} />

  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
          <Route path="/register/*" element={<AuthLayout />} />
          <Route path="/dashboard/*" element={<DashboardLayout />} />
          <Route path="/user/*" element={<UserList />} />
          <Route path="/lead/*" element={<LeadForm />} />
          <Route path="/timesheet/*" element={<TimesheetList />} />
          <Route path="/Followup/*" element={<FollowUp />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}



export default App;
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import AuthLayout from './components/AuthLayout';
// import SidebarLayout from './components/SidebarLayout';
// import DashboardLayout from './components/DashboardLayout';
// import UserList from './components/UserList';
// import LeadForm from './components/LeadForm';
// import FollowUp from './components/FollowUp';
// import TimesheetList from './components/TimesheetList';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<AuthLayout />} />
//           <Route path="/register/*" element={<AuthLayout />} />
//           <Route path="/dashboard/*" element={<DashboardLayout />}>
//             <Route path="/" element={<UserList />} />
//             <Route path="/user/*" element={<UserList />} />
//             <Route path="/lead/*" element={<LeadForm />} />
//             <Route path="/followup/*" element={<FollowUp />} />
//             <Route path="/timesheet/*" element={<TimesheetList />} />
//           </Route>
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
