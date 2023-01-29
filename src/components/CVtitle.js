import React, { Component } from "react";

class CVtitle extends Component {
    constructor(props) {
        super(props);
    }

    onChange(e) {
        const dom = e.target;
        // Extract only digits from width string.
        const widthDigit = e.target.style.width.replace(/[^0-9.]/g, '');;
        
        if (dom.value.length >= 8 && dom.value.length <= 17) {
            dom.style.width = (+widthDigit) + (0.75) + "rem";
        } else if (dom.value.length <= 7 || dom.value === "Untitled") {
            dom.style.width = "7rem";
        }
    }

    handleBlur(e) {
        const dom = e.target;
        if (dom.value.length === 0) {
            dom.value = "Untitled";
        }
    }

    render() {
        const svgInvert = {
            filter: "invert(1)"
        }

        const inputStyle = {
            width: "7rem"
        }
        return (
        <div className="flex basis-full py-2 h-14 content-center justify-center gap-4">
            <input className="h-10 px-3 rounded 
            bg-slate-500 text-slate-50 outline-none text-2xl
            focus:outline-blue-400 " 
            style={inputStyle}
            onKeyDown={this.onChange} 
            maxLength={18}
            defaultValue="Untitled" 
            onBlur={this.handleBlur} />
            <button className="relative right-18">
            <svg style={svgInvert} className="h-9 w-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            </button>
        </div>
        )
    }
}

export default CVtitle;