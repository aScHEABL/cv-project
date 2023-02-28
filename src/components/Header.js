import React, {useEffect} from "react";
import { useCvContext } from "../context/cvContext";

const Header = () => {
    const [cvState] = useCvContext();
    useEffect(() => {}, [cvState]);

    return(
        <div className="col-span-2 flex justify-center items-center gap-8">
            <h1 className="text-4xl font-work-sans font-medium tracking-[0.3em]">
                {cvState.firstName}
            </h1>
            <h1 className="text-4xl font-work-sans font-light tracking-[0.3em]">
                {cvState.lastName}
            </h1>
        </div>
    )
}

export default Header;