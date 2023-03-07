import React from "react";
import { useCvContext } from "../context/cvContext";

const Employment = () => {
    const [cvState, dispatch] = useCvContext();
    const handleChange = (key, value) => {
        dispatch({ type: `${key}`, payload: { [key]: value } });
    }

    
    return(
        <div className="py-4 px-8 gap-3 grid grid-cols-[1fr_1fr] 
        bg-component-gray h-fit w-full rounded-xl">
            <h2 className="h-9 col-span-2 text-white text-2xl">Employment History</h2>
            <label className="text-white col-span-2">Work Experience #1</label>
            <input className="bg-input-box-gray h-12 rounded px-3 text-white" 
            placeholder="Job Title" name="jobTitle_first" value={cvState.jobTitle_first}
            onChange={(e) => handleChange('jobTitle_first', e.target.value)} />
            <input className="bg-input-box-gray h-12 rounded px-3 text-white" 
            placeholder="Employer" name="employer_first" value={cvState.employer_first}
            onChange={(e) => handleChange('employer_first', e.target.value)} />
            <div className="flex w-full h-fit gap-3 justify-between items-center">
                <input type="date" date-date-format="MM YYYY" className="bg-input-box-gray w-28 h-12 rounded px-3 text-white" 
                placeholder="MM/YYYY" name="startDate_first" value={cvState.startDate_first}
                onChange={(e) => handleChange('startDate_first', e.target.value)} />
                <label className="text-white">to</label>
                <input type="date" date-date-format="MM YYYY" className="bg-input-box-gray w-28 h-12 rounded px-3 text-white" 
                placeholder="MM/YYYY" name="endDate_first" value={cvState.endDate_first}
                onChange={(e) => handleChange('endDate_first', e.target.value)} />
            </div>
            <input className="bg-input-box-gray h-12 rounded px-3 text-white" 
            placeholder="City" name="city_first" value={cvState.city_first}
            onChange={(e) => handleChange('city_first', e.target.value)} />
            <textarea className="h-32 col-span-2 bg-input-box-gray rounded 
            px-3 py-3 text-white" 
            placeholder="Write some details about your previous employment!" 
            name="jobDesc_first" value={cvState.jobDesc_first}
            onChange={(e) => handleChange('jobDesc_first', e.target.value)} />
            <br />
            <label className="text-white col-span-2">Work Experience #2</label>
            <input className="bg-input-box-gray h-12 rounded px-3 text-white" 
            placeholder="Job Title" name="jobTitle_second" value={cvState.jobTitle_second}
            onChange={(e) => handleChange('jobTitle_second', e.target.value)} />
            <input className="bg-input-box-gray h-12 rounded px-3 text-white" 
            placeholder="Employer" name="employer_second" value={cvState.employer_second}
            onChange={(e) => handleChange('employer_second', e.target.value)} />
            <div className="flex w-full h-fit gap-3 justify-between items-center">
                <input type="date" className="bg-input-box-gray w-28 h-12 rounded px-3 text-white"
                placeholder="MM/YYYY" name="startDate_second" value={cvState.startDate_second}
                onChange={(e) => handleChange('startDate_second', e.target.value)} />
                <label className="text-white">to</label>
                <input type="date" className="bg-input-box-gray w-28 h-12 rounded px-3 text-white" 
                placeholder="MM/YYYY" name="endDate_second" value={cvState.endDate_second}
                onChange={(e) => handleChange('endDate_second', e.target.value)} />
            </div>
            <input className="bg-input-box-gray h-12 rounded px-3 text-white" placeholder="City" />
            <textarea className="h-32 col-span-2 text-white bg-input-box-gray rounded px-3 py-3"
            placeholder="Write some details about your previous employment!"
            name="jobDesc_second" value={cvState.jobDesc_second}
            onChange={(e) => handleChange('jobDesc_second', e.target.value)} />
        </div>
    )
}

export default Employment;