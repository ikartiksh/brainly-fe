import { ReactElement } from "react";

type Variants = "primary" | "secondary"
export interface ButtonProps {
    variant: Variants;
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: any;
    endIcon?: any;
    onClick: () => void;
}

const variantStyles = {
    "primary": "bg-blue-600 text-white",
    "secondary": "bg-blue-400 text-white"
}

const sizeStyles = {
    "sm": "p-2",
    "md": "p-4",
    "lg": "p-6"
}

const defaultStyles = "rounded-md flex"

export const Button = (props: ButtonProps) => {
    return <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`}>
        {props.startIcon} {props.text} {props.endIcon}</button>
}

<Button variant="primary" size="md" onClick={() => {}} text={"asd"} />