"use client";

import React, {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

import config , { ConfigOptions } from "../../config";


export interface ContextStoreScreen {
    width: number;
    height: number;
}

export interface UseLocation {
    pathname: string;
    query: string;
    setPathname?(pathname: string) : void;
    setQuery?(pathname: string) : void;
};

interface ContextOptions {
    store: any;
    screen: ContextStoreScreen;
    location: UseLocation;
    config: ConfigOptions;
};

const initialContext : ContextOptions = {
    store: {},
    screen: {
        width: 0,
        height: 0,
    },
    location: {
        pathname: "/",
        query: "",
    },
    config: config,
};

export const Context = createContext(initialContext);


interface Params {
    [key: string]: string | string[];
}

interface IdndProviderProps {
    children?: ReactNode;
};

interface ScreenChangeParams {
    width: number;
    height: number;
}

const IdndProvider: React.FC<any> = ({
    children,
}: IdndProviderProps) : JSX.Element => {
    const [store, setStore] = useState<ContextOptions>({
        ...initialContext
    });

    const screenChange = (s: ScreenChangeParams) => {
        setStore(pre => ({
            ...pre,
            screen: {
                width: s.width,
                height: s.height,
            }
        }));
    };




    const location = store.location;
    location.setPathname = (pathname) => {
        setStore(pre => ({
            ...pre,
            location: {
                pathname: pathname,
                query: pre.location.query,
            }
        }));
    };
    location.setQuery = (query) => {
        setStore(pre => ({
            ...pre,
            location: {
                pathname: pre.location.pathname,
                query: query,
            }
        }));
    };

    useEffect(() => {
        window.addEventListener("resize", () => screenChange({
            width: window.innerWidth,
            height: window.innerHeight,
        }));
        screenChange({
            width: window.innerWidth,
            height: window.innerHeight
        });
        
    }, []);

    return (
        <Context.Provider value={{
            store: store.store,
            screen: store.screen,
            location: location,
            config: store.config,
        }}>
            {
                children
            }
        </Context.Provider>
    );
};

export default IdndProvider;