import React from "react";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
    variant: "primary" | "secondary" | "tertiary" | "text",
    icon?: boolean,
}

const variants = {
    primary: 'px-8 py-3 bg-purple-400 justify-center items-center rounded-2xl inline-flex font-sans font-bold text-white gap-2.5 leading-none',
    secondary: 'px-8 py-3 bg-purple-900 justify-center items-center rounded-2xl inline-flex font-sans font-bold text-purple-400 gap-2.5 leading-none',
    tertiary: 'px-8 py-3 border-[2px] border-purple-850 justify-center items-center rounded-2xl inline-flex font-sans font-bold text-purple-400 gap-2.5 leading-none',
    text: 'px-8 py-3 border-[2px] justify-center items-center rounded-2xl inline-flex font-sans font-bold text-purple-400 gap-2.5 leading-none'
}

export default function Button({variant, children, icon, ...other}: ButtonProps){
    return (
        <button className={variants[variant]} {...other}>
            {icon &&
                // Placeholder icon TODO actual icons
                (
                <div className="w-[22px] h-[17px] flex-col justify-center items-center inline-flex bg-teal-100">

                </div>
                )}
            <span>
                {children}
            </span>
        </button>
    )
}