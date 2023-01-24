import React, { Component } from "react";

class Country extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="flex flex-wrap gap-1 col-span-2">
                <label className="text-slate-100">Country</label>
                <br />
                <input className="h-10 w-full px-3 bg-slate-500 rounded text-slate-50"/>
            </div>
        )
    }
}

export default Country;