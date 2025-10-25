import { ReactElement } from "react";

type Variants = "primary" | "secondary"
export interface ButtonProps {
    variant: Variants;
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement;
    onClick?: () => void;
    fullWidth?: boolean;
    loading?: boolean;
}

const variantStyles = {
    "primary": "bg-blue-600 text-white",
    "secondary": "bg-blue-400 text-blue"
}

const sizeStyles = {
    "sm": "p-2 rounded-sm",
    "md": "p-4 rounded-md",
    "lg": "p-6 rounded-xl"
}

const defaultStyles = "px-4 py-2 rounded-md font-light flex items-center";

export const Button = (props: ButtonProps) => {
    return <button onClick ={onClick} className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`}>
        {props.startIcon} {props.text}</button>
}
