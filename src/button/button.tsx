"use client";

import React, { ReactNode, CSSProperties, useState, useEffect, useRef } from "react"
import "../Public/styles/button.css";


/**
 * @type ButtonType
 * @loading - Loading Adalah button loading 
 */
declare type ButtonType = "loading" | "link" | "error" | "success" | "warning";


/**
 * @type ButtonVariant
 * @primary - Varian utama yang biasanya memiliki tampilan yang menonjol dan sering digunakan untuk tindakan penting.
 * @secondary - Varian sekunder yang biasanya memiliki tampilan lebih ringan atau kurang menonjol, sering digunakan untuk tindakan yang tidak sekuat tindakan utama.
 * @outlined - Varian dengan garis tepi atau batas, tanpa latar belakang terisi. Cocok untuk tindakan yang lebih ringan.
 * @text - Varian yang memiliki tampilan seperti teks biasa, tanpa latar belakang atau garis tepi. Digunakan untuk tindakan yang sangat ringan.
 * @icon - Varian yang hanya menampilkan ikon tanpa teks. Cocok untuk tindakan yang memiliki representasi visual.
 * @disabled - Varian untuk tindakan yang dinonaktifkan atau tidak dapat diakses.
 * @success - Varian untuk menunjukkan tindakan yang berhasil atau sukses.
 * @error - Varian untuk menunjukkan tindakan yang gagal atau kesalahan.
 * @warning - Varian untuk menunjukkan tindakan dengan peringatan.
 * @small - Varian dengan ukuran tampilan kecil.
 * @medium - Varian dengan ukuran tampilan sedang.
 * @large - Varian dengan ukuran tampilan besar.
 * @custom - Varian kustom yang dapat disesuaikan sesuai kebutuhan proyek.
 */
declare type ButtonVariant = "primary" | "secondary" | "outlined" | "text" | "icon" | "custom";




/**
 * @interface ButtonContentStyle
 */
interface ButtonContentStyle {
    container?: CSSProperties;
    content?: CSSProperties;
}

/**
 * @interface ButtonStyle
 */
interface ButtonStyle  extends ButtonContentStyle {
    hidden?: boolean;
}



/**
 * @interface ButtonProps
 * @primary - Varian utama yang biasanya memiliki tampilan yang menonjol dan sering digunakan untuk tindakan penting.
 * @see {@link ButtonVariant} - Lihat properti `variant` dalam `ButtonProps`.
 * @property type - Type Button
 * @property label - label
 */
export interface ButtonProps {
    /**
     * Varian utama yang biasanya memiliki tampilan yang menonjol dan sering digunakan untuk tindakan penting.
     */
    variant?: ButtonVariant;
    type?: ButtonType;
    label?: string;
    children?: ReactNode;
    style?: ButtonStyle;
};



/**
 * 
 * @param ButtonState 
 * @returns 
 */
export interface ButtonState {
    focusStyle?: string;
    actionStyle?: string;
};






/**
 * @component Button
 * @props Button props
 * @see {@link ButtonProps }
 * @returns 
 */
const Button : React.FC<ButtonProps> = ({
    label,
    children,
    variant,
}: ButtonProps ): JSX.Element => {
    /**
     * @state
     */
    const [buttonState, setButtonState] = useState<ButtonState>({
        actionStyle: "",
        focusStyle: "",
    });

    const buttonRef = useRef<HTMLButtonElement>(null);
    const [rippleState, setRippleState] = useState<CSSProperties>({
        display: "none",
        top: 0,
        left: 0,
    });


    /**
     * @function onFocus
     * @param e 
     */
    const onFocus = (e: any) => {
        switch (variant) {
            case "primary":
                setButtonState(pre => ({ ...pre, focusStyle: "idnd-btn-focused" }));
                break;
        }
    };
    const onBlur = (e: any) => {
        switch (variant) {
            case "primary":
                setButtonState(pre => ({ ...pre, focusStyle: "" }));
                break;
        }
    };
    const mouseMove = () => {
        switch (variant) {
            case "primary":
                setButtonState(pre => ({ ...pre, actionStyle: "idnd-btn-hover" }));
                break;
        }
    };
    const mouseOut = () => {
        switch (variant) {
            case "primary":
                setButtonState(pre => ({ ...pre, actionStyle: "" }));
                break;
        }
    };

    const handleClick: React.MouseEventHandler<HTMLButtonElement>  = ({
        pageX, pageY, currentTarget, target
    }) => {
        let x = ((pageX - currentTarget.offsetLeft) * 100) / currentTarget.offsetWidth;
        const y = ((pageY - currentTarget.offsetTop) * 100) / currentTarget.offsetHeight;
        setRippleState(pre => ({
            ...pre,
            display: "flex",
            top: y  + "%",
            left: x + "%",
        }));
        setTimeout(() => setRippleState(pre => ({
            ...pre,
            display: 'none',
        })), 700);
        console.log(x, y)
    };

    // useEffect(() => {
    //     console.log(buttonState)
    // }, [buttonState]);


    return (
        <button
            className={[
                "idnd-btn",
                "btn-ripple",
                variant === "primary" ? "idnd-btn-primary" : "",
                buttonState.actionStyle,
                buttonState.focusStyle,
            ].join(" ")}
            style={{ marginRight: 10, position: "relative" }}
            onFocus={onFocus}
            onBlur={onBlur}
            onMouseMove={mouseMove}
            onMouseOut={mouseOut}
            onClick={handleClick}
            ref={buttonRef}
        >
            <span
                style={{
                    display: "flex",
                    width: "100%",
                    height: "100%",
                    overflow: 'hidden',
                    position: "absolute",
                    top: 0,
                    left: 0,
                }}
            >
                <span
                    style={{
                        width: 10,
                        height: 10,
                        display: "flex",
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: "absolute",
                        zIndex: 9998,
                        left: rippleState.left,
                        top: rippleState.top,
                        // overflow: "hidden",
                        backgroundColor: "black",
                    }}
                >
                    <span style={{
                        position: 'relative',
                        left: 0,
                        top: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: "center"
                    }}>
                        <span className="idnd-ripple" style={{ display: rippleState.display }}></span>
                    </span>
                </span>
            </span>
            {
                label ? label : children
            }
        </button>
    );
};




export default Button;
