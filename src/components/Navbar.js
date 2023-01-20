import React, { Component } from "react";

class Navbar extends Component {
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
            <nav className="fixed top-0 inset-x-0 bg-slate-700 w-full h-14 p-1.5">
                <form className="flex items-center justify-center h-full gap-2">
                    <input className=" bg-transparent h-full px-2 text-slate-100 border-solid 
                    border-2 border-slate-500 rounded-md font-semibold focus:outline-none focus:border-blue-500 " placeholder="Untitied resume" />
                    <button className="">
                    <svg style={svgInvert} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    </button>
                </form>
            </nav>
        )
    }
}

export default Navbar;