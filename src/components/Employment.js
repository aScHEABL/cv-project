import React from "react";
import { useCvContext } from "../context/cvContext";

const Employment = () => {
    const [cvState, dispatch] = useCvContext();
    const handleChange = (key, value) => {
        dispatch({ type: "ADD_JOB", jobs: { [key]: value } });
    }

    
    return(
        <div className="py-4 px-8 gap-3 grid grid-cols-[1fr_1fr] 
        bg-component-gray h-fit w-full rounded-xl">
            <div className="grid col-span-2 grid-cols-[8fr_2fr] items-center ">
                <h2 className="h-9 text-white text-2xl">Employment History</h2>
                <button className="flex gap-2 bg-mint rounded-xl p-4 text-lg items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                            Add
                </button>
            </div>
            <label className="text-white col-span-2">Work Experience #1</label>
            <input className="bg-input-box-gray h-12 rounded px-3 text-white" 
            placeholder="Job Title" name="title" value={cvState.jobs[0].title}
            onChange={(e) => handleChange(e.target.name, e.target.value)} />
            <input className="bg-input-box-gray h-12 rounded px-3 text-white" 
            placeholder="Employer" />
            <div className="flex w-full h-fit gap-3 justify-between items-center">
                <input type="date" className="bg-input-box-gray w-28 h-12 rounded px-3 text-white" 
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
        </div>
    )
}

export default Employment;