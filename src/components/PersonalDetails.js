import React, { Component } from "react";

class PersonalDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="py-4 px-8 grid grid-cols-[1fr_1fr] gap-3 bg-component-gray h-fit w-full rounded-xl">
                <h2 className="h-9 col-span-2 text-white text-2xl">Personal Details</h2>
                <input className="h-12 bg-input-box-gray rounded px-3 text-white" placeholder="First Name" 
                onChange={this.handleChange} name="firstName" />
                <input className="h-12 bg-input-box-gray rounded px-3 text-white" placeholder="Last Name" 
                onChange={this.handleChange} name="lastName" />
                <input className="h-12 bg-input-box-gray rounded px-3 col-span-2 text-white" placeholder="Address" 
                onChange={this.handleChange} name="address" />
                <input className="h-12 bg-input-box-gray rounded px-3 col-span-2 text-white" placeholder="Website" 
                onChange={this.handleChange} name="website" />
                <input className="h-12 bg-input-box-gray rounded px-3 text-white" placeholder="Email" 
                onChange={this.handleChange} name="email" />
                <input className="h-12 bg-input-box-gray rounded px-3 text-white" placeholder="Phone Number" 
                onChange={this.handleChange} name="phoneNumber" />
                <textarea className="h-32 col-span-2 bg-input-box-gray rounded px-3 py-3 text-white" placeholder="Tell something about yourself!" 
                onChange={this.handleChange} name="introduction" />
            </div>
        )
    }
}

export default PersonalDetails;