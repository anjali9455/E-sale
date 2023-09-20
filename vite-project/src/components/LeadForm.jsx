// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import AddLeadForm from "./AddLeadForm"; // Adjust the import path as needed

// const LeadForm = () => {
//   const [leads, setLeads] = useState([]); // Your lead data state
//   const [showAddLeadForm, setShowAddLeadForm] = useState(false); // State for showing/hiding Add Lead Form
//   const [filters, setFilters] = useState({
//     firstname: "",
//     lastname: "",
//     city: "",
//     type: "",
//     // Add more filter fields as needed
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10; // Number of items to show per page

//   // Handle filter changes
//   const handleFilterChange = (e) => {
//     const { firstname, value } = e.target;
//     setFilters({ ...filters, [firstname]: value });
//   };

//   // Implement filtering logic based on filter values
//   const filteredLeads = leads.filter((lead) => {
//     // Implement your filter logic here
//     return (
//       lead.firstname.includes(filters.firstname) &&
//       lead.lastname.includes(filters.lastname) &&
//       lead.city.includes(filters.city) &&
//       lead.type.includes(filters.type)
//       // Add more filter conditions as needed
//     );
//   });

//   // Calculate the total number of pages
//   const totalPages = Math.ceil(filteredLeads.length / itemsPerPage);

//   // Calculate the start and end indices for the current page
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;

//   // Get the current page's data
//   const currentLeads = filteredLeads.slice(startIndex, endIndex);

//   // Handle page change
//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };

//   // Function to open Add Lead Form
//   const openAddLeadForm = () => {
//     setShowAddLeadForm(true);
//   };

//   // Function to close Add Lead Form
//   const closeAddLeadForm = () => {
//     setShowAddLeadForm(false);
//   };

//   return (
    
//     <div className="container mt-4">
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h1>Lead List</h1>
//         <div className="d-flex">
//           <div className="input-group me-2">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Search..."
//               firstname="firstname"
//               value={filters.firstname}
//               onChange={handleFilterChange}
//             />
//             <button className="btn btn-outline-secondary" type="button">
//               <i className="bi bi-filter"></i> Filter
//             </button>
//           </div>
//           <button className="btn btn-primary" onClick={openAddLeadForm}>
//             + Add Lead
//           </button>
//         </div>
//       </div>
//       {/* Lead table */}
//       <div className="table-responsive">
//         <table className="table table-success table-striped">
//           {/* Table headers */}
//           <thead>
//             <tr>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>City</th>
//               <th>Type</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           {/* Table body */}
//           <tbody>
//             {/* Map through current page's leads */}
//             {currentLeads.map((lead) => (
//               <tr key={lead.id}>
//                 <td>{lead.Firstname}</td>
//                 <td>{lead.Lastname}</td>
//                 <td>{lead.city}</td>
//                 <td>{lead.type}</td>
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
//                 className={`page-item ${
//                   currentPage === index + 1 && "active"
//                 }`}
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
//       {showAddLeadForm && <AddLeadForm onClose={closeAddLeadForm} />}
//     </div>
//     );
// };

// export default LeadForm;
// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import AddLeadForm from "./AddLeadForm"; // Adjust the import path as needed

// const LeadForm = () => {
//   const [leads, setLeads] = useState([]); // Your lead data state
//   const [showAddLeadForm, setShowAddLeadForm] = useState(false); // State for showing/hiding Add Lead Form
//   const [filters, setFilters] = useState({
//     firstname: "",
//     lastname: "",
//     city: "",
//     type: "",
//     // Add more filter fields as needed
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10; // Number of items to show per page

//   // Handle filter changes
//   const handleFilterChange = (e) => {
//     const { firstname, value } = e.target;
//     setFilters({ ...filters, [firstname]: value });
//   };

//   // Implement filtering logic based on filter values
//   const filteredLeads = leads.filter((lead) => {
//     // Implement your filter logic here
//     return (
//       lead.FirstName.includes(filters.firstname) &&
//       lead.LastName.includes(filters.lastname) &&
//       lead.city.includes(filters.city) &&
//       lead.leadType.includes(filters.type)
//       // Add more filter conditions as needed
//     );
//   });

//   // Calculate the total number of pages
//   const totalPages = Math.ceil(filteredLeads.length / itemsPerPage);

//   // Calculate the start and end indices for the current page
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;

//   // Get the current page's data
//   const currentLeads = filteredLeads.slice(startIndex, endIndex);

//   // Handle page change
//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };

//   // Function to open Add Lead Form
//   const openAddLeadForm = () => {
//     setShowAddLeadForm(true);
//   };

//   // Function to close Add Lead Form
//   const closeAddLeadForm = () => {
//     setShowAddLeadForm(false);
//   };

//   return (
//     <div className="container mt-4">
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h1>Lead List</h1>
//         <div className="d-flex">
//           <div className="input-group me-2">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Search..."
//               firstname="firstname"
//               value={filters.firstname}
//               onChange={handleFilterChange}
//             />
//             <button className="btn btn-outline-secondary" type="button">
//               <i className="bi bi-filter"></i> Filter
//             </button>
//           </div>
//           <button className="btn btn-primary" onClick={openAddLeadForm}>
//             + Add Lead
//           </button>
//         </div>
//       </div>
//       {/* Lead table */}
//       <div className="table-responsive">
//         <table className="table table-success table-striped">
//           {/* Table headers */}
//           <thead>
//             <tr>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>City</th>
//               <th>Type</th>
//               <th>Next Follow-Up</th>
//               <th>Location</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           {/* Table body */}
//           <tbody>
//             {/* Map through current page's leads */}
//             {currentLeads.map((lead) => (
//               <tr key={lead.id}>
//                 <td>{lead.FirstName}</td>
//                 <td>{lead.LastName}</td>
//                 <td>{lead.city}</td>
//                 <td>{lead.leadType}</td>
//                 <td>{lead.nextFollowUp}</td>
//                 <td>{lead.location}</td>
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
//                 className={`page-item ${
//                   currentPage === index + 1 && "active"
//                 }`}
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
//       {showAddLeadForm && <AddLeadForm onClose={closeAddLeadForm} />}
//     </div>
//   );
// };

// export default LeadForm;
// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import AddLeadForm from "./AddLeadForm"; // Adjust the import path as needed

// const LeadForm = () => {
//   const [leads, setLeads] = useState([]); // Your lead data state
//   const [showAddLeadForm, setShowAddLeadForm] = useState(false); // State for showing/hiding Add Lead Form
//   const [filters, setFilters] = useState({
//     firstname: "",
//     lastname: "",
//     city: "",
//     type: "",
//     // Add more filter fields as needed
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10; // Number of items to show per page

//   // Handle filter changes
//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters({ ...filters, [name]: value });
//   };

//   useEffect(() => {
//     // Fetch leads data from your backend API
//     fetch("http://localhost:3001/api/lead")
//       .then((response) => response.json())
//       .then((data) => {
//         // Update the leads state with the fetched data
//         setLeads(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching leads:", error);
//       });
//   }, []); // Empty dependency array to fetch data once when the component mounts

//   // Function to open Add Lead Form
//   const openAddLeadForm = () => {
//     setShowAddLeadForm(true);
//   };

//   // Function to close Add Lead Form
//   const closeAddLeadForm = () => {
//     setShowAddLeadForm(false);
//   };

//   // Implement filtering logic based on filter values
//   const filteredLeads = leads.filter((lead) => {
//     // Implement your filter logic here
//     return (
//       (lead.FirstName && lead.FirstName.includes(filters.firstname)) &&
//       (lead.LastName && lead.LastName.includes(filters.lastname)) &&
//       (lead.city && lead.city.includes(filters.city)) &&
//       (lead.leadType && lead.leadType.includes(filters.type))
//       // Add more filter conditions as needed
//     );
//   });

//   // Calculate the total number of pages
//   const totalPages = Math.ceil(filteredLeads.length / itemsPerPage);

//   // Calculate the start and end indices for the current page
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;

//   // Get the current page's data
//   const currentLeads = filteredLeads.slice(startIndex, endIndex);

//   // Handle page change
//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);


//   };
//  const handleSaveLead = (newLead) => {
//     // Implement the logic to save the new lead (e.g., send a POST request to your API)
//     // After saving, you can update the leads state if necessary
//     // For example, you can append the new lead to the leads array
//     setLeads([...leads, newLead]);

//     // Close the Add Lead Form
//     closeAddLeadForm();
//   }
//   return (
//     <div className="container mt-4">
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h1>Lead List</h1>
//         <div className="d-flex">
//           <div className="input-group me-2">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Search..."
//               name="firstname"
//               value={filters.firstname}
//               onChange={handleFilterChange}
//             />
//             <button className="btn btn-outline-secondary" type="button">
//               <i className="bi bi-filter"></i> Filter
//             </button>
//           </div>
//           <button className="btn btn-primary" onClick={openAddLeadForm}>
//             + Add Lead
//           </button>
//         </div>
//       </div>
      
//       {/* Lead table */}
//       <div className="table-responsive">
//         <table className="table table-success table-striped">
//           {/* Table headers */}
//           <thead>
//             <tr>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>City</th>
//               <th>Type</th>
//               <th>Next Follow-Up</th>
//               <th>Location</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           {/* Table body */}
//           <tbody>
//             {/* Map through current page's leads */}
//             {currentLeads.map((lead) => (
//               <tr key={lead._id}>
//                 <td>{lead.FirstName || ""}</td>
//                 <td>{lead.LastName || ""}</td>
//                 <td>{lead.city || ""}</td>
//                 <td>{lead.leadType || ""}</td>
//                 <td>{lead.nextFollowUp || ""}</td>
//                 <td>{lead.location || ""}</td>
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
//                 className={`page-item ${
//                   currentPage === index + 1 && "active"
//                 }`}
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
//       {showAddLeadForm && <AddLeadForm onSaveLead={handleSaveLead}  onClose={closeAddLeadForm} />}
//     </div>
//   );
// };

// export default LeadForm;
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddLeadForm from "./AddLeadForm"; // Adjust the import path as needed

const LeadForm = () => {
  const [leads, setLeads] = useState([]); // Your lead data state
  const [currentPage, setCurrentPage] = useState(1);
  const [leadsPerPage] = useState(5); // Set the number of leads per page
  const [showAddLeadForm, setShowAddLeadForm] = useState(false); // State for showing/hiding Add Lead Form
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetch leads data from your backend API
    fetch("http://localhost:3001/api/lead")
      .then((response) => response.json())
      .then((data) => {
        // Update the leads state with the fetched data
        setLeads(data);
      })
      .catch((error) => {
        console.error("Error fetching leads:", error);
      });
  }, []); // Empty dependency array to fetch data once when the component mounts

  const indexOfLastLead = currentPage * leadsPerPage;
  const indexOfFirstLead = indexOfLastLead - leadsPerPage;
  const currentLeads = leads.slice(indexOfFirstLead, indexOfLastLead);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Function to open Add Lead Form
  const openAddLeadForm = () => {
    setShowAddLeadForm(true);
  };

  // Function to close Add Lead Form
  const closeAddLeadForm = () => {
    setShowAddLeadForm(false);
  };

  const handleSaveLead = (newLead) => {
    // Implement the logic to save the new lead (e.g., send a POST request to your API)
    // After saving, you can update the leads state if necessary
    // For example, you can append the new lead to the leads array
    setLeads([...leads, newLead]);

    // Close the Add Lead Form
    closeAddLeadForm();
  };

  const handleCheckboxChange = (leadId) => {
    // Implement the logic to handle checkbox changes here
    // You can update the selected leads based on their IDs
    // For example, maintain a list of selected lead IDs in the component state
  };


  

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Lead List</h1>
        <div className="d-flex">
          {/* <button onClick={()=>formOpen()} className="btn btn-primary">
         
            + Add Lead
          </button> */}
         
          <div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleToggleModal}
      >
        Add Lead
      </button>

      {showModal && (
        <div
          className="modal fade show"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
               Add lead
                
              </div>
              <div className="modal-body">
                gf
              </div>
              {/* <div className="modal-body">...</div> */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleToggleModal}
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
          <button className="btn btn-danger ml-2">Delete</button>
        </div>
      </div>

      {leads.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="table-responsive">
            <table className="table table-success table-striped">
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" /> {/* Header checkbox */}
                  </th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>City</th>
                  <th>Type</th>
                  <th>Next Follow-Up</th>
                  <th>Location</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {currentLeads.map((lead) => (
                  <tr key={lead._id}>
                    <td>
                      <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange(lead._id)}
                      />
                    </td>
                    <td>{lead.FirstName || ""}</td>
                    <td>{lead.LastName || ""}</td>
                    <td>{lead.City || ""}</td>
                    <td>{lead.leadType || ""}</td>
                    <td>{lead.NextFollowUp || ""}</td>
                    <td>{lead.Location || ""}</td>
                    <td>
                      <button className="btn btn-warning">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <nav aria-label="Page navigation">
            <ul className="pagination">
              {Array.from({ length: Math.ceil(leads.length / leadsPerPage) }).map(
                (_, index) => (
                  <li
                    key={index}
                    className={`page-item ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => paginate(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </li>
                )
              )}
            </ul>
          </nav>

     
          <AddLeadForm onSaveLead={handleSaveLead} onClose={closeAddLeadForm} />
         
        </div>
      )}
    </div>
  );
};

export default LeadForm;
