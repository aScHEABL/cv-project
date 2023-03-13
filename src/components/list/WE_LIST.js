import React from "react";
import { useCvContext } from "../../context/cvContext";

export default function WE_LIST() {
    const [cvState, dispatch] = useCvContext();
    const handleChange = (key, value) => {
        // dispatch({type: 'CHANGE_JOB', })
    }

    const nodes = cvState.jobs.map((job) => (
        <React.Fragment key={job.id}>
            <label className="text-white col-span-2">Work Experience #{job.id++}</label>
            <input className="bg-input-box-gray h-12 rounded px-3 text-white" 
            placeholder="Job Title" name="title" value={job.title}
            onChange={(e) => handleChange(e.target.name, e.target.value)} />
            <input className="bg-input-box-gray h-12 rounded px-3 text-white" 
            placeholder="Employer" />
            <div className="flex w-full h-fit gap-3 justify-between items-center">
                <input type="date" date-date-format="MM YYYY" className="bg-input-box-gray w-28 h-12 rounded px-3 text-white" 
                placeholder="MM/YYYY" />
                <label className="text-white">to</label>
                <input type="date" className="bg-input-box-gray w-28 h-12 rounded px-3 text-white" 
                placeholder="MM/YYYY" />
            </div>
            <input className="bg-input-box-gray h-12 rounded px-3 text-white" 
            placeholder="City" />
            <textarea className="h-32 col-span-2 bg-input-box-gray rounded 
            px-3 py-3 text-white" 
            placeholder="Write some details about your previous employment!" />
        </React.Fragment>
    ))

    return (
        <>
            {nodes}
        </>
    )
}