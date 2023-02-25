import React from "react";
import CVcreator from "./CVcreator";
import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import Employment from "./Employment";
import Skill from "./Skill";

const EditorSection = () => {
    
    return (
        <section className="flex flex-wrap flex-col gap-8 h-fit shrink-0">
            <CVcreator />
            <PersonalDetails />
            <Employment />
            <Education />
            <Skill />
        </section>
    )
}

export default EditorSection;