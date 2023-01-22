import React, { Component } from "react";

class CVtitle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const svgInvert = {
            width: "36px",
            height: "36px",
            filter: "invert(1)"
        }
        return (
        <div className="flex basis-full p-2 h-14 content-center justify-center gap-2">
            <input className="h-10 w-56 px-3 rounded bg-slate-500 text-slate-50 
            text-2xl outline-none focus:outline-blue-400 " 
            placeholder="Untitled" />
            <button>
            <svg style={svgInvert} className="h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            </button>
        </div>
        )
    }
}

export default CVtitle;