"use client";

import React, { ReactNode, createContext } from "react";


interface ModalContext {
    open: boolean;
};


const initialContext : ModalContext = {
    open: false,
};


export const Context = createContext(initialContext);


interface ModalProps {
    children: ReactNode;
}

const ModalProvider = ({
    children,
}: ModalProps) => {

    return (
        <Context.Provider value={{
            open: false,
        }}>
            { children }
        </Context.Provider>
    );
};

export default ModalProvider;


