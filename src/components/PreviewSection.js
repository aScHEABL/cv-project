import React, { Component } from "react";
import Header from "./Header";
import CurrentPos from "./CurrentPos";
import Sidebar from "./Sidebar";
import Content from "./Content";

class PreviewSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <section className="grid grid-rows-[0.8fr_0.25fr_5fr] grid-cols-[3.5fr_7fr] h-preview-section w-preview-section sticky top-5 bottom-5 bg-white rounded-lg shrink-0">
                <Header />
                <CurrentPos />
                <Sidebar />
                <Content />
            </section>
        )
    }
}

export default PreviewSection;