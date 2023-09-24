"use client";
import * as React from "react"
import { useEffect } from "react";

export interface IButtonProps {
    title?: string;
    children?: React.ReactNode; 
};


const Button: React.FC<IButtonProps> = ({
    title,
    children,
}: IButtonProps) => {

    useEffect(() => {
        console.log(title)
    }, [title])

    return (
        <button>
            { title ? title : children }
        </button>
    )
}




export default Button;