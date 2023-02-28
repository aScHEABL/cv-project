import React, { useEffect } from "react";
import { useCvContext } from "../context/cvContext";

const CurrentPos = () => {
    const [cvState] = useCvContext();
    useEffect(() => {}, [cvState]);
    return(
        <div className="bg-light-grey col-span-2 flex justify-center items-center font-work-sans 
        text-lg font-light tracking-widest">
            <h2></h2>
        </div>
    )
}

export default CurrentPos;