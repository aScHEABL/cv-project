import React, { Component } from "react";
import CVtitle from "./CVtitle";

class EditorSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="h-full bg-slate-700 py-6 px-4">
                <CVtitle />
            </section>
        )
    }
}

export default EditorSection;