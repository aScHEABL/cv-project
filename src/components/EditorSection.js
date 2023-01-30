import React, { Component } from "react";
import CVcreator from "./CVcreator";
import PersonalDetails from "./PersonalDetails";
import Education from "./Education";

class EditorSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <section className="flex flex-wrap flex-col gap-8 h-full">
                <CVcreator />
                <PersonalDetails />
                <Education />
            </section>
        )
    }
}

export default EditorSection;