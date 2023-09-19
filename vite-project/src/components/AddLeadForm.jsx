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

class AddLeadForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {
                FirstName: "",
                LastName: "",
                city: "",
                leadType: "",
                nextFollowUp: "",
                location: "",
                status: "",
            },
            createdLead: null,
        };
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            formData: { ...this.state.formData, [name]: value },
        });
    };

    handleSave = async () => {
        const { onClose, onUpdateLead } = this.props;
        const { formData } = this.state;
        if (
            !formData.FirstName ||
            !formData.LastName ||
            !formData.City ||
            !formData.LeadType ||
            !formData.NextFollowUp ||
            !formData.Location
          ) {
            alert('Please fill in all required fields.');
            return;
          }
        // Create a new lead
        await axios.post("http://localhost:3001/api/lead", {FirstName: formData.FirstName,
        LastName: formData.LastName,
        city: formData.City,
        leadType: formData.LeadType,
        nextFollowUp: formData.NextFollowUp,
        location: formData.Location,})
            .then((response) => {
                console.log("New lead created:", response.data);
                // onUpdateLead(response.data); // Call the onUpdateLead function to add the new lead to the list
                onClose();
            })
            .catch((error) => {
                console.log("Error creating a new lead:", error);
                alert("Failed to create a new lead. Please try again.");
            });
    };

    handleCancel = () => {
        // Handle cancel action here (e.g., clearing the form fields)
        this.setState({
            formData: {
                FirstName: "",
                LastName: "",
                city: "",
                leadType: "",
                nextFollowUp: "",
                location: "",
                status: "",
            },
        });
        this.props.onClose(); // Close the Add Lead Form
    };

    render() {
        const { formData } = this.state;

        return (
            <div className="container mt-4">
                <h1>Add Lead</h1>
                <div>
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
                            id="city"
                            name="city"
                            value={formData.city}
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
                            id="nextFollowUp"
                            name="nextFollowUp"
                            value={formData.nextFollowUp}
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
                            name="location"
                            value={formData.location}
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
                    <div className="mb-3">
                        <button
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
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddLeadForm;
