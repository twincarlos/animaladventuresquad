import "./HomeComponent4.css";
import Image from "next/image";
import homeComponentImg from "@/app/assets/home-component-4-img.png";

export default function HomeComponent4() {
    return (
        <section className="home-component home-component-4">
            <Image src={homeComponentImg} />
        </section>
    );
};