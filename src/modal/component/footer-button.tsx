import React, { CSSProperties, ReactNode } from "react";
import { Button } from "../../button";

interface FooterButtoProps {
    style?: CSSProperties;
    title?: ReactNode;
    children?: ReactNode;
};


const FooterButton: React.FC<FooterButtoProps> = ({
    style,
    title,
    children,
    ...props
}: FooterButtoProps) : JSX.Element => {
    return <Button variant={"primary"}>{ title ? title : children }</Button>
};


export default FooterButton;

