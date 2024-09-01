"use client";
import "./Header.css";
import Link from "next/link";
import Image from "next/image";
import headerLogo from "@/app/assets/header-logo.png";
import headerLogoMobile from "@/app/assets/logo-mobile.png";
import burguerIcon from "@/app/assets/burguer-icon.png";
import { useState } from "react";

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            {showMenu && (
                <div className="mobile-menu-overlay">
                    <div className="mobile-menu">
                        <Link href={"/"}>About</Link>
                        <Link href={"/"}>Animals</Link>
                        <Link href={"/programs"}>Programs</Link>
                        <Link href={"/contact-us"}>Contact Us</Link>
                    </div>
                </div>
            )}
            <header className="Large">
                <Image alt="Animal Adventure Squad Logo" src={headerLogo} />
                <nav>
                    <Link href={"/"}>About</Link>
                    <Link href={"/"}>Animals</Link>
                    <Link href={"/programs"}>Programs</Link>
                    <Link href={"/contact-us"}>Contact Us</Link>
                </nav>
            </header>
            <header className="Small">
                <Image className="mobile-logo" src={headerLogoMobile} />
                <Image onClick={() => setShowMenu(!showMenu)} className="burguer-icon" src={burguerIcon} />
            </header>
        </>
    );
};