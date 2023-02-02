import React, { Component } from "react";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="h-36 col-span-2 flex justify-center items-center gap-8">
                <h1 className="text-5xl font-roboto-mono font-semibold tracking-widest">NIKOLA</h1>
                <h1 className="text-5xl font-roboto-mono font-normal tracking-widest">TESLA</h1>
            </div>
        )
    }
}

export default Header;