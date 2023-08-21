"use client";

import React, { ReactNode, useEffect, useRef, useState, useContext } from "react";
import { Context } from "../@Hook/app/context";
import styels from "../View/grid/style/grid";
import Griditem from "../View/grid/component/card";

type GridTypes = "default" | "card";


interface GridProps {
    type?: GridTypes;
    children?: ReactNode
};

interface ParentsState {
    width: number;
    height: number;
    paddingTop: number;
    paddingBottom: number;
    paddingRight: number;
    paddingLeft: number;
};

interface ContentState {
    width: number;
    height: number;
};


// TYPE DEFINITIONS


// import type * as React from 'react';
// import type { TabPaneProps } from 'rc-tabs/lib/TabPanelList/TabPane';
// declare const TabPane: React.FC<TabPaneProps>;
// export { TabPaneProps };
// export default TabPane;





// TYPE DEFINITIONS


const Grid: React.FC<GridProps> = (): JSX.Element => {
    
    const { screen } = useContext(Context);
    const ref = useRef<HTMLDivElement>(null);

    const [parent, setParent] = useState<ParentsState>({
        width: 0,
        height: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
    });

    const [content, setContent] = useState<ContentState>({
        width: 0,
        height: 0,
    });


    useEffect(() => {
        if(ref) {
            const current = ref.current;
            const paddingList = current?.parentElement?.style.padding.split(" ") || [];
            // 3 bottom left 4 right 2 top 1
            // if(paddingList.length) console.log("PADDING", paddingList.length)
            setParent(pre => ({
                ...pre,
                width: current?.parentElement?.clientWidth || 0,
                height: current?.parentElement?.clientHeight || 0,
            }));
            setContent(pre => ({
                ...pre,
                width: current?.clientWidth || 0,
                height: current?.clientHeight || 0,
            }));
        }
    }, [ref, screen]);


    // useEffect(() => {
    //     console.log(screen.width, parent.width, content.width)
    // }, [parent]);

    return (
        <div
            ref={ref}
            style={{ width: 300 }}
            className={[styels.container].join(" ")}
        >
            grid
        </div>
    );
};


export default Grid;