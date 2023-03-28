import React from "react";
import { useCvContext } from "../context/cvContext";

const Education = () => {
    const [cvState, dispatch] = useCvContext();
    const handleChange = (key, value) => {
        dispatch({ type: 'UPDATE_EDUCATION', key: key, value: value });
    }

    return (
        <div className="py-4 px-8 gap-3 grid grid-cols-[1fr_1fr] bg-component-gray
        h-fit w-full rounded-xl">
            <h2 className="h-9 col-span-2 text-white text-2xl">Education</h2>
            <input className="bg-input-box-gray h-12 rounded px-3 text-white"
            placeholder="School" 
            name="school" value={cvState.education.school} 
            onChange={(e) => handleChange(e.target.name, e.target.value)} />
            <input className="bg-input-box-gray h-12 rounded px-3 text-white"
            placeholder="Degree" name="degree" value={cvState.education.degree}
            onChange={(e) => handleChange(e.target.name, e.target.value)} />
            <div className="flex w-full h-fit gap-3 justify-between items-center">
                {/* <label className="text-white w-full">Start & End Date</label> */}
                <input type="date" className="bg-input-box-gray w-28 h-12 rounded px-3 text-white" 
                placeholder="MM/YYYY" name="startDate" value={cvState.education.startDate}
                onChange={(e) => handleChange(e.target.name, e.target.value)} />
                <label className="text-white">to</label>
                <input type="date" className="bg-input-box-gray w-28 h-12 rounded px-3 text-white" 
                placeholder="MM/YYYY" name="endDate" value={cvState.education.endDate}
                onChange={(e) => handleChange(e.target.name, e.target.value)} />
            </div>
            <input className="bg-input-box-gray h-12 rounded px-3 text-white" 
            placeholder="City" name="city" value={cvState.education.city}
            onChange={(e) => handleChange(e.target.name, e.target.value)} />
        </div>
    )
}

export default Education;