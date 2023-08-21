import React, { CSSProperties } from "react";


// Footer Components 
import FooterButton from "./footer-button";


const container : CSSProperties = {
    boxSizing: "border-box",
    width: '100%',
    border: "solid 1px black",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
}


const Footer: React.FC<any> = (): JSX.Element => {


    return (
        <div
            style={{
                ...container,
            }}
        >
            <FooterButton
                style={{
                    marginRight: 5
                }}
                title={"Close"}
            />
            <FooterButton>
                Save
            </FooterButton>
        </div>
    )
};

export default Footer;