import React, { Component } from "react";
import Photo from "./Photo";
import GivenName from "./GivenName";
import FamilyName from "./FamilyName";
import Email from "./Email";
import Phone from "./Phone";
import Country from "./Country";
import City from "./City";
import Zipcode from "./Zipcode";

class PersonalDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <section className="h-fit grid grid-cols-[128px_2fr_2fr_2fr_2fr] 
        grid-rows-[0.5fr_1fr_1fr_1fr] gap-4 py-2">
            <h2 className="text-slate-100 text-2xl col-span-5">Personal Details</h2>
            <Photo />
            <GivenName />
            <FamilyName />
            <Email />
            <Phone />
            <Country />
            <City />
            <Zipcode />
        </section>
        )
    }
}

export default PersonalDetails;