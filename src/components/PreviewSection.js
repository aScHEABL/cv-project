import React, { Component } from "react";
import Header from "./Header";

class PreviewSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <section className="grid grid-rows-[1fr_0.3fr_5fr] grid-cols-[3.5fr_6.5fr] h-preview-section w-preview-section sticky top-5 bottom-5 bg-white rounded-lg shrink-0">
                <Header />
            </section>
        )
    }
}

export default PreviewSection;