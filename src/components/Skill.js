import React from "react";
import { useCvContext } from "../context/cvContext";

const Skill = () => {
    const [cvState, dispatch] = useCvContext();
    const handleChange = (key, value) => {
        dispatch({ type: `${key}`, payload: { [key]: value } });
    }
    
    const svgStyle = {
        filter: 'invert()',
        transform: 'scale(1.2)'
    }
    return (
        <div className="py-4 px-8 flex flex-col flex-wrap gap-3 
        bg-component-gray h-fit w-full rounded-xl">
            <div className="grid grid-cols-[8fr_2fr] items-center ">
                <h2 className="h-9 text-white text-2xl">Skills</h2>
                <button className="flex gap-2 bg-mint rounded-xl p-4 text-lg items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                        Add
                </button>
            </div>
        </div>
    )
}
export default Skill;

{/* <div className="flex items-center gap-3">
                <input className="bg-input-box-gray h-12 w-full rounded px-3 text-white" 
                placeholder="React" name="skill_1" value={cvState.skill_1}
                onChange={(e) => handleChange(e.target.name, e.target.value)} />
                <button className="pr-3">
                <svg style={svgStyle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
                </button>
            </div>
            <div className="flex items-center gap-3">
                <input className="bg-input-box-gray h-12 w-full rounded px-3 text-white" 
                placeholder="Node.js" name="skill_2" value={cvState.skill_2}
                onChange={(e) => handleChange(e.target.name, e.target.value)} />
                <button className="pr-3">
                <svg style={svgStyle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
                </button>
            </div>
            <div className="flex items-center gap-3">
                <input className="bg-input-box-gray h-12 w-full rounded px-3 text-white" 
                placeholder="PostgreSQL" name="skill_3" value={cvState.skill_3}
                onChange={(e) => handleChange(e.target.name, e.target.value)} />
                <button className="pr-3">
                <svg style={svgStyle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
                </button>
            </div> */}