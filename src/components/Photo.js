import React, { Component } from "react";
import userPfp from "../icons/male-silluette.jpg";

class Photo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="flex flex-wrap gap-1 h-fit w-fit row-span-2">
                <label className="text-slate-100">Photo</label>
                <img src={userPfp} className="w-32" alt="user avatar"></img>
            </div>
        )
    }
}

export default Photo;