import React, { Component } from "react";

class Content extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="flex flex-col p-8">
                <div className="flex flex-wrap gap-3">
                    <h3 className="w-full font-work-sans text-lg tracking-[4px]">PROFILE</h3>
                    <div className="h-0.5 w-16 bg-component-gray" />
                    <p className="font-work-sans text-[11px] font-normal">Motivated and results-driven Senior Software Engineer with 8+ years 
                        of experience in my field. I have continuously demonstrated experience 
                        in improving software performance by implementing new ideas, updating, 
                        testing and coding. Experience in development tools which increase accuracy 
                        and performance of software, especially in React and with React Redux, 
                        are my specialization. In my free time, I go on a walk with the two of 
                        my dogs or spend time with friends. I also play chess and appreciate any 
                        competitive environment when pursuing sports.
                    </p>
                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
        )
    }
}

export default Content;