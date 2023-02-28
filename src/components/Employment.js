import React from "react";

const Employment = () => {
    
    return(
        <div className="py-4 px-8 gap-3 grid grid-cols-[1fr_1fr] 
        bg-component-gray h-fit w-full rounded-xl">
            <h2 className="h-9 col-span-2 text-white text-2xl">Employment History</h2>
            <label className="text-white col-span-2">Work Experience #1</label>
            <input className="bg-input-box-gray h-12 rounded px-3 text-white" 
            placeholder="Job Title" />
            <input className="bg-input-box-gray h-12 rounded px-3 text-white" 
            placeholder="Employer" />
            <div className="flex w-full h-fit gap-3 justify-between items-center">
                <input className="bg-input-box-gray w-28 h-12 rounded px-3 text-white" 
                placeholder="MM/YYYY" />
                <label className="text-white">to</label>
                <input className="bg-input-box-gray w-28 h-12 rounded px-3 text-white" 
                placeholder="MM/YYYY" />
            </div>
            <input className="bg-input-box-gray h-12 rounded px-3 text-white" 
            placeholder="City" />
            <textarea className="h-32 col-span-2 bg-input-box-gray rounded 
            px-3 py-3 text-white" 
            placeholder="Write some details about your previous employment!" />
            <br />
            <label className="text-white col-span-2">Work Experience #2</label>
            <input className="bg-input-box-gray h-12 rounded px-3 text-white" 
            placeholder="Job Title" />
            <input className="bg-input-box-gray h-12 rounded px-3 text-white" 
            placeholder="Employer" />
            <div className="flex w-full h-fit gap-3 justify-between items-center">
                <input className="bg-input-box-gray w-28 h-12 rounded px-3 text-white"
                placeholder="MM/YYYY" />
                <label className="text-white">to</label>
                <input className="bg-input-box-gray w-28 h-12 rounded px-3 text-white" 
                placeholder="MM/YYYY" />
            </div>
            <input className="bg-input-box-gray h-12 rounded px-3 text-white" placeholder="City" />
            <textarea className="h-32 col-span-2 text-white bg-input-box-gray rounded px-3 py-3"
            placeholder="Write some details about your previous employment!" />
        </div>
    )
}

export default Employment;