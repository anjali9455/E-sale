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
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import AddFollowUp from "./AddFollowUp";

const FollowUp = () => {
  const [followUps, setFollowUps] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showAddFollowUp, setShowAddFollowUp] = useState(false);

  const itemsPerPage = 10;

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/follow")
      .then((response) => {
        console.log('Fetched follow-ups:', response.data);;
        setFollowUps(response.data);
      })
      .catch((error) => {
        console.error("Error fetching follow-up data:", error);
      });
  }, []);

  const handleSaveFollowUp = (newFollowup) => {
    // Generate a unique ID for the new follow-up
    newFollowup.id = Date.now().toString();
    setFollowUps([...followUps, newFollowup]);
  };

  const deleteFollowUp = (id) => {
    const updatedFollowUps = followUps.filter((followUp) => followUp.id !== id);
    setFollowUps(updatedFollowUps);
  };

  const totalPages = Math.ceil(followUps.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentFollowUps = followUps.slice(startIndex, endIndex);

  

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const openAddFollowUpModal = () => {
    setShowAddFollowUp(true);
  };

  const closeAddFollowUpModal = () => {
    setShowAddFollowUp(false);
  };

  

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Follow Up List</h1>
        <div className="d-flex">
          <button className="btn btn-primary" onClick={openAddFollowUpModal}>
            + Add Follow Up
          </button>
          <button className="btn btn-danger ml-2">
            Delete
          </button>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-success table-striped">
          <thead>
            <tr>
              <th>Lead ID</th>
              <th>Date</th>
              <th>Time</th>
              <th>Next Follow-Up</th>
              <th>Location</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentFollowUps.map((followUp) => (
              <tr key={followUp.id}>
                <td>{followUp.leadId}</td>
                <td>{followUp.date}</td>
                <td>{followUp.time}</td>
                <td>{followUp.nextFollowUp}</td>
                <td>{followUp.location}</td>
                <td>{followUp.status}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      // Handle edit action here
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteFollowUp(followUp.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-center">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 && "disabled"}`}>
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Previous
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, index) => (
              <li
                key={index}
                className={`page-item ${
                  currentPage === index + 1 && "active"
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li
              className={`page-item ${
                currentPage === totalPages && "disabled"
              }`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
      {showAddFollowUp && (
        <div className="modal fade show" style={{ display: "block" }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              {/* <div className="modal-header">
                <h5 className="modal-title">Add Follow-up</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={closeAddFollowUpModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div> */}
              <div className="modal-body">
                <AddFollowUp
                  onClose={closeAddFollowUpModal}
                  onSaveFollowup={handleSaveFollowUp}
                />
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default FollowUp;
