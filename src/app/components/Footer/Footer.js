import "./Footer.css";
import Link from "next/link";
import Image from "next/image";
import footerImg from "@/app/assets/footer-img.png";
import footerLogo from "@/app/assets/header-logo.png";

export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-top-container">
                    <Image src={footerLogo} />
                    <div className="footer-links">
                        <div className="footer-link-column">
                            <Link href={"/"}>About Us</Link>
                            <Link href={"/"}>Animals</Link>
                            <Link href={"/"}>Programs</Link>
                        </div>
                        <div className="footer-link-column">
                            <Link href={"/"}>Privacy policy</Link>
                            <Link href={"/"}>Terms and conditions</Link>
                            <Link href={"/"}>End user Agreement</Link>
                        </div>
                    </div>
                </div>
                <p className="footer-copyright">2024 CristianSarchy | animaladventuresquad.com | AnimalAdventure Squad LLC. All rights</p>
            </div>
            <Image src={footerImg} />
        </footer>
    );
};