import React, { Component } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class PersonalDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const PfpIconStyle = {
            height: '8rem',
            width: '8rem',
            filter: 'invert()'
        }
        const QuillStyle = {
            backgroundColor: 'rgb(28, 28, 28)'
        }
        return(
            <div className="py-4 px-8 grid grid-cols-[1fr_1fr] gap-3 bg-component-gray h-fit w-full rounded-xl">
                <h2 className="h-9 col-span-2 text-white text-2xl">Personal Details</h2>
                <input className="h-12 bg-input-box-gray rounded px-3" placeholder="First Name" />
                <input className="h-12 bg-input-box-gray rounded px-3" placeholder="Last Name" />
                <input className="h-12 bg-input-box-gray rounded px-3 col-span-2" placeholder="Address" />
                <input className="h-12 bg-input-box-gray rounded px-3 col-span-2" placeholder="Website" />
                <input className="h-12 bg-input-box-gray rounded px-3" placeholder="Email" />
                <input className="h-12 bg-input-box-gray rounded px-3" placeholder="Number" />
                <ReactQuill style={QuillStyle} className="h-48 col-span-2" theme="snow">
                    <div style={{height: '9rem'}}></div>
                </ReactQuill>
            </div>
        )
    }
}

export default PersonalDetails;