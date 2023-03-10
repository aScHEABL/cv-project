import React from "react";
import { useCvContext } from "../context/cvContext";

const Employment = () => {
    const [cvState, dispatch] = useCvContext();
    const handleChange = (group, name, value) => {
        // class Job {
        //     constructor(title, employer, startDate, endDate, desc) {
        //         Object.assign(this, {title, employer, startDate, endDate, desc})
        //     }
        // }
        const firstJob = {};
        const secondJob = {};
        if (group === "first") Object.defineProperty(firstJob, [name], { value: value });
        else Object.defineProperty(secondJob, [name], { value: value });
        dispatch({type: "ADD_JOB", payload: })
    }

    
    return(
        <div className="py-4 px-8 gap-3 grid grid-cols-[1fr_1fr] 
        bg-component-gray h-fit w-full rounded-xl">
            <h2 className="h-9 col-span-2 text-white text-2xl">Employment History</h2>
            <label className="text-white col-span-2">Work Experience #1</label>
            <input className="bg-input-box-gray h-12 rounded px-3 text-white" 
            placeholder="Job Title" group="first" name="title" value={cvState.jobs[0].title}
            onChange={(e) => handleChange(e.target.group, e.target.name, e.target.value)} />
            <input className="bg-input-box-gray h-12 rounded px-3 text-white" 
            placeholder="Employer" name="employer" value={cvState.jobs[0].employer} />
            <div className="flex w-full h-fit gap-3 justify-between items-center">
                <input type="date" className="bg-input-box-gray w-28 h-12 rounded px-3 text-white" 
                placeholder="MM/YYYY" name="startDate" value={cvState.jobs[0].startDate} />
                <label className="text-white">to</label>
                <input type="date" className="bg-input-box-gray w-28 h-12 rounded px-3 text-white" 
                placeholder="MM/YYYY" name="endDate" value={cvState.jobs[0].endDate} />
            </div>
            <input className="bg-input-box-gray h-12 rounded px-3 text-white" 
            placeholder="City" name="city" value={cvState.jobs[0].city} />
            <textarea className="h-32 col-span-2 bg-input-box-gray rounded 
            px-3 py-3 text-white" 
            placeholder="Write some details about your previous employment!" 
            name="desc" value={cvState.jobs[0].desc} />
            <br />
            <label className="text-white col-span-2">Work Experience #2</label>
            <input className="bg-input-box-gray h-12 rounded px-3 text-white" 
            placeholder="Job Title" name="jobTitle_second" />
            <input className="bg-input-box-gray h-12 rounded px-3 text-white" 
            placeholder="Employer" name="employer_second" />
            <div className="flex w-full h-fit gap-3 justify-between items-center">
                <input type="date" className="bg-input-box-gray w-28 h-12 rounded px-3 text-white"
                placeholder="MM/YYYY" name="startDate_second" />
                <label className="text-white">to</label>
                <input type="date" className="bg-input-box-gray w-28 h-12 rounded px-3 text-white" 
                placeholder="MM/YYYY" name="endDate_second" />
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