import "./Header.css";
import Link from "next/link";
import Image from "next/image";
import headerLogo from "@/app/assets/header-logo.png";

export default function Header() {
    return (
        <header>
            <Image alt="Animal Adventure Squad Logo" src={headerLogo} />
            <nav>
                <Link href={"/"}>About</Link>
                <Link href={"/"}>Animals</Link>
                <Link href={"/programs"}>Programs</Link>
                <Link href={"/contact-us"}>Contact Us</Link>
            </nav>
        </header>
    );
};