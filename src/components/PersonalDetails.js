import React, { Component } from "react";
import Photo from "./Photo";

class PersonalDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <section className="h-1/2 grid">
            <h2 className="text-slate-100 text-2xl">Personal Details</h2>
            <br />
            <div className="flex gap-4 h-fit w-fit">
                <Photo />
            </div>
        </section>
        )
    }
}

export default PersonalDetails;