import React from "react";
import type { H2Props } from "./type"

const H2 : React.FC<H2Props> = ({
    text,
    children,
}: H2Props): JSX.Element => {

    return (
        <h2>
            { text ? text : children }
        </h2>
    )
}