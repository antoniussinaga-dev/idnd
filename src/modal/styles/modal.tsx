import { CSSProperties } from "react";


export const container : CSSProperties = {
    boxSizing: "border-box",
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgb(100, 100, 100, 0.2)",
    position: "fixed",
    zIndex: 99,
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: 'center',
};

export const content : CSSProperties = {
    width: 300,
    backgroundColor: "white",
    display: 'flex',
    flexDirection: "column",
    boxShadow: "0 0 5px 1px rgb(100, 100, 100, 0.2)",
    padding: 15,
    position: "relative",
};

export const header : CSSProperties = {
    boxSizing: "border-box",
    width: "100%",
    display: "flex",
    marginBottom: 10,
};

export const headerTitle : CSSProperties = {
    boxSizing: "border-box",
    width: "100%",
    display: "flex",
    fontSize: 16,
    overflowWrap: "anywhere",
    paddingRight: 3
};

const styles =  {
    container,
    content,
    header,
    headerTitle,
};



export default styles;

