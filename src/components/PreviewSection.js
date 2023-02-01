import React, { Component } from "react";
import Header from "./Header";

class PreviewSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <section className="grid h-preview-section w-preview-section sticky top-5 bottom-5 bg-white rounded-lg shrink-0">
                <Header />
            </section>
        )
    }
}

export default PreviewSection;