import React, { Component } from "react";
import CVcreator from "./CVcreator";
import PersonalDetails from "./PersonalDetails";
import ProfessionSummary from "./ProfessionSummary";
import Education from "./Education";

class EditorSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <section className="flex flex-wrap gap-6 h-full">
                <CVcreator />
                <PersonalDetails />
                <ProfessionSummary />
                <Education />
            </section>
        )
    }
}

export default EditorSection;