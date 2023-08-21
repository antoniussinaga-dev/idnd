
import React from "react";
import type { H6Props } from "./type"

const H6 : React.FC<H6Props> = ({
    text,
    children,
}: H6Props): JSX.Element => {

    return (
        <h6>
            { text ? text : children }
        </h6>
    )
}

