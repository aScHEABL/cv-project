import React from "react";
import { useCvContext } from "../../context/cvContext";

export default function WE_LIST() {
    const [cvState, dispatch] = useCvContext();
    const handleChange = (id, key, value) => {
        dispatch({ type: 'CHANGE_JOB', id:id, [key]: value });
        console.log(cvState.jobs[id]);
    }

    const nodes = cvState.jobs.map((job) => (
        <React.Fragment key={job.id}>
            <label className="text-white col-span-2">Work Experience #{job.id + 1}</label>
            <input className="bg-input-box-gray h-12 rounded px-3 text-white" 
            placeholder="Job Title" name="title" value={job.title}
            onChange={(e) => handleChange(job.id, e.target.name, e.target.value)} />
            <input className="bg-input-box-gray h-12 rounded px-3 text-white" 
            placeholder="Employer" name="employer" value={job.employer}
            onChange={(e) => handleChange(job.id, e.target.name, e.target.value)} />
            <div className="flex w-full h-fit gap-3 justify-between items-center">
                <input type="date" className="bg-input-box-gray w-28 h-12 rounded px-3 text-white" 
                placeholder="MM/YYYY" name="startDate" value={job.startDate}
                onChange={(e) => handleChange(job.id, e.target.name, e.target.value)} />
                <label className="text-white">to</label>
                <input type="date" className="bg-input-box-gray w-28 h-12 rounded px-3 text-white" 
                placeholder="MM/YYYY" name="endDate" value={job.endDate}
                onChange={(e) => handleChange(job.id, e.target.name, e.target.value)} />
            </div>
            <input className="bg-input-box-gray h-12 rounded px-3 text-white" 
            placeholder="City" name="city" value={job.city}
            onChange={(e) => handleChange(job.id, e.target.name, e.target.value)} />
            <textarea className="h-32 col-span-2 bg-input-box-gray rounded 
            px-3 py-3 text-white" 
            placeholder="Write some details about your previous employment!"
            name="desc" value={job.desc} onChange={(e) => handleChange(job.id, e.target.name, e.target.value)} />
        </React.Fragment>
    ))

    return (
        <>
            {nodes}
        </>
    )
}