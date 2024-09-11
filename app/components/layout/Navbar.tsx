type NavbarProps = {
    variant: "logged-out" | "caregiver" | "patient"
}

const variants = {
    "patient": "h-[70px] w-screen fixed top-0 bg-teal-100",
    "caregiver": "",
    "logged-out": ""
}

function Navbar({variant}: NavbarProps) {
    return(
        <header className={variants[variant]}>
            .
        </header>
    )
}

export default Navbar
