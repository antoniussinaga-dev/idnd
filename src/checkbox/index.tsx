import { forwardRef } from "react";
import CheckboxComponent, { CheckboxProps as Props } from "./checkbox";


interface CheckboxProps extends Omit<Props, '_ref'> {}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
    return <CheckboxComponent {...props} _ref={ref} />;
});


export {
    Checkbox,
    CheckboxProps,
};