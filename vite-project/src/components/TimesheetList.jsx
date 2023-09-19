// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import AddTimesheet from "./AddTimesheet";
// import AuthLayout from "./AuthLayout";


// const TimesheetList = () => {
//   const [timesheets, setTimesheets] = useState([]); // Your timesheet data state
//   const [filters, setFilters] = useState({
//     userId: "",
//     date: "",
//     // Add more filter fields as needed
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10; // Number of items to show per page
//   const [showAddNewForm, setShowAddNewForm] = useState(false);

//   // Handle filter changes
//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters({ ...filters, [name]: value });
//   };

//   // Implement filtering logic based on filter values
//   const filteredTimesheets = timesheets.filter((timesheet) => {
//     // Implement your filter logic here
//     return (
//       timesheet.userId.includes(filters.userId) &&
//       timesheet.date.includes(filters.date)
//       // Add more filter conditions as needed
//     );
//   });

//   // Calculate the total number of pages
//   const totalPages = Math.ceil(filteredTimesheets.length / itemsPerPage);

//   // Calculate the start and end indices for the current page
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;

//   // Get the current page's data
//   const currentTimesheets = filteredTimesheets.slice(startIndex, endIndex);

//   // Handle page change
//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };

//   // Function to open the Add New form
//   const openAddNewForm = () => {
//     setShowAddNewForm(true);
//   };

//   // Function to close the Add New form
//   const closeAddNewForm = () => {
//     setShowAddNewForm(false);
//   };

//   // Function to handle adding a new timesheet
//   const handleAddTimesheet = (newTimesheet) => {
//     // Add your logic to handle the new timesheet data
//     // You can update your timesheets state here
//     console.log("New Timesheet:", newTimesheet);
//     // Close the form after adding a new timesheet
//     closeAddNewForm();
//   };

//   return (
 
    
//     <div className="container mt-4">
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h1>Timesheet List</h1>
//         <div className="d-flex">
//           <div className="input-group me-2">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Search..."
//               name="userId"
//               value={filters.userId}
//               onChange={handleFilterChange}
//             />
//             <button className="btn btn-outline-secondary" type="button">
//               <i className="bi bi-filter"></i> Filter
//             </button>
//           </div>
//           <button className="btn btn-primary" onClick={openAddNewForm}>
//             + Add New
//           </button>
//         </div>
//       </div>
//       {/* Timesheet table */}
//       <div className="table-responsive">
//         <table className="table table-success table-striped">
//           {/* Table headers */}
//           <thead>
//             <tr>
//               <th>User Checkbox</th>
//               <th>User ID</th>
//               <th>Date</th>
//               <th>Start Time</th>
//               <th>End Time</th>
//               <th>Start Location</th>
//               <th>End Location</th>
//               <th>KMs</th>
//               <th>Total GPS KMs</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           {/* Table body */}
//           <tbody>
//             {/* Map through current page's timesheets */}
//             {currentTimesheets.map((timesheet) => (
//               <tr key={timesheet.id}>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>{timesheet.userId}</td>
//                 <td>{timesheet.date}</td>
//                 <td>{timesheet.startTime}</td>
//                 <td>{timesheet.endTime}</td>
//                 <td>{timesheet.startLocation}</td>
//                 <td>{timesheet.endLocation}</td>
//                 <td>{timesheet.kms}</td>
//                 <td>{timesheet.totalGPSKMs}</td>
//                 <td>
//                   <button className="btn btn-warning">Edit</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       {/* Pagination */}
//       <div className="d-flex justify-content-center">
//         <nav aria-label="Page navigation example">
//           <ul className="pagination">
//             <li className={`page-item ${currentPage === 1 && "disabled"}`}>
//               <button
//                 className="page-link"
//                 onClick={() => handlePageChange(currentPage - 1)}
//               >
//                 Previous
//               </button>
//             </li>
//             {Array.from({ length: totalPages }, (_, index) => (
//               <li
//                 key={index}
//                 className={`page-item ${currentPage === index + 1 && "active"}`}
//               >
//                 <button
//                   className="page-link"
//                   onClick={() => handlePageChange(index + 1)}
//                 >
//                   {index + 1}
//                 </button>
//               </li>
//             ))}
//             <li
//               className={`page-item ${
//                 currentPage === totalPages && "disabled"
//               }`}
//             >
//               <button
//                 className="page-link"
//                 onClick={() => handlePageChange(currentPage + 1)}
//               >
//                 Next
//               </button>
//             </li>
//           </ul>
//         </nav>
//       </div>
//       {showAddNewForm && (
//         <AddTimesheet
//           onAddTimesheet={handleAddTimesheet}
//           onCloseForm={closeAddNewForm}
//         />
//       )}

//     </div>
    
//     );
// };

// export default TimesheetList;
// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import AddTimesheet from "./AddTimesheet";

// const TimesheetList = () => {
//   const [timesheets, setTimesheets] = useState([]); // Your timesheet data state
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10; // Number of items to show per page
//   const [showAddNewForm, setShowAddNewForm] = useState(false);

//   // Function to open the Add New form
//   const openAddNewForm = () => {
//     setShowAddNewForm(true);
//   };

//   // Function to close the Add New form
//   const closeAddNewForm = () => {
//     setShowAddNewForm(false);
//   };

//   // Function to handle adding a new timesheet
//   const handleAddTimesheet = (newTimesheet) => {
//     // Add your logic to handle the new timesheet data
//     // You can update your timesheets state here
//     console.log("New Timesheet:", newTimesheet);
//     // Close the form after adding a new timesheet
//     closeAddNewForm();
//   };
// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Axios from "axios"; // Import Axios for making HTTP requests
// import AddTimesheet from "./AddTimesheet";

// const TimesheetList = () => {
//   const [timesheets, setTimesheets] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;
//   const [showAddNewForm, setShowAddNewForm] = useState(false);
//   const [totalPages, setTotalPages] = useState(0); // Define totalPages state

//   useEffect(() => {
//     // Fetch timesheet data from your backend API here
//     Axios.get("http://localhost:3001/api/timesheet")
//       .then((response) => {
//         setTimesheets(response.data); // Assuming your API returns an array of timesheets

//         // Calculate the total pages based on the number of timesheets
//         setTotalPages(Math.ceil(response.data.length / itemsPerPage));
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []); // The empty dependency array ensures the effect runs only once

//   const openAddNewForm = () => {
//     setShowAddNewForm(true);
//   };

//   const closeAddNewForm = () => {
//     setShowAddNewForm(false);
//   };

//   const handleAddTimesheet = (newTimesheet) => {
//     // Assuming your backend supports adding new timesheets
//     Axios.post("http://localhost:3001/api/timesheet", newTimesheet)
//       .then((response) => {
//         // Update the timesheets state with the new data from the backend
//         setTimesheets([...timesheets, response.data]);
//         // Close the form after adding a new timesheet
//         closeAddNewForm();
//         // Update the total pages after adding a new timesheet
//         setTotalPages(Math.ceil((timesheets.length + 1) / itemsPerPage));
//       })
//       .catch((error) => {
//         console.error("Error adding timesheet:", error);
//       });
//   };

//   return (
//     <div className="container mt-4">
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h1>Timesheet List</h1>
//         <div className="d-flex">
//           <button className="btn btn-primary" onClick={openAddNewForm}>
//             + Add New
//           </button>
//         </div>
//       </div>
//       {/* Timesheet table */}
//       <div className="table-responsive">
//         <table className="table table-success table-striped">
//           {/* Table headers */}
//           <thead>
//             <tr>
//               <th>User Checkbox</th>
//               <th>Date</th>
//               <th>Last Follow-Up</th>
//               <th>Next Follow-Up</th>
//               <th>Status</th>
//               <th>Contact List</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           {/* Table body */}
//           <tbody>
//             {/* Map through current page's timesheets */}
//             {timesheets.map((timesheet) => (
//               <tr key={timesheet.id}>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>{timesheet.Date}</td>
//                 <td>{timesheet.LastFollowUp}</td>
//                 <td>{timesheet.NextFollowUp}</td>
//                 <td>{timesheet.Status}</td>
//                 <td>
//                   <ul>
//                     {timesheet.AddContact.map((contact, index) => (
//                       <li key={index}>{contact}</li>
//                     ))}
//                   </ul>
//                 </td>
//                 <td>
//                   <button className="btn btn-warning">Edit</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       {/* Pagination */}
//       <div className="d-flex justify-content-center">
//         <nav aria-label="Page navigation example">
//           <ul className="pagination">
//             <li className={`page-item ${currentPage === 1 && "disabled"}`}>
//               <button
//                 className="page-link"
//                 onClick={() => setCurrentPage(currentPage - 1)}
//               >
//                 Previous
//               </button>
//             </li>
//             {/* Add pagination logic here */}
//             <li
//               className={`page-item ${
//                 currentPage === totalPages && "disabled"
//               }`}
//             >
//               <button
//                 className="page-link"
//                 onClick={() => setCurrentPage(currentPage + 1)}
//               >
//                 Next
//               </button>
//             </li>
//           </ul>
//         </nav>
//       </div>
//       {showAddNewForm && (
//         <AddTimesheet
//           onAddTimesheet={handleAddTimesheet}
//           onCloseForm={closeAddNewForm}
//         />
//       )}
//     </div>
//   );
// };

// export default TimesheetList;
import React, { useState, useEffect } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTimesheet from "./AddTimesheet";

const TimesheetList = () => {
  const [timesheets, setTimesheets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [showAddNewForm, setShowAddNewForm] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedTimesheetIds, setSelectedTimesheetIds] = useState([]);

  useEffect(() => {
    // Fetch timesheet data from your backend API here
    Axios.get("http://localhost:3001/api/timesheet")
      .then((response) => {
        setTimesheets(response.data);
        setTotalPages(Math.ceil(response.data.length / itemsPerPage));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const openAddNewForm = () => {
    setShowAddNewForm(true);
  };

  const closeAddNewForm = () => {
    setShowAddNewForm(false);
  };

  const handleAddTimesheet = (newTimesheet) => {
    Axios.post("http://localhost:3001/api/timesheet", newTimesheet)
      .then((response) => {
        setTimesheets([...timesheets, response.data]);
        closeAddNewForm();
        setTotalPages(Math.ceil((timesheets.length + 1) / itemsPerPage));
      })
      .catch((error) => {
        console.error("Error adding timesheet:", error);
      });
  };

  const handleCheckboxChange = (timesheetId) => {
    const updatedSelectedTimesheetIds = selectedTimesheetIds.includes(timesheetId)
      ? selectedTimesheetIds.filter((id) => id !== timesheetId)
      : [...selectedTimesheetIds, timesheetId];
    setSelectedTimesheetIds(updatedSelectedTimesheetIds);
  };

  const deleteSelectedTimesheets = () => {
    const updatedTimesheets = timesheets.filter(
      (timesheet) => !selectedTimesheetIds.includes(timesheet.id)
    );
    setTimesheets(updatedTimesheets);
    setSelectedTimesheetIds([]);
  };

  // Calculate the current page's timesheets based on pagination
  const indexOfLastTimesheet = currentPage * itemsPerPage;
  const indexOfFirstTimesheet = indexOfLastTimesheet - itemsPerPage;
  const currentTimesheets = timesheets.slice(
    indexOfFirstTimesheet,
    indexOfLastTimesheet
  );

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Timesheet List</h1>
        <div className="d-flex">
          <button className="btn btn-primary" onClick={openAddNewForm}>
            + Add New
          </button>
          <button className="btn btn-danger ml-2"onClick={deleteSelectedTimesheets}>
            Delete
          </button>
        </div>
      </div>
      {/* Timesheet table */}
      <div className="table-responsive">
        <table className="table table-success table-striped">
          {/* Table headers */}
          <thead>
            <tr >
              <th>User Checkbox</th>
              <th>Date</th>
              <th>Last Follow-Up</th>
              <th>Next Follow-Up</th>
              <th>Status</th>
              <th>Contact List</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody>
          {currentTimesheets.map((timesheet) => (
          <tr key={timesheet.id}>
            <td>
              <input
                type="checkbox"
                checked={selectedTimesheetIds.includes(timesheet.id)}
                onChange={() => handleCheckboxChange(timesheet.id)}
              />
            </td>
                <td>{timesheet.Date}</td>
                <td>{timesheet.LastFollowUp}</td>
                <td>{timesheet.NextFollowUp}</td>
                <td>{timesheet.Status}</td>
                <td>
                  <ul>
                    {timesheet.AddContact.map((contact, index) => (
                      <li key={index}>{contact}</li>
                    ))}
                  </ul>
                </td>
                <td>
                  <button className="btn btn-warning">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="d-flex justify-content-center">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 && "disabled"}`}>
              <button
                className="page-link"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previous
              </button>
            </li>
            {/* Add pagination logic here */}
            <li
              className={`page-item ${
                currentPage === totalPages && "disabled"
              }`}
            >
              <button
                className="page-link"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
      {showAddNewForm && (
        <AddTimesheet
          onAddTimesheet={handleAddTimesheet}
          onCloseForm={closeAddNewForm}
        />
      )}
    </div>
  );
};

export default TimesheetList;
