import React, { Component } from "react";

class Education extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="py-4 px-8 gap-3 grid grid-cols-[1fr_1fr] bg-component-gray h-fit w-full rounded-xl">
                <h2 className="h-9 col-span-2 text-white text-2xl">Education</h2>
                <input className="bg-input-box-gray h-12 rounded px-3" placeholder="School" />
                <input className="bg-input-box-gray h-12 rounded px-3" placeholder="Degree" />
                <div className="flex w-full h-fit gap-3 justify-between items-center">
                    {/* <label className="text-white w-full">Start & End Date</label> */}
                    <input className="bg-input-box-gray w-28 h-12 rounded px-3" placeholder="MM/YYYY" />
                    <label className="text-white">to</label>
                    <input className="bg-input-box-gray w-28 h-12 rounded px-3" placeholder="MM/YYYY" />
                </div>
                <input className="bg-input-box-gray h-12 rounded px-3" placeholder="City" />
            </div>
        )
    }
}

export default Education;