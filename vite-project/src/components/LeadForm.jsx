import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddLeadForm from "./AddLeadForm"; // Adjust the import path as needed

const LeadForm = () => {
  const [leads, setLeads] = useState([]); // Your lead data state
  const [showAddLeadForm, setShowAddLeadForm] = useState(false); // State for showing/hiding Add Lead Form
  const [filters, setFilters] = useState({
    name: "",
    address: "",
    city: "",
    type: "",
    // Add more filter fields as needed
  });
  const [currentPage, setCurrentPage] = useState(1);
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
      lead.name.includes(filters.name) &&
      lead.address.includes(filters.address) &&
      lead.city.includes(filters.city) &&
      lead.type.includes(filters.type)
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

  // Function to open Add Lead Form
  const openAddLeadForm = () => {
    setShowAddLeadForm(true);
  };

  // Function to close Add Lead Form
  const closeAddLeadForm = () => {
    setShowAddLeadForm(false);
  };

  return (
    
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Lead List</h1>
        <div className="d-flex">
          <div className="input-group me-2">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              name="name"
              value={filters.name}
              onChange={handleFilterChange}
            />
            <button className="btn btn-outline-secondary" type="button">
              <i className="bi bi-filter"></i> Filter
            </button>
          </div>
          <button className="btn btn-primary" onClick={openAddLeadForm}>
            + Add Lead
          </button>
        </div>
      </div>
      {/* Lead table */}
      <div className="table-responsive">
        <table className="table table-success table-striped">
          {/* Table headers */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>City</th>
              <th>Type</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody>
            {/* Map through current page's leads */}
            {currentLeads.map((lead) => (
              <tr key={lead.id}>
                <td>{lead.name}</td>
                <td>{lead.address}</td>
                <td>{lead.city}</td>
                <td>{lead.type}</td>
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
      {showAddLeadForm && <AddLeadForm onClose={closeAddLeadForm} />}
    </div>
    );
};

export default LeadForm;
