

import React from "react";
import type { H5Props } from "./type"

const H5 : React.FC<H5Props> = ({
    text,
    children,
}: H5Props): JSX.Element => {

    return (
        <h5>
            { text ? text : children }
        </h5>
    )
}

