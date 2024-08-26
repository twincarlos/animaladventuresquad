import "./HomeComponent1.css";
import Image from "next/image";
import homeComponentImg from "@/app/assets/home-component-1-img.png";

export default function HomeComponent1() {
    return (
        <section className="home-component home-component-1">
            <Image src={homeComponentImg} />
        </section>
    );
};