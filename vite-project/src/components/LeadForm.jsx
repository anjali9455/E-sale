
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddLeadForm from "./AddLeadForm"; // Adjust the import path as needed
import axios from "axios"; 
const LeadForm = () => {
  const [leads, setLeads] = useState([]); // Your lead data state
  const [currentPage, setCurrentPage] = useState(1);
  const [leadsPerPage] = useState(5); // Set the number of leads per page
  const [showAddLeadForm, setShowAddLeadForm] = useState(false); // State for showing/hiding Add Lead Form
  const [editLeadData, setEditLeadData] = useState(null); 
  const [showModal, setShowModal] = useState(false);
  const [selectedLeadIds, setSelectedLeadIds] = useState([])
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


  const handleCheckboxChange = (leadId) => {
    // Implement the logic to handle checkbox changes here
    // You can update the selected leads based on their IDs
    // For example, maintain a list of selected lead IDs in the component state
  };

  const openAddLeadModel = (LeadIds) => {
    // const modal = document.getElementById("exampleModalLong");
    // if (modal) {
    //   modal.classList.add("show");
    //   modal.style.display = "block";
    //   document.body.classList.add("modal-open");
    //   setShowAddNewForm(true);
    // } else {
    //   console.error("Modal element not found.");
    // }
    setSelectedLeadIds(LeadIds);
    setShowAddLeadForm(LeadIds);
  };
  const handleSaveLead = async (newLead) => {
    try {
      // Remove the `_id` field before saving
      delete newLead._id;
  
      // Create a new lead instance
      const lead = new LeadModel(newLead);
  
      // Save the lead
      await lead.save();
  
      // Update the leads state if necessary
      setLeads([...leads, lead]);
  
      // Close the Add Lead Form
      closeAddLeadForm();
    } catch (error) {
      console.error('Error creating lead:', error);
    }
  };
  

  const handleDeleteLead = (leadId) => {
    // Implement the logic to delete a lead
    // Send a DELETE request to your API to delete the lead with the given leadId
    axios
      .delete(`http://localhost:3001/api/lead/${leadId}`)
      .then(() => {
        // Update your leads state after deletion
        setLeads((prevLeads) => prevLeads.filter((lead) => lead._id !== leadId));
      })
      .catch((error) => {
        console.error(`Error deleting lead with ID ${leadId}:`, error);
        alert(`Failed to delete lead with ID ${leadId}. Please try again.`);
      });
  };

  const closeAddLeadModal = () => {
    // Clear the selected user for editing
    setSelectedLeadIds(null);
    setShowAddLeadForm(false);
  };
  const handleToggleModal = () => {
    setShowModal(!showModal);
  };
  const deleteSelectedleads = () => {
    // Implement the logic to delete selected leads here
    // You can use the selectedLeadIds state to determine which leads to delete
    // For example, send a DELETE request to your API for each selected lead
    selectedLeadIds.forEach(async (leadId) => {
      try {
        await axios.delete(`http://localhost:3001/api/lead/${leadId}`);
        // Update your leads state after deletion
        setLeads((prevLeads) => prevLeads.filter((lead) => lead._id !== leadId));
      } catch (error) {
        console.error(`Error deleting lead with ID ${leadId}:`, error);
        alert(`Failed to delete lead with ID ${leadId}. Please try again.`);
      }
    });  const handleEditLead = (lead) => {
      setEditLeadData(lead);
      setShowAddLeadForm(true);
    };
  }; 
  const handleEditLead = (lead) => {
    setEditLeadData(lead);
    setShowAddLeadForm(true);
  };

  const handleUpdateLead = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3001/api/lead/${editLeadData._id}`,
        editLeadData
      );
      console.log("Lead updated successfully");

      // Update the leads state with the updated lead
      setLeads((prevLeads) =>
        prevLeads.map((lead) =>
          lead._id === editLeadData._id ? editLeadData : lead
        )
      );

      // Close the Add Lead Form
      closeAddLeadModal();
    } catch (error) {
      console.error("Error updating lead:", error);
      alert("Failed to update the lead. Please try again.");
    }
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
        onClick={openAddLeadForm}
      >
        Add Lead
      </button>
    </div>
          
    <button className="btn btn-danger ml-2" onClick={deleteSelectedleads}>Delete</button>
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
                     
            <button className="btn btn-warning" onClick={() => handleEditLead(lead)}>Edit</button>
                    </td>
                    <td>
              <button
                className="btn btn-danger"
                onClick={() => handleDeleteLead(lead._id)}
              >
                Delete
              </button>
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

   {showAddLeadForm && (
  <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}>
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">   {editLeadData ? "Edit Lead" : "Add Lead"}</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeAddLeadModal}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
        <AddLeadForm
  onSaveLead={handleSaveLead}
  onClose={closeAddLeadModal}
  editLeadData={editLeadData}  
  onUpdateLead={handleUpdateLead}// Pass editLeadData as a prop
/>
        </div>
      </div>
    </div>
  </div>
)}


          {/* <AddLeadForm onSaveLead={handleSaveLead} onClose={closeAddLeadForm} /> */}
        </div>
      )}
    </div>
  );
};

export default LeadForm;