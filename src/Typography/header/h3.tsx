
import React from "react";
import type { H3Props } from "./type"

const H3 : React.FC<H3Props> = ({
    text,
    children,
}: H3Props): JSX.Element => {

    return (
        <h3>
            { text ? text : children }
        </h3>
    )
}