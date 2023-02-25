import React from "react";

const PersonalDetails = () => {
    
    return (
        <div className="py-4 px-8 grid grid-cols-[1fr_1fr] gap-3
        bg-component-gray h-fit w-full rounded-xl">
            <h2 className="h-9 col-span-2 text-white text-2xl">Personal Details</h2>
            <input className="h-12 bg-input-box-gray rounded px-3 text-white"
            placeholder="First Name" name="firstName" />
            <input className="h-12 bg-input-box-gray rounded px-3 text-white"
            placeholder="Last Name" 
            name="lastName" />
            <input className="h-12 bg-input-box-gray rounded px-3 col-span-2
            text-white" placeholder="Address" 
            name="address" />
            <input className="h-12 bg-input-box-gray rounded px-3 col-span-2
            text-white" placeholder="Website" 
            name="website" />
            <input className="h-12 bg-input-box-gray rounded px-3 text-white" 
            placeholder="Email" name="email" />
            <input className="h-12 bg-input-box-gray rounded px-3 text-white"
            placeholder="Phone Number" name="phoneNumber" />
            <textarea className="h-32 col-span-2 bg-input-box-gray rounded
            px-3 py-3 text-white" placeholder="Tell something about yourself!" 
            name="introduction" />
        </div>
    )
}

export default PersonalDetails;