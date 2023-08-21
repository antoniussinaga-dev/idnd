import React, { useContext } from "react";
import { ContextStoreScreen, Context } from "../app/context";


const useScreen = () => {
    const context = useContext(Context);
    const screen = context.screen;
    return [screen]
};

export default useScreen;