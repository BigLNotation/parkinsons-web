import React from "react";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
    variant: "primary" | "secondary" | "tertiary" | "text",
    icon?: boolean,
    as?: string,
}

const variants = {
    primary: 'px-8 py-3 bg-purple-400 justify-center items-center rounded-2xl inline-flex font-sans font-bold text-white gap-2.5 leading-none hover:bg-purple-300 transition duration-200',
    secondary: 'px-8 py-3 bg-purple-900 justify-center items-center rounded-2xl inline-flex font-sans font-bold text-purple-400 gap-2.5 leading-none hover:bg-purple-800 transition duration-200',
    tertiary: 'px-8 py-3 border-[2px] border-purple-850 justify-center items-center rounded-2xl inline-flex font-sans font-semibold text-purple-400 gap-2.5 leading-none hover:bg-purple-900 transition duration-200',
    text: 'px-8 py-3 justify-center items-center rounded-2xl inline-flex font-sans font-semibold text-purple-400 gap-2.5 leading-none hover:bg-purple-900 transition duration-200'
}

export default function Button({variant, children, icon, as: Component = "button", ...other}: ButtonProps){
    return (
        <Component className={variants[variant]} {...other}>
            {icon && /* Placeholder icon TODO actual icons */ (
                <div className="w-[22px] h-[17px] flex-col justify-center items-center inline-flex bg-teal-500"></div>
            )}

            <span>
                {children}
            </span>
        </Component>
    )
}