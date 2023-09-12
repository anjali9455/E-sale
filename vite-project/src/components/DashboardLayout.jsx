import React, { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

// import customFetch from "./utils/customFetch";
// import { toast } from "react-toastify";

 import Layout from "./Layout";
import LeadForm from "./LeadForm"; 


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
    <Layout>
       {/* <Sidebar />
      <Navbar user={user} logoutUser={logoutUser} />
      <div className="content">
        <Outlet context={{ user }} />
        
        
        {showLeadForm && <LeadForm onCancel={handleCloseLeadForm} />}
        {/* {!showLeadForm && (
          <button className="btn btn-primary" onClick={handleShowLeadForm}>
            Lead
          </button>
        )} */}
      {/* </div> */} */
    </Layout>
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