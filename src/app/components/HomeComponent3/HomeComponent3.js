import "./HomeComponent3.css";
import Image from "next/image";
import homeComponentImg from "@/app/assets/home-component-3-img.png";

export default function HomeComponent3() {
    return (
        <section className="home-component home-component-3">
            <div className="container">
                <p className="title">LOCATION(S)</p>
                <p className="sub-title">(Headquarters and any other locations)</p>
            </div>
            <Image src={homeComponentImg} />
        </section>
    );
};