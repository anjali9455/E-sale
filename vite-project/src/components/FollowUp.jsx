// import React, { useState, useEffect } from "react";
// import Layout from "./Layout"; // Import the Layout component
// // import AddFollowUp from "./AddFollowUp"; // Import the AddFollowUp component
// import BootstrapTable from 'react-bootstrap/Table'; // Import Bootstrap Table component

// const FollowUpList = () => {
//   // State to manage follow-ups, filters, and the Add Follow-up modal
//   const [followUps, setFollowUps] = useState([]);
//   const [filters, setFilters] = useState({
//     user: "",
//     lead: "",
//     followedOn: "",
//     nextFollowUp: "",
//     status: "",
//     location: "",
//   });
//   const [showAddFollowUp, setShowAddFollowUp] = useState(false);

//   // Fetch the list of follow-ups from your backend API
//   useEffect(() => {
//     // Make an API request to fetch follow-ups and update the 'followUps' state
//     // Example: fetchFollowUps().then(data => setFollowUps(data));
//   }, []);

//   // Handle filter criteria changes
//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters({ ...filters, [name]: value });
//     // Implement filtering logic and update the 'followUps' state accordingly
//   };

//   // Function to open the Add Follow-up modal
//   const openAddFollowUpModal = () => {
//     setShowAddFollowUp(true);
//   };

//   // Function to close the Add Follow-up modal
//   const closeAddFollowUpModal = () => {
//     setShowAddFollowUp(false);
//   };

//   return (
//     <Layout>
//       <h1>Follow-up List</h1>
//       <div className="row mb-3">
//         {/* Filter input fields */}
//         {/* Add Follow-up button */}
//       </div>
//       <div className="mb-3">
//         <button onClick={openAddFollowUpModal} className="btn btn-primary">
//           + Add Follow-up
//         </button>
//       </div>
//       <BootstrapTable striped bordered hover>
//         <thead>
//           <tr>
//             <th>User</th>
//             <th>Lead</th>
//             <th>Followed On</th>
//             <th>Next Follow-up</th>
//             <th>Status</th>
//             <th>Location</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* Map and display follow-up data in rows */}
//         </tbody>
//       </BootstrapTable>

//       {/* AddFollowUp modal */}
//       {showAddFollowUp && <AddFollowUp onClose={closeAddFollowUpModal} />}
//     </Layout>
//   );
// };

// export default FollowUpList;\
import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import AddFollowUp from "./AddFollowUp";
import DashboardLayout from "./DashboardLayout";

const FollowUp = () => {
    const addFollowUp = (newFollowUp) => {
    // Send a POST request to your API to create the follow-up
    axios
      .post("/api/follow", newFollowUp)
      .then((response) => {
        console.log("New follow-up created:", response.data);
        // You can update your state or perform any necessary actions here
        // For example, update the list of follow-ups
      })
      .catch((error) => {
        console.error("Error creating a new follow-up:", error);
        alert("Failed to create a new follow-up. Please try again.");
      });
  };


  const [leads, setLeads] = useState([


  ]);

  const [filters, setFilters] = useState({
    user: "",
    lead: "",
    followedOn: "",
    nextFollowUp: "",
    status: "",
    location: "",
    // Add more filter fields as needed
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [showAddFollowUp, setShowAddFollowUp] = useState(false); // State to control the visibility of the Add Follow Up form

  const itemsPerPage = 10; // Number of items to show per page

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  // Implement filtering logic based on filter values
  const filteredLeads = leads.filter((lead) => {
    // Implement your filter logic here
    return (
      lead.user.includes(filters.user) &&
      lead.lead.includes(filters.lead) &&
      lead.followedOn.includes(filters.followedOn) &&
      lead.nextFollowUp.includes(filters.nextFollowUp) &&
      lead.status.includes(filters.status) &&
      lead.location.includes(filters.location)
      // Add more filter conditions as needed
    );
  });

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredLeads.length / itemsPerPage);

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the current page's data
  const currentLeads = filteredLeads.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Function to open the Add Follow Up form
  const openAddFollowUpModal = () => {
    setShowAddFollowUp(true);
  };

  // Function to close the Add Follow Up form
  const closeAddFollowUpModal = () => {
    setShowAddFollowUp(false);
  };

  return (
    
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1>Follow Up List</h1>
          <div className="d-flex">
            <div className="input-group me-2">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                name="user"
                value={filters.user}
                onChange={handleFilterChange}
              />
              <button className="btn btn-outline-secondary" type="button">
                <i className="bi bi-filter"></i> Filter
              </button>
            </div>
            <button className="btn btn-primary" onClick={openAddFollowUpModal}>
              + Add Follow Up
            </button>
           
          </div>
        </div>
        {/* Data table */}
        <div className="table-responsive">
          {/* ... (your existing code) */}
        </div>
        {/* Pagination */}
        <div className="d-flex justify-content-center">
          {/* ... (your existing code) */}
        </div>

        {/* Conditionally render the Add Follow Up form */}
        {showAddFollowUp && <AddFollowUp onClose={closeAddFollowUpModal} />}
      </div>
    
  );
};

export default FollowUp;

