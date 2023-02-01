import React, { Component } from "react";

class PersonalDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="py-4 px-8 grid grid-cols-[1fr_1fr] gap-3 bg-component-gray h-fit w-full rounded-xl">
                <h2 className="h-9 col-span-2 text-white text-2xl">Personal Details</h2>
                <input className="h-12 bg-input-box-gray rounded px-3" placeholder="First Name" />
                <input className="h-12 bg-input-box-gray rounded px-3" placeholder="Last Name" />
                <input className="h-12 bg-input-box-gray rounded px-3 col-span-2" placeholder="Address" />
                <input className="h-12 bg-input-box-gray rounded px-3 col-span-2" placeholder="Website" />
                <input className="h-12 bg-input-box-gray rounded px-3" placeholder="Email" />
                <input className="h-12 bg-input-box-gray rounded px-3" placeholder="Number" />
                <textarea className="h-32 col-span-2 bg-input-box-gray rounded px-3 py-3" placeholder="Tell something about yourself!" />
            </div>
        )
    }
}

export default PersonalDetails;