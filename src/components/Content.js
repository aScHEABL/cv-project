import React, { useEffect }  from "react";
import { useCvContext } from "../context/cvContext";

const Content = () => {
    const [cvState] = useCvContext();
    useEffect(() => {}, [cvState]);
    return (
        <div className="flex flex-col p-6">
            <div className="flex flex-wrap gap-3 pb-8">
                <h3 className="w-full font-work-sans text-[13px] tracking-[4px]">PROFILE</h3>
                <div className="h-0.5 w-16 bg-component-gray" />
                <div className="h-0 w-full"></div>
                <p className="font-work-sans text-[11px] font-normal text-[#2e2e2e] ">
                    {cvState.intro}
                </p>
            </div>
            <div className="flex flex-wrap gap-3 pb-8">
                <h3 className="w-full font-work-sans text-[13px] tracking-[4px]">WORK EXPERIENCE</h3>
                <div className="h-0.5 w-16 bg-component-gray" />
                <div className="h-0 w-full"></div>
                <div className="flex w-full flex-wrap gap-0.5">
                    <h4 className="w-full font-work-sans text-xs font-semibold">{cvState.jobTitle_first}</h4>
                    <h5 className="text-[11px]">{cvState.startDate_first}</h5>
                    <label className="text-[11px]"> - </label>
                    <h5 className="text-[11px]">{cvState.endDate_first}</h5>
                </div>
                <p className="font-work-sans text-[11px] font-normal text-[#2e2e2e]">
                    {cvState.jobDesc_first}
                </p>
            </div>
            <div className="flex flex-wrap gap-3">
                <div className="flex w-full flex-wrap gap-0.5">
                    <h4 className="w-full font-work-sans text-xs font-semibold">{cvState.jobTitle_second}</h4>
                    <h5 className="text-[11px]">{cvState.startDate_second}</h5>
                    <label className="text-[11px]"> - </label>
                    <h5 className="text-[11px]">{cvState.endDate_second}</h5>
                </div>
                <p className="font-work-sans text-[11px] font-normal text-[#2e2e2e]">
                    {cvState.jobDesc_second}
                </p>
            </div>
        </div>
    )
}


export default Content;