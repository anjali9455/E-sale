// import React, { Component } from "react";
// import axios from "axios";

// class AddLeadForm extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             formData: {
//                 FirstName: "",
//                 LastName: "",
//                 address: "",
//                 city: "",
//                 leadType: "",
//                 leadCategory: "",
//                 leadKind: "",
//                 lastFollowUp: "",
//                 nextFollowUp: "",
//                 status: "",
//                 phoneNumbers: [],
//             },
//             createdLead: null,
//         };
//     }

//     handleInputChange = (e) => {
//         const { name, value } = e.target;
//         this.setState({
//             formData: { ...this.state.formData, [name]: value },
//         });
//     };

//     handleAddPhoneNumber = () => {
//         const updatedPhoneNumbers = [...this.state.formData.phoneNumbers, ""];
//         this.setState({
//             formData: { ...this.state.formData, phoneNumbers: updatedPhoneNumbers },
//         });
//     };

//     handlePhoneNumberChange = (e, index) => {
//         const updatedPhoneNumbers = [...this.state.formData.phoneNumbers];
//         updatedPhoneNumbers[index] = e.target.value;

//         this.setState({
//             formData: { ...this.state.formData, phoneNumbers: updatedPhoneNumbers },
//         });
//     };

//     handleSave = async () => {
//         const { onClose, onUpdateLead } = this.props;
//         const { formData } = this.state;

//         // Create a new lead
//         await axios.post("http://localhost:3001/api/lead", formData)
//             .then((response) => {
//                 console.log("New lead created:", response.data);
//                 // onUpdateLead(response.data); // Call the onUpdateLead function to add the new lead to the list
//                 onClose();
//             })
//             .catch((error) => {
//                 console.log("Error creating a new lead:", error);
//                 alert("Failed to create a new lead. Please try again.");
//                 // alert("Failed to create a new lead. Please try again.");
//             });
//     };

//     handleCancel = () => {
//         // Handle cancel action here (e.g., clearing the form fields)
//         this.setState({
//             formData: {
//                 FirstName: "",
//                 LastName: "",
//                 address: "",
//                 city: "",
//                 leadType: "",
//                 leadCategory: "",
//                 leadKind: "",
//                 lastFollowUp: "",
//                 nextFollowUp: "",
//                 status: "",
//                 phoneNumbers: [],
//             },
//         });
//         this.props.onClose(); // Close the Add Lead Form
//     };

//     render() {
//         const { formData } = this.state;

//         return (
//             <div className="container mt-4">
//                 <h1>Add Lead</h1>
//                 {/* <form onSubmit={this.handleSave}> */}
//                 <div>
//                     <div className="mb-3">
//                         <label htmlFor="FirstName" className="form-label">
//                             First Name
//                         </label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="FirstName"
//                             name="FirstName"
//                             value={formData.FirstName}
//                             onChange={this.handleInputChange}
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="LastName" className="form-label">
//                             Last Name
//                         </label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="LastName"
//                             name="LastName"
//                             value={formData.LastName}
//                             onChange={this.handleInputChange}
//                         />
//                     </div>
//                     {/* Add more form fields as needed */}
//                     <div className="mb-3">
//                         <label htmlFor="phoneNumbers" className="form-label">
//                             Phone Numbers
//                         </label>
//                         <div id="phoneNumbers">
//                             {formData.phoneNumbers.map((phoneNumber, index) => (
//                                 <div key={index} className="mb-2">
//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         placeholder="Enter Phone Number"
//                                         value={phoneNumber}
//                                         onChange={(e) => this.handlePhoneNumberChange(e, index)}
//                                     />
//                                 </div>
//                             ))}
//                         </div>
//                         <button
//                             type="button"
//                             className="btn btn-primary"
//                             onClick={this.handleAddPhoneNumber}
//                         >
//                             Add Phone Number
//                         </button>
//                     </div>
//                     <div className="mb-3">
//                         <button
//                             onClick={this.handleSave} type="submit" className="btn btn-success">
//                             Save
//                         </button>
//                         <button
//                             type="button"
//                             className="btn btn-secondary"
//                             onClick={this.handleCancel}
//                         >
//                             Cancel
//                         </button>
//                     </div>
//             </div>
//                 {/* </form> */ }
//             </div >
//         );
//     }
// }

// export default AddLeadForm;

import React, { Component } from "react";

import axios from "axios";
import "../styles/AddUser.css";
class AddLeadForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {
                FirstName: "",
                LastName: "",
                City: "",
                leadType: "",
                NextFollowUp: "",
                Location: "",
                status: "",
                
            },
            createdLead: null,
            error: null, 
        };
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            formData: { ...this.state.formData, [name]: value },
        });
    };

    

  handleSave = async () => {
    console.log('Form Data:', this.state.formData);
    console.log('handleSave function called');
    const { onClose } = this.props;
    const { formData } = this.state;

    if (
      !formData.FirstName ||
      !formData.LastName ||
      !formData.City ||
      !formData.leadType ||
      !formData.NextFollowUp ||
      !formData.Location
    ) {
      console.error('Please fill in all required fields');
      return;
    }

    try {
      await axios.post('http://localhost:3001/api/lead',formData 
        // FirstName: formData.FirstName,
        // LastName: formData.LastName,
        // City: formData.City,
        // leadType: formData.leadType,
        // NextFollowUp: formData.NextFollowUp,
        // Location: formData.Location,
        // // Add other fields as needed
      );

      console.log('New lead created');
      onClose();
    } catch (error) {
      console.error('Error creating a new lead:', error);
      alert('Failed to create a new lead. Please try again.');
    }
  };

  handleCancel = () => {
    this.setState({
        formData: {
            FirstName: "",
            LastName: "",
            City: "",
            leadType: "",
            NextFollowUp: "",
            Location: "",
            status: "",
        }, error: null,
    });

    this.props.onClose();
};


    render() {
        const { formData ,error} = this.state;

        return (  
            <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addLeadModalTitle">
                  Add Lead
                </h5>
                <button type="button" className="close" onClick={this.props.onClose}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="FirstName" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="FirstName"
                      name="FirstName"
                      value={formData.FirstName}
                      onChange={this.handleInputChange}
                    />
                  </div>
    
                    <div className="mb-3">
                        <label htmlFor="LastName" className="form-label">
                            Last Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="LastName"
                            name="LastName"
                            value={formData.LastName}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="city" className="form-label">
                            City
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="City"
                            name="City"
                            value={formData.City}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="leadType" className="form-label">
                            Lead Type
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="leadType"
                            name="leadType"
                            value={formData.leadType}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nextFollowUp" className="form-label">
                            Next Follow-Up
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            id="NextFollowUp"
                            name="NextFollowUp"
                            value={formData.NextFollowUp}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="location" className="form-label">
                            Location
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="location"
                            name="Location"
                            value={formData.Location}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                <label htmlFor="status" className="form-label">
                  Status
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={this.handleInputChange}
                />
              </div>
                    
                        {/* <button
                            onClick={this.handleSave}
                            type="button"
                            className="btn btn-success"
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={this.handleCancel}
                        >
                            Cancel
                        </button> */}
                        </form>

                   
                        {error && <div className="alert alert-danger">{error}</div>}
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={this.handleCancel}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleSave}
          > Save
          </button>
        </div>
      </div>
    </div>
  );
}
}

export default AddLeadForm;;
