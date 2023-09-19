// import React, { useState } from "react";
// import axios from "axios";
// const AddTimesheet = ({ onAddTimesheet, onCloseForm }) => {
//   // Define state variables for form fields
//   const [date, setDate] = useState("");
//   const [lastFollowUp, setLastFollowUp] = useState("");
//   const [nextFollowUp, setNextFollowUp] = useState("");
//   const [status, setStatus] = useState("");
//   const [addContact, setAddContact] = useState("");
//   const [contacts, setContacts] = useState([]);
//   const [deleteFormData, setDeleteFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     designation: "",
//     role: "",
//     influenceLevel: "",
//   });

//   // Handle adding a contact to the list
//   const handleAddContact = () => {
//     if (addContact.trim() !== "") {
//       setContacts([...contacts, addContact.trim()]);
//       setAddContact("");
//     }
//   };

//   // Handle deleting a contact from the list
//   const handleDeleteContact = (index) => {
//     const updatedContacts = [...contacts];
//     updatedContacts.splice(index, 1);
//     setContacts(updatedContacts);
//   };

//   // Handle saving the timesheet
//   const handleSave = () => {
//     // Create a new timesheet object with the form data
//     const newTimesheet = {
//       Date :date,
//       LastFollowUp :lastFollowUp,
//       NextFollowUp: nextFollowUp,
//       Status: [status],
//       AddContact: contacts,
//     //   deleteFormData,
//     };
//     axios
//     .post("http://localhost:3001/api/timesheet", newTimesheet)
//     .then((response) => {
//       console.log("Timesheet created:", response.data);
//       onAddTimesheet(response.data); // Assuming this function adds the new Timesheet to your UI
//       onClose();
//     })
//     .catch((error) => {
//       console.error("Error creating Timesheet:", error);
//       alert("Failed to create Timesheet. Please try again.");
//     });
//     // Call the onAddTimesheet function from the parent component
//     onAddTimesheet(newTimesheet);

//     // Clear the form fields
//     setDate("");
//     setLastFollowUp("");
//     setNextFollowUp("");
//     setStatus("");
//     setContacts([]);
//     setAddContact("");
//     setDeleteFormData({
//       name: "",
//       email: "",
//       phone: "",
//       designation: "",
//       role: "",
//       influenceLevel: "",
//     });
//   };

//   return (
//     <div className="my-4">
//       <h2>Add New Timesheet</h2>
//       <form>
//         {/* Date input */}
//         <div className="mb-3">
//           <label htmlFor="date">Date</label>
//           <input
//             type="date"
//             className="form-control"
//             id="date"
//             name="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />
//         </div>

//         {/* Last Follow-Up input */}
//         <div className="mb-3">
//           <label htmlFor="lastFollowUp">Last Follow-Up</label>
//           <input
//             type="date"
//             className="form-control"
//             id="lastFollowUp"
//             name="lastFollowUp"
//             value={lastFollowUp}
//             onChange={(e) => setLastFollowUp(e.target.value)}
//           />
//         </div>

//         {/* Next Follow-Up input */}
//         <div className="mb-3">
//           <label htmlFor="nextFollowUp">Next Follow-Up</label>
//           <input
//             type="text"
//             className="form-control"
//             id="nextFollowUp"
//             name="nextFollowUp"
//             value={nextFollowUp}
//             onChange={(e) => setNextFollowUp(e.target.value)}
//           />
//         </div>

//         {/* Status dropdown */}
//         <div className="mb-3">
//           <label htmlFor="status">Status</label>
//           <select
//             className="form-select"
//             id="status"
//             name="status"
//             value={status}
//             onChange={(e) => setStatus(e.target.value)}
//           >
//             <option value="">Select Status</option>
//             {/* Add status options here */}
//           </select>
//         </div>

//         {/* Add Contact input */}
//         <div className="mb-3">
//           <label htmlFor="addContact">Add Contact</label>
//           <div className="input-group">
//             <input
//               type="text"
//               className="form-control"
//               id="addContact"
//               name="addContact"
//               value={addContact}
//               onChange={(e) => setAddContact(e.target.value)}
//             />
//             <button
//               className="btn btn-success"
//               type="button"
//               onClick={handleAddContact}
//             >
//               Add Contact
//             </button>
//           </div>
//         </div>

//         {/* Display the added contacts */}
//         <div className="mb-3">
//           <label>Added Contacts:</label>
//           <ul className="list-group">
//             {contacts.map((contact, index) => (
//               <li
//                 key={index}
//                 className="list-group-item d-flex justify-content-between align-items-center"
//               >
//                 {contact}
//                 <button
//                   className="btn btn-danger btn-sm"
//                   type="button"
//                   onClick={() => handleDeleteContact(index)}
//                 >
//                   Delete
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Delete Form */}
//         <div className="mb-3">
//           <h3>Delete Form</h3>
//           {/* Name */}
//           <div className="mb-3">
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               className="form-control"
//               id="name"
//               name="name"
//               value={deleteFormData.name}
//               onChange={(e) =>
//                 setDeleteFormData({ ...deleteFormData, name: e.target.value })
//               }
//             />
//           </div>
//           {/* Email */}
//           <div className="mb-3">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               name="email"
//               value={deleteFormData.email}
//               onChange={(e) =>
//                 setDeleteFormData({ ...deleteFormData, email: e.target.value })
//               }
//             />
//           </div>
//           {/* Phone */}
//           <div className="mb-3">
//             <label htmlFor="phone">Phone</label>
//             <input
//               type="tel"
//               className="form-control"
//               id="phone"
//               name="phone"
//               value={deleteFormData.phone}
//               onChange={(e) =>
//                 setDeleteFormData({ ...deleteFormData, phone: e.target.value })
//               }
//             />
//           </div>
//           {/* Designation */}
//           <div className="mb-3">
//             <label htmlFor="designation">Designation</label>
//             <input
//               type="text"
//               className="form-control"
//               id="designation"
//               name="designation"
//               value={deleteFormData.designation}
//               onChange={(e) =>
//                 setDeleteFormData({
//                   ...deleteFormData,
//                   designation: e.target.value,
//                 })
//               }
//             />
//           </div>
//           {/* Role */}
//           <div className="mb-3">
//             <label htmlFor="role">Role in Company</label>
//             <select
//               className="form-select"
//               id="role"
//               name="role"
//               value={deleteFormData.role}
//               onChange={(e) =>
//                 setDeleteFormData({ ...deleteFormData, role: e.target.value })
//               }
//             >
//               <option value="">Select Role</option>
//               {/* Add role options here */}
//             </select>
//           </div>
//           {/* Influence Level */}
//           <div className="mb-3">
//             <label htmlFor="influenceLevel">Influence Level</label>
//             <select
//               className="form-select"
//               id="influenceLevel"
//               name="influenceLevel"
//               value={deleteFormData.influenceLevel}
//               onChange={(e) =>
//                 setDeleteFormData({
//                   ...deleteFormData,
//                   influenceLevel: e.target.value,
//                 })
//               }
//             >
//               <option value="">Select Influence Level</option>
//               {/* Add influence level options here */}
//             </select>
//           </div>
//         </div>

//         {/* Save and Cancel buttons */}
//         <button
//           className="btn btn-success"
//           type="button"
//           onClick={handleSave}
//         >
//           Save
//         </button>
//         <button
//           className="btn btn-secondary mx-2"
//           type="button"
//           onClick={onCloseForm}
//         >
//           Cancel
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddTimesheet;
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
          <button className="btn btn-danger ml-2" onClick={deleteSelectedTimesheets}>
            Delete
          </button>
        </div>
      </div>
      {/* Timesheet table */}
      <div className="table-responsive">
        <table className="table table-success table-striped">
          {/* Table headers */}
          <thead>
            <tr>
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
