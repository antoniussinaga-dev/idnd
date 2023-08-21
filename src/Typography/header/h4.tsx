

import React from "react";
import type { H4Props } from "./type"

const H4 : React.FC<H4Props> = ({
    text,
    children,
}: H4Props): JSX.Element => {

    return (
        <h4>
            { text ? text : children }
        </h4>
    )
}

