import "./Button.css"

interface ButtonProps {
    text: string,
    variant: "primary" | "neutral" | "subtle"
}

export function Button({text, variant}:ButtonProps ) {
    return(
        <button className={variant}>{text}</button>
    )
}

