import React, { Component } from "react";
import userPfp from "../icons/male-silluette.jpg";

class Photo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const userPfpClass = {
            width: "128px",
            height: "128px"
        }
        return (
            <div>
                <label className="text-slate-50">Photo</label>
                <img src={userPfp} className="h-32 w-32" alt="user avatar"></img>
            </div>
        )
    }
}

export default Photo;