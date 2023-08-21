

import React, {  } from "react"
import type { H1Props } from "./type"




const H1: React.FC<H1Props>  = ({
    children,
    text,
}: H1Props): JSX.Element => {


    return (
        <h1>
            { text ? text : children }
        </h1>
    );
};

export default H1;