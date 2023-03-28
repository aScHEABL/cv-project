import React, { useEffect } from "react";
import { useCvContext } from "../context/cvContext";

const CurrentPos = () => {
    const [cvState] = useCvContext();
    return(
        <div className="bg-light-grey col-span-2 flex justify-center items-center font-work-sans 
        text-lg font-light tracking-widest">
            <h2>{cvState.jobs[0] ? cvState.jobs[0].title : null}</h2>
        </div>
    )
}

export default CurrentPos;