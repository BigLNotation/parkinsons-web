import React from "react";

/*
Buttons in the navbar.
Variants and accompanying icons are HARDCODED:
- Accessibility
- Sidebar toggle
More can be added if needed.
 */

type NavButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
    variant: "accessibility" | "sidebar",
    children: string,
}

export default function NavbarButton({variant, children, ...other}: NavButtonProps){
    return (
        <button className="px-4 py-3 bg-teal-200 flex gap-4 items-center justify-center rounded-xl hover:bg-teal-300 transition duration-200" {...other}>

            {variant === "accessibility" && <img src="/icons/navbarAccessibility.svg" alt="Accessibility menu"/>}
            {variant === "sidebar" && <img src="/icons/navbarSidebar.svg" alt="Toggle sidebar"/>}

            <span className="text-white font-bold">
                {children}
            </span>
        </button>
    )
}