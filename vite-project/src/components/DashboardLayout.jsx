import React, { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

// import customFetch from "./utils/customFetch";
// import { toast } from "react-toastify";

//  import Layout from "./Layout";
import { Routes, Route } from "react-router-dom";
import UserList from './UserList';
import LeadForm from './LeadForm';
import FollowUp from './FollowUp';
import TimesheetList from './TimesheetList';
import Sidebar from "../pages/Sidebar";
import Navbar from "./Navbar";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const handleShowLeadForm = () => {
    setShowLeadForm(true);
  };

  const handleCloseLeadForm = () => {
    setShowLeadForm(false);
  };

  const logoutUser = async () => {
    navigate("/");
    await customFetch.get("/auth/logout");
    toast.success("Logging out");
  };

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const { data } = await customFetch.get("/users/current-user");
  //         if (data) {
  //           setUser(data);
  //         } else {
  //           navigate("/login");
  //         }
  //       } catch (error) {
  //         toast.error(error?.response?.data?.msg);
  //         navigate("/login");
  //       }
  //     };

  //     fetchData();
  //   }, []);

  return (
    <div className="row">
      <div className="col-md-2">
        <Sidebar />
      </div>
      <div className="col-md-10">
        <Navbar/>
        <div style={{
          maxHeight:'88vh',
          overflow:'auto'
        }}>
          <Outlet />
          {/* <Routes>
              <Route index element={<UserList />} />
              <Route path="user" element={<UserList />} />
              <Route path="lead" element={<LeadForm />} />
              <Route path="followup" element={<FollowUp />} />
              <Route path="timesheet" element={<TimesheetList />} />
            </Routes> */}
        </div>
      </div>
    </div>

  );
};

export default DashboardLayout;
{/* <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <Navbar />
          <div className="content">
            {children} */}