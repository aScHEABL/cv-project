import React from "react";
import { useCvContext } from "../context/cvContext";

const PersonalDetails = () => {
    const [cvState, dispatch] = useCvContext();
    const handleChange = (key, value) => {
        console.log(cvState);
        dispatch({ type: `${key}`, payload: { [key]: value } });
    }

    return (
        <div className="py-4 px-8 grid grid-cols-[1fr_1fr] gap-3
        bg-component-gray h-fit w-full rounded-xl">
            <h2 className="h-9 col-span-2 text-white text-2xl">Personal Details</h2>
            <input className="h-12 bg-input-box-gray rounded px-3 text-white"
            placeholder="First Name" name="firstName" value={cvState.firstName}
            onChange={(e) => handleChange('firstName', e.target.value)} />
            <input className="h-12 bg-input-box-gray rounded px-3 text-white"
            placeholder="Last Name" name="lastName" value={cvState.lastName} 
            onChange={(e) => handleChange('lastName', e.target.value)} />
            <input className="h-12 bg-input-box-gray rounded px-3 col-span-2
            text-white" placeholder="Address" name="address"
            value={cvState.address} 
            onChange={(e) => handleChange('address', e.target.value)} />
            <input className="h-12 bg-input-box-gray rounded px-3 col-span-2
            text-white" placeholder="Website" name="website" 
            value={cvState.website}
            onChange={(e) => handleChange('website', e.target.value)} />
            <input className="h-12 bg-input-box-gray rounded px-3 text-white" 
            placeholder="Email" name="email" value={cvState.email}
            onChange={(e) => handleChange('email', e.target.value)} />
            <input className="h-12 bg-input-box-gray rounded px-3 text-white"
            placeholder="Phone Number" name="phoneNumber" value={cvState.phone}
            onChange={(e) => handleChange('phone', e.target.value)} />
            <textarea className="h-32 col-span-2 bg-input-box-gray rounded
            px-3 py-3 text-white" placeholder="Tell something about yourself!" 
            name="introduction" value={cvState.intro}
            onChange={(e) => handleChange('intro', e.target.value)} />
        </div>
    )
}

export default PersonalDetails;