import React, { Component } from "react";

class PersonalDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <section className="flex gap-4 h-1/2 flex-wrap">
            <h2 className="text-slate-100 text-2xl">Personal Details</h2>
            <hr className="h-0.5 bg-slate-200"/>
        </section>
        )
    }
}

export default PersonalDetails;