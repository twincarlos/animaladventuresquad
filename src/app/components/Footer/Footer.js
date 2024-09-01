"use client";
import "./Footer.css";
import Link from "next/link";
import Image from "next/image";
import footerImg from "@/app/assets/footer-img.png";
import footerLogo from "@/app/assets/header-logo.png";
import { useSection } from "@/app/context/SectionContext";

export default function Footer() {
    const { section, setSection } = useSection();
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-top-container">
                    <Image src={footerLogo} />
                    <div className="footer-links">
                        <div className="footer-link-column">
                            <Link onClick={() => {
                                setSection(section === "about-1" ? "about-2" : "about-1");
                            }} href={"/#about"}>About Us</Link>
                            <Link onClick={() => {
                                setSection("");
                            }} href={"/animals"}>Animals</Link>
                            <Link onClick={() => {
                                setSection(section === "programs-1" ? "programs-2" : "programs-1");
                            }} href={"/#programs"}>Programs</Link>
                            <Link onClick={() => {
                                setSection("");
                            }} href={"/contact-us"}>Contact Us</Link>
                        </div>
                        <div className="footer-link-column">
                            <Link href={"/"}>Privacy policy</Link>
                            <Link href={"/"}>Terms and conditions</Link>
                            <Link href={"/"}>End user Agreement</Link>
                        </div>
                    </div>
                </div>
                <p className="footer-copyright">© 2024 Animal Adventure Squad</p>
            </div>
            <Image src={footerImg} />
        </footer>
    );
};