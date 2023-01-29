import React, { Component } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class Summary extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <section className="flex flex-wrap h-fit py-2 gap-2">
                <h2 className="h-10 w-full text-slate-100 text-2xl">Professional Summary</h2>
                <p className="text-slate-100 h-auto">Write 2-4 short & energetic sentences to interest the reader! 
                    Mention your role, experience & most importantly - your biggest 
                    achievements, best qualities and skills.</p>
                <br />
                {/* <textarea className="h-48 w-full rounded" /> */}
                <ReactQuill 
                className="bg-slate-100 w-full" 
                theme="snow">
                    <div className="bg-slate-500 w-full rounded"></div> 
                </ReactQuill>
            </section>
        )
    }
}

export default Summary;