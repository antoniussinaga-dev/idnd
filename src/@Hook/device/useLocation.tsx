"use client";

import React, { useContext, useState } from "react";
import { UseLocation, Context } from "../app/context";

type SetLocation = (pathname: string) => void; 
type SetQuery = (pathname: string) => void; 

const useLocation = () : [location: UseLocation, setLocation: SetLocation, setQuery: SetQuery] => {
    const { location } = useContext(Context);
    const setLocation: SetLocation = (pathname) => {
        if(location.setPathname) location.setPathname(pathname);
    };
    const setQuery: SetQuery = (query) => {
        if(location.setQuery) location.setQuery(query);
    }
    return [location, setLocation, setQuery];
};

export default useLocation;