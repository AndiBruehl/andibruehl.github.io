import NavLinks from "./NavLinks";
import { CgMenuRound, CgCloseO } from 'react-icons/cg'
import classes from './NavBar.module.css'
import { useState } from "react";

const MobileNavigation = () => {

    const [open, setOpen] = useState(false);

    const hamburgerIcon = <CgMenuRound className={classes.Hamburger} size='2rem' color='white'
        onClick={() => setOpen(!open)}
    />

    const closeIcon = <CgCloseO className={classes.Hamburger} size='2rem' color='white'
        onClick={() => setOpen(!open)}
    />
    const closeMobileMenu = () => setOpen(false);
    return (
        <nav className={classes.MobileNavigation}>
            {open ? closeIcon : hamburgerIcon}
            {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
        </nav>
    );
}

export default MobileNavigation;