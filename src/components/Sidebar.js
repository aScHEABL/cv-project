import React, {useEffect} from "react";
import { useCvContext } from "../context/cvContext";

const Sidebar = () => {
    const [cvState] = useCvContext();

    const iconStyle = {
        height: '16px',
        width: '16px'
    }
    return(
        <div className="flex flex-col bg-component-gray gap-6 p-5">
            <div className="pb-5">
                <h3 className="text-white text-sm tracking-[0.25em] font-work-sans font-normal pb-6">CONTACT</h3>
                <div className="flex flex-wrap gap-2 text-[#a6a6a6]">
                    <div className="flex">
                        <svg style={iconStyle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                    </div>
                    <label className="h-full w-9/12 text-white text-[10px] tracking-wide font-work-sans font-normal">{cvState.personalInfo.website}</label>
                    <div className="flex flex-wrap gap-2 text-[#a6a6a6]">
                        <svg style={iconStyle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </div>
                    <label className="h-full w-9/12 text-white text-[10px] tracking-wide font-work-sans font-normal">{cvState.personalInfo.email}</label>
                    <div className="flex flex-wrap gap-2 text-[#a6a6a6]">
                        <svg style={iconStyle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </div>
                    <label className="h-full w-9/12 text-white text-[10px] tracking-wide font-work-sans font-normal">{cvState.personalInfo.address}</label>
                    <div className="flex flex-wrap gap-2 text-[#a6a6a6]">
                        <svg style={iconStyle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    </div>
                    <label className="h-full w-9/12 text-white text-[10px] tracking-wide font-work-sans font-normal">{cvState.personalInfo.phone}</label>
                </div>
            </div>
            <div>
                <h3 className="text-white text-sm tracking-[0.25em] font-work-sans font-normal pb-6">EDUCATION</h3>
                <div className="flex flex-wrap gap-1">
                    <h3 className="text-white text-[12px] font-work-sans font-medium">{cvState.school}</h3>
                    <div className="h-0 w-full"></div>
                    <label className="text-white text-[11px] font-work-sans font-normal text-[#a6a6a6]">{cvState.degree}</label>
                    <div className="flex gap-1 w-full">
                        <label className="text-white text-[10px] font-work-sans font-normal text-[#a6a6a6]">{cvState.eduStartDate}</label>
                        <label className="text-white text-[10px] font-work-sans font-normal text-[#a6a6a6]">
                            {cvState.eduStartDate && cvState.eduEndDate !== "" ? <label> - </label> : null }
                        </label>
                        <label className="text-white text-[10px] font-work-sans font-normal text-[#a6a6a6]">{cvState.eduEndDate}</label>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="text-white text-sm tracking-[0.25em] font-work-sans font-normal pb-6">SKILLS</h3>
                <ul className="text-white pl-5 flex flex-warp flex-col text-[11px] text-[#a6a6a6] gap-1">
                    <li>{cvState.skill_1}</li>
                    <li>{cvState.skill_2}</li>
                    <li>{cvState.skill_3}</li>
                </ul>
            </div>
        </div>
    )
}
export default Sidebar;