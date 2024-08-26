import "./HomeComponent5.css";
import Image from "next/image";
import homeComponentImg1 from "@/app/assets/home-component-5-img-1.png";
import homeComponentImg2 from "@/app/assets/home-component-5-img-2.png";
import homeComponentImg3 from "@/app/assets/home-component-5-img-3.png";

export default function HomeComponent5() {
    return (
        <section className="home-component home-component-5">
            <div className="container container-top">
                <p className="title">PRIMARY PROGRAM FOCUS</p>
                <p className="sub-title">Programs can be tailored to your organization or school’s curriculum and focuses on habitats, adaptations, and many other STEM related topics.</p>
            </div>
            <div className="container container-bottom">
                <Image src={homeComponentImg1} />
                <Image src={homeComponentImg2} />
                <Image src={homeComponentImg3} />
            </div>
        </section>
    );
};