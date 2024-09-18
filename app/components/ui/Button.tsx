import React from "react";

/*
PROPS:

Variant:
Primary - dark bg, light text.
Secondary - light bg, dark text.
Tertiary - no bg, dark border.
Test - no bg or border.

Icon: Display an icon before the text.
As: Use the button as a <button> tag or an <a> tag.
Href: Link to use for an anchor tag.
isFullSize: Make the button the full size of the parent element.
 */

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & React.HTMLAttributes<HTMLAnchorElement> & {
    variant: "primary" | "secondary" | "tertiary" | "text",
    isFullSize?: boolean,
    icon?: string,
    as?: "a" | "button", //Buttons can be anchor tags (hrefs) or buttons (onClicks)
    href?: string,
    children: React.ReactNode,
}

const variants = {
    primary: 'px-8 py-3 bg-purple-400 justify-center items-center rounded-2xl inline-flex font-sans font-bold text-white gap-2.5 leading-none hover:bg-purple-300 transition duration-200',
    secondary: 'px-8 py-3 bg-purple-900 justify-center items-center rounded-2xl inline-flex font-sans font-bold text-purple-400 gap-2.5 leading-none hover:bg-purple-800 transition duration-200',
    tertiary: 'px-8 py-3 border-[2px] border-purple-850 justify-center items-center rounded-2xl inline-flex font-sans font-bold text-purple-400 gap-2.5 leading-none hover:bg-purple-900 transition duration-200',
    text: 'px-8 py-3 justify-center items-center rounded-2xl inline-flex font-sans font-bold text-purple-400 gap-2.5 leading-none hover:bg-purple-900 transition duration-200'
}

export default function Button({variant, children, icon, isFullSize = false, as: Component = "button", ...other}: ButtonProps){
    return (
        <Component className={`${variants[variant]} ${isFullSize && "w-full h-full"}`} {...other}>
            {icon && /* Placeholder icon TODO actual icons */ (
                // <div className="w-[22px] h-[17px] flex-col justify-center items-center inline-flex bg-teal-500"></div>
                <img src={icon} alt=""/>
            )}

            <span>
                {children}
            </span>
        </Component>
    )
}