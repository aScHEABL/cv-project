import React, { Component } from "react";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="h-36 flex justify-center items-center gap-8">
                <h1 className="text-5xl">NIKOLA</h1>
                <h1 className="text-5xl font-thin">TESLA</h1>
            </div>
        )
    }
}

export default Header;