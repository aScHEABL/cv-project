import React, { Component } from "react";
import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import CVtitle from "./CVtitle";

class EditorSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <section className="bg-slate-700 py-6 px-4">
            <CVtitle />
            <PersonalDetails />
            <Education />
        </section>
        )
    }
}

export default EditorSection;