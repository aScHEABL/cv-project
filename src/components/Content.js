import React from "react";

const Content = () => {
    
    return (
        <div className="flex flex-col p-6">
            <div className="flex flex-wrap gap-3 pb-8">
                <h3 className="w-full font-work-sans text-[13px] tracking-[4px]">PROFILE</h3>
                <div className="h-0.5 w-16 bg-component-gray" />
                <p className="font-work-sans text-[11px] font-normal text-[#2e2e2e] ">
                    
                </p>
            </div>
            <div className="flex flex-wrap gap-3 pb-8">
                <h3 className="w-full font-work-sans text-[13px] tracking-[4px]">WORK EXPERIENCE</h3>
                <div className="h-0.5 w-16 bg-component-gray" />
                <div className="flex w-full flex-wrap gap-0.5">
                    <h4 className="w-full font-work-sans text-xs font-semibold"></h4>
                    <h5 className="text-[11px]"></h5>
                    <label className="text-[11px]">  </label>
                    <h5 className="text-[11px]"></h5>
                </div>
                <p className="font-work-sans text-[11px] font-normal text-[#2e2e2e]">
                
                </p>
            </div>
            <div className="flex flex-wrap gap-3">
                <div className="flex w-full flex-wrap gap-0.5">
                    <h4 className="w-full font-work-sans text-xs font-semibold"></h4>
                    <h5 className="text-[11px]"></h5>
                    <label className="text-[11px]"></label>
                    <h5 className="text-[11px]"></h5>
                </div>
                <p className="font-work-sans text-[11px] font-normal text-[#2e2e2e]">
                    
                </p>
            </div>
        </div>
    )
}


export default Content;