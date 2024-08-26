import "./Footer.css";
import Image from "next/image";
import footerImg from "@/app/assets/footer-img.png";

export default function Footer() {
    return (
        <footer>
            <Image src={footerImg} />
        </footer>
    );
};