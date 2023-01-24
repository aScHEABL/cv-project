import React, { Component } from "react";
import Photo from "./Photo";

class PersonalDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <section className="h-1/2 grid grid-cols-[2fr_2fr_2fr_2fr_2fr] 
        grid-rows-[1fr_1fr_1fr_1fr_1fr] ">
            <h2 className="text-slate-100 text-2xl col-span-5">Personal Details</h2>
            <div className="flex gap-4 h-fit w-fit">
                <Photo />
            </div>
        </section>
        )
    }
}

export default PersonalDetails;