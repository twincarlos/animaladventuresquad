import "./HomeComponent3.css";
import Image from "next/image";
import homeComponentImg from "@/app/assets/home-component-3-img.png";
import homeComponentImgMobile from "@/app/assets/home-component-3-img-mobile.png";

export default function HomeComponent3() {
    return (
        <section className="home-component home-component-3">
            <p className="title">STATES WE SERVICE</p>
            <Image className="Large" src={homeComponentImg} />
            <Image className="Small" src={homeComponentImgMobile} />
        </section>
    );
};