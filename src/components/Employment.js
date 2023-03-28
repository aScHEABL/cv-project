import React from "react";
import { useCvContext } from "../context/cvContext";
import WE_LIST from "./list/WE_LIST";

let nextID = 0;

const Employment = () => {
    const [cvState, dispatch] = useCvContext();

    const handleClick = () => {
        dispatch({
            type: 'ADD_JOB', 
            id: nextID++,
            title: '',
            employer: '',
            startDate: '',
            endDate: '',
            location: ''
         })
    }
    
    return(
        <div className="py-4 px-8 gap-3 grid grid-cols-[1fr_1fr] 
        bg-component-gray h-fit w-full rounded-xl">
            <div className="grid col-span-2 grid-cols-[8fr_2fr] items-center ">
                <h2 className="h-9 text-white text-2xl">Employment History</h2>
                { cvState.jobs.length >= 2 ? null
                : <button className="flex gap-2 bg-mint rounded-xl p-4 text-lg items-center"
                onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                            Add
                </button>
                }
            </div>
            <WE_LIST />
        </div>
    )
}

export default Employment;