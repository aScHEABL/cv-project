import React, { Component } from "react";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="col-span-2 flex justify-center items-center gap-8">
                <h1 className="text-4xl font-work-sans font-medium tracking-[0.3em]"></h1>
                <h1 className="text-4xl font-work-sans font-light tracking-[0.3em]"></h1>
            </div>
        )
    }
}

export default Header;