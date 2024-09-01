"use client";
import "./Header.css";
import Link from "next/link";
import Image from "next/image";
import headerLogo from "@/app/assets/header-logo.png";
import headerLogoMobile from "@/app/assets/logo-mobile.png";
import burguerIcon from "@/app/assets/burguer-icon.png";
import { useState } from "react";
import { useSection } from "@/app/context/SectionContext";

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const { setSection } = useSection();

    return (
        <>
            {showMenu && (
                <div className="mobile-menu-overlay">
                    <div className="mobile-menu">
                        <Link onClick={() => {
                            setSection("about")
                            setShowMenu(false);
                        }} href={"/#about"}>About</Link>
                        <Link onClick={() => {
                            setSection("")
                            setShowMenu(false);
                        }} href={"/animals"}>Animals</Link>
                        <Link onClick={() => {
                            setSection("programs")
                            setShowMenu(false);
                        }} href={"/#programs"}>Programs</Link>
                        <Link onClick={() => {
                            setSection("")
                            setShowMenu(false);
                        }} href={"/contact-us"}>Contact Us</Link>
                    </div>
                </div>
            )}
            <header className="Large">
                <Link href={"/"}><Image alt="Animal Adventure Squad Logo" src={headerLogo} /></Link>
                <nav>
                    <Link onClick={() => {
                        setSection("about");
                    }} href={"/#about"}>About</Link>
                    <Link onClick={() => {
                        setSection("");
                    }} href={"/animals"}>Animals</Link>
                    <Link onClick={() => {
                        setSection("programs");
                    }} href={"/#programs"}>Programs</Link>
                    <Link onClick={() => {
                        setSection("");
                    }} href={"/contact-us"}>Contact Us</Link>
                </nav>
            </header>
            <header className="Small">
                <div className="header">
                    <Link href={"/"}><Image className="mobile-logo" src={headerLogoMobile} /></Link>
                    <Image onClick={() => setShowMenu(!showMenu)} className="burguer-icon" src={burguerIcon} />
                </div>
            </header>
        </>
    );
};