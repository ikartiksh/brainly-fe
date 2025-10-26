import { ReactElement } from "react";

type Variants = "primary" | "secondary";

export interface ButtonProps {
    variant: Variants;
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement;
    onClick?: () => void;
    fullWidth?: boolean;
    loading?: boolean;
}
const variantStyles: Record<Variants, string> = {
    "primary": "bg-blue-600 text-white hover:bg-blue-700", 
    "secondary": "bg-blue-400 text-white hover:bg-blue-500" 
}

const sizeStyles: Record<ButtonProps['size'], string> = {
    "sm": "p-2 text-sm", 
    "md": "p-3 text-base", 
    "lg": "p-4 text-lg" 
}

const defaultStyles = "rounded-md font-light flex items-center justify-center space-x-2 transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed";

export const Button = (props: ButtonProps) => {
    const { variant, size, text, startIcon, onClick, fullWidth, loading } = props;
    const fullWidthStyle = fullWidth ? "w-full" : "w-auto";
    const isDisabled = loading || !onClick; 

    return (
        <button
            onClick={onClick}
            disabled={isDisabled}
            className={`${variantStyles[variant]} ${sizeStyles[size]} ${defaultStyles} ${fullWidthStyle}`}
        >
            {}
            {loading ? (
                <svg className="animate-spin h-5 w-5 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            ) : (
                startIcon
            )}
            
            {}
            {}
            {loading ? "Loading..." : text}
        </button>
    );
}