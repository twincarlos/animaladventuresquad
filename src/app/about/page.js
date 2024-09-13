import "./About.css";
import Image from "next/image";
import aboutImg from "@/app/assets/about-img.png";

export default function About() {
    return (
        <main className="about">
            <Image src={aboutImg} />
            <div className="about-body">
                <h1>Animal Adventure Squad was founded in 2012 by Gabriel Ligon,</h1>
                <p>Following a life-changing journey to the jungles of Costa Rica’s Central Pacific Coast. While volunteering at a remote animal sanctuary, Gabriel witnessed the profound impact a small facility could have on conservation and the lives of rainforest animals. Captivated by the parrots, monkeys, sloths, and other wildlife, he returned to the US with a burning passion to aid these incredible creatures and make a significant contribution to conservation efforts.</p>
                <p>Fueled by inspiration, Gabriel acquired land and began constructing an animal preserve. He rescued parrots in need and diligently researched federal zoo regulations. Through perseverance and dedication, he obtained his USDA Zoo Exhibitors license, enabling him to host field trips and visit schools nationwide to educate students about wildlife and the challenges they face in the wild.</p>
            </div>
        </main>
    );
};