import "./HomeComponent2.css";
import Image from "next/image";
import homeComponentImg from "@/app/assets/home-component-2-img.png";

export default function HomeComponent2() {
    return (
        <section className="home-component home-component-2">
            <div className="container">
                <p className="title">Animal Adventure Squad was founded in 2012 by Gabriel Ligon,</p>
                <div className="paragraph">
                    <p className="text">Following a life-changing journey to the jungles of Costa Rica’s Central Pacific Coast. While volunteering at a remote animal sanctuary, Gabriel witnessed the profound impact a small facility could have on conservation and the lives of rainforest animals. Captivated by the parrots, monkeys, sloths, and other wildlife, he returned to the US with a burning passion to aid these incredible creatures and make a significant contribution to conservation efforts.</p>
                    <p className="text">Fueled by inspiration, Gabriel acquired land and began constructing an animal preserve. He rescued parrots in need and diligently researched federal zoo regulations. Through perseverance and dedication, he obtained his USDA Zoo Exhibitors license, enabling him to host field trips and visit schools nationwide to educate students about wildlife and the challenges they face in the wild.</p>
                </div>
            </div>
            <div className="container">
                <Image src={homeComponentImg} />
            </div>
        </section>
    );
};