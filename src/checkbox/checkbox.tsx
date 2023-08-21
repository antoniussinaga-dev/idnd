"use client";

import React, { CSSProperties, useEffect } from "react";
import "../Public/styles/checkbox.css";


interface CheckboxFunctionalProps {
    onChecked?(checked: boolean): void;
    onChange?(ev: React.ChangeEvent<HTMLInputElement>): React.ChangeEventHandler<HTMLInputElement> | undefined;
}


interface labelCheckboxProps {
    style?: CSSProperties;
}
type CheckboxSize = "small" | "medium" | "big";

export interface CheckboxProps extends CheckboxFunctionalProps {
    checked?: boolean;
    defaultChecked?: boolean;
    label?: string;
    size?: CheckboxSize;
    labelCheckboxProps?: labelCheckboxProps;
    _ref?: React.Ref<HTMLInputElement>;
}

/**
 * 
 * @const Checkbox 
 * @returns 
 */
const CheckboxComponent : React.FC<CheckboxProps> = ({
    checked,
    defaultChecked,
    _ref,
    onChecked,
    ...props
}: CheckboxProps): JSX.Element => {

    // state and other 

    const inputRef = React.useRef<HTMLInputElement | null>(null);


    // Functionals Component

    const change = (e: boolean, event: React.ChangeEvent<HTMLInputElement>) => {
        if(onChecked) onChecked(e);
        if(props.onChange) props.onChange(event);
    };

    // Hook

    useEffect(() => {
        if (_ref) {
            if (typeof _ref === 'function') {
                _ref(inputRef.current);
            } else if (_ref.hasOwnProperty('current')) {
                (_ref as React.MutableRefObject<HTMLInputElement | null>).current = inputRef.current;
            }
        }
    }, [_ref]);

    return (
        <label className="checkbox-container mb-10">
            <span className="checkmark">
                <input
                    ref={inputRef}
                    defaultChecked={defaultChecked}
                    type={"checkbox"}
                    className={
                        [
                            "checkbox",
                            props.size === "medium" ? "checkbox-medium": "",
                            props.size === "big" ? "checkbox-big": ""
                        ].join(" ")
                    }
                    checked={checked}
                    onChange={(e) => change(e.target.checked, e)}
                />
            </span>
            {
                props.label ? 
                <span
                    className={
                        [
                            "checkbox-title",
                            props.size === "medium" ? "checkbox-title-medium": "",
                            props.size === "big" ? "checkbox-title-big": ""
                        ].join(" ")
                    }
                    style={{ ...props.labelCheckboxProps?.style }}
                >{ props.label }</span> : null
            }
        </label>
    );
};



export default CheckboxComponent;
