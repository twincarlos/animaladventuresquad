import "./HomeComponent3.css";
import Image from "next/image";
import homeComponentImg from "@/app/assets/home-component-3-img.png";

export default function HomeComponent3() {
    return (
        <section className="home-component home-component-3">
            <p className="title">STATES WE SERVICE</p>
            <Image src={homeComponentImg} />
        </section>
    );
};