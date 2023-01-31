import React, { Component } from "react";
import CVcreator from "./CVcreator";
import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import Employment from "./Employment";
import Skill from "./Skill";

class EditorSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <section className="flex flex-wrap flex-col gap-8 h-full">
                <CVcreator />
                <PersonalDetails />
                <Employment />
                <Education />
                <Skill />
            </section>
        )
    }
}

export default EditorSection;