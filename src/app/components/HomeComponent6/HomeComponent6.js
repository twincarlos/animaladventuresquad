import "./HomeComponent6.css";
import Image from "next/image";
import homeComponentImg1 from "@/app/assets/home-component-6-img-1.png";
import homeComponentImg2 from "@/app/assets/home-component-6-img-2.png";
import homeComponentImg3 from "@/app/assets/home-component-6-img-3.png";
import homeComponentImg4 from "@/app/assets/home-component-6-img-4.png";
import homeComponentImg5 from "@/app/assets/home-component-6-img-5.png";

export default function HomeComponent6() {
    return (
        <section className="home-component home-component-6">
            <div className="container container-top">
                <p className="title">CORE VALUES</p>
            </div>
            <div className="container container-bottom">
                <div className="text-box">
                    <Image className="text-box-img" src={homeComponentImg1} />
                    <p className="text-box-title">Passion for Wildlife</p>
                    <p className="text-box-text">We are dedicated to the well-being and protection of all animals, fostering a love and respect for wildlife.</p>
                </div>
                <div className="text-box">
                    <Image className="text-box-img" src={homeComponentImg2} />
                    <p className="text-box-title">Education and Awareness</p>
                    <p className="text-box-text">We believe in the power of education to create lasting change, inspiring individuals to become advocates for conservation.</p>
                </div>
                <div className="text-box">
                    <Image className="text-box-img" src={homeComponentImg3} />
                    <p className="text-box-title">Conservation Commitment</p>
                    <p className="text-box-text">We are committed to preserving natural habitats and supporting conservation projects globally.</p>
                </div>
                <div className="text-box">
                    <Image className="text-box-img" src={homeComponentImg4} />
                    <p className="text-box-title">Integrity and Responsibility</p>
                    <p className="text-box-text">We operate with transparency, integrity, and a deep sense of responsibility toward the environment and the communities we serve.</p>
                </div>
                <div className="text-box">
                    <Image className="text-box-img" src={homeComponentImg5} />
                    <p className="text-box-title">Collaboration and Community</p>
                    <p className="text-box-text">We value partnerships and community engagement, working together to achieve our conservation and education goals.</p>
                </div>
            </div>
        </section>
    );
};