import React, { CSSProperties, MouseEventHandler, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";



interface CloseButtonTopProps<T> {
    borderTopRightRadius?: number | string;
    onClick?: MouseEventHandler<T> | undefined;
};

interface CloseButtonTopState {
    hover?: boolean;
}


const container : CSSProperties = {
    boxSizing: "border-box",
    width: "35px",
    height: "35px",
    display: 'flex',
    alignItems: 'center',
    justifyContent:  "center",
    overflow: "hidden",
    cursor: "pointer",
    borderStyle: "none",
    outlineStyle: "none",
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "initial",
};


const CloseButtonTop: React.FC<CloseButtonTopProps<any>> = ({
    onClick,
    borderTopRightRadius,
}: CloseButtonTopProps<any>): JSX.Element => {
    const [store, setStore] = useState<CloseButtonTopState>({
        hover: false,
    });
    const action = (actionKey: string) => () =>  {
        switch (actionKey) {
            case "button-hover":
                setStore(pre => ({ ...CloseButtonTop, hover: true }));
                break;
         case "button-hover-out":
                setStore(pre => ({ ...CloseButtonTop, hover: false }));
                break;
            default:
                break;
        }
    };
    return (
        <button
            style={{
                ...container,
                backgroundColor: store.hover ? "rgb(100, 100, 100, 0.1)" : "initial",
                borderTopRightRadius: borderTopRightRadius,
            }}
            onClick={onClick}
        >
            <IoCloseSharp
                width={store.hover ? 20 : 15}
                height={store.hover ? 20 : 15}
                size={store.hover ? 100 : 50}
                onMouseMove={action("button-hover")}
                onMouseOut={action("button-hover-out")}
                color={`rgb(100, 100, 100, ${store.hover ? "1" : "0.6"})`}
            />
        </button>
    );
};

export default CloseButtonTop;
 