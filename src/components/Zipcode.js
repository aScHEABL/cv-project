import React, { Component } from "react";

class Zipcode extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="flex flex-wrap gap-1">
                <label className="text-slate-100">Zipcode</label>
                <br />
                <input className="h-10 w-28 px-3 bg-slate-500 rounded text-slate-50"/>
            </div>
        )
    }
}

export default Zipcode;