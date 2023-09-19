import React, { useState } from "react";
import DashboardLayout from "./DashboardLayout";
import axios from "axios"

const AddFollowup = ({ onSaveFollowup, onClose }) => {
  const [leadId, setLeadId] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [nextFollowUp, setNextFollowUp] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");



  const handleSave = () => {
    
    // Create a new follow-up object with the form data
    const newFollowup = {
      leadId,
      date,
      time,
      nextFollowUp,
      location,
      status,
    };

    // console.log(newFollowup);

    // Call the onSaveFollowup function from the parent component
    // onSaveFollowup(newFollowup);

    // Clear the form fields
    axios.post('http://localhost:3001/api/follow', newFollowup)
    .then((response) => {
      console.log('Follow-up saved successfully:', response.data);
      setLeadId('');
      setDate('');
      setTime('');
      setNextFollowUp('');
      setLocation('');
      setStatus('');
      onClose();
    })
    .catch((error) => {
      console.error('Error saving follow-up:', error);
    });
}


  return (
    <div className="my-4">
      <h2>Add Follow-up</h2>
      <form>
        {/* Lead ID dropdown */}
        <div className="mb-3">
          <label htmlFor="leadId">Lead ID</label>
          <select
            className="form-select"
            id="leadId"
            name="leadId"
            value={leadId}
            onChange={(e) => setLeadId(e.target.value)}
          >
            <option value="">Select Lead ID</option>
            <option value="1"> 1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            {/* Add lead ID options here */}
          </select>
        </div>

        {/* Date input */}
        <div className="mb-3">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        {/* Time input */}
        <div className="mb-3">
          <label htmlFor="time">Time</label>
          <input
            type="time"
            className="form-control"
            id="time"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>

        {/* Next Follow-Up input */}
        <div className="mb-3">
          <label htmlFor="nextFollowUp">Next Follow-Up</label>
          <input
            type="date"
            className="form-control"
            id="nextFollowUp"
            name="nextFollowUp"
            value={nextFollowUp}
            onChange={(e) => setNextFollowUp(e.target.value)}
          />
        </div>

        {/* Location dropdown */}
        <div className="mb-3">
        <label htmlFor="location">Location</label>
<select
  className="form-select"
  id="location"
  name="location"
  value={location}
  onChange={(e) => setLocation(e.target.value)}
>
  <option value="">Select Location</option>
  <option value="Remote">Remote</option>
  <option value="Visited Client at office">Visited Client at office</option>
  {/* Add location options here */}
</select>

        </div>

        {/* Status dropdown */}
        <div className="mb-3">
          <label htmlFor="status">Status</label>
          <select
            className="form-select"
            id="status"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Select Status</option>
            <option value="Intersted">Intersted</option>
            <option value="On Trial">On Trial</option>
            <option value="Onboard">Onboard</option>
            <option value="Cold">Cold</option>
            <option value="Deleted">Deleted</option>

            
            {/* Add status options here */}
          </select>
        </div>

        {/* Save and Cancel buttons */}
        <button
          className="btn btn-success"
          type="button"
          onClick={handleSave}
        >
          Save
        </button>
        <button
          className="btn btn-secondary mx-2"
          type="button"
          onClick={onClose}
        >
          Cancel
        </button>
      </form>
    </div>
    
  );
};

export default AddFollowup;
