import React, { useEffect }  from "react";
import { useCvContext } from "../context/cvContext";

const Content = () => {
    const [cvState] = useCvContext();

    const jobNodes = cvState.jobs.map((job) => (
        <div key={job.id} className="flex flex-wrap gap-3 pb-8">
            <h3 className="w-full font-work-sans text-[13px] tracking-[4px]">WORK EXPERIENCE #{job.id + 1}</h3>
            <div className="h-0.5 w-16 bg-component-gray" />
            <div className="h-0 w-full"></div>
            <div className="flex w-full flex-wrap gap-0.5">
                <h4 className="w-full font-work-sans text-xs font-semibold">{ job.title }</h4>
                <h5 className="text-[11px]">{ job.employer }</h5>
                { job.employer ? <label className="text-[11px] px-1">|</label> : null }
                <h5 className="text-[11px]">{ job.startDate }</h5>
                { job.startDate && job.endDate ? <label className="text-[11px]"> - </label> : null}
                <h5 className="text-[11px]">{ job.endDate }</h5>
                { job.endDate ? <label className="text-[11px] px-1">|</label> : null }
                <h5 className="text-[11px]">{ job.country }</h5>
            </div>
            <p className="font-work-sans text-[11px] font-normal text-[#2e2e2e]">
                { job.desc }
            </p>
        </div>

    ))
    return (
        <div className="flex flex-col p-6 gap-8">
            <div className="flex flex-wrap gap-3 pb-8">
                <h3 className="w-full font-work-sans text-[13px] tracking-[4px]">PROFILE</h3>
                <div className="h-0.5 w-16 bg-component-gray" />
                <div className="h-0 w-full"></div>
                <p className="font-work-sans text-[11px] font-normal text-[#2e2e2e] ">
                    {cvState.intro}
                </p>
            </div>
            { jobNodes }
        </div>
    )
}


export default Content;


{/* <div className="flex flex-col p-6">
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
        <h4 className="w-full font-work-sans text-xs font-semibold">{!cvState.jobs[0]? "" : cvState.jobs[0].title }</h4>
        <h5 className="text-[11px]">{!cvState.jobs[0] ? "" : cvState.jobs[0].startDate}</h5>
        <label className="text-[11px]">
            { !cvState.jobs[0] ? "" :
            (cvState.jobs[0].startDate && cvState.jobs[0].endDate) ? " - " : "" }
        </label>
        <h5 className="text-[11px]">{!cvState.jobs[0] ? "" : cvState.jobs[0].endDate}</h5>
    </div>
    <p className="font-work-sans text-[11px] font-normal text-[#2e2e2e]">
        {cvState.jobDesc_first}
    </p>
</div>
<div className="flex flex-wrap gap-3">
    <div className="flex w-full flex-wrap gap-0.5">
        <h4 className="w-full font-work-sans text-xs font-semibold">{cvState.jobTitle_second}</h4>
        <h5 className="text-[11px]">{cvState.startDate_second}</h5>
        <label className="text-[11px]">
            {cvState.startDate_second && cvState.endDate_second !== "" ? <label> - </label> : null }
        </label>
        <h5 className="text-[11px]">{cvState.endDate_second}</h5>
    </div>
    <p className="font-work-sans text-[11px] font-normal text-[#2e2e2e]">
        {cvState.jobDesc_second}
    </p>
</div>
</div> */}
