import "./HomeComponent7.css";
import Image from "next/image";
import logo from "@/app/assets/header-logo.png";

export default function HomeComponent7() {
    return (
        <section className="home-component home-component-7">
            <div className="widget">
                <Image src={logo} />
                <p className="title">Keep in touch With Us!</p>
                <input type="text" placeholder="E-mail" />
                <button>Subscribe</button>
                <p className="widget-footer">We will only send you an email once per Month at most!</p>
            </div>
        </section>
    );
};