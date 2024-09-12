import "./HomeComponent2.css";
import Image from "next/image";
import homeComponentImg from "@/app/assets/home-component-2-img.png";
import homeComponentImg1 from "@/app/assets/home-component-2-img-1.png";
import homeComponentImg2 from "@/app/assets/home-component-2-img-2.png";

export default function HomeComponent2() {
    return (
        <section className="home-component home-component-2">
            <div className="mobile">
                <div className="container">
                    <p className="title">Animal Adventure Squad was founded in 2012 by Gabriel Ligon,</p>
                    <div className="paragraph">
                        <p className="text">Following a life-changing journey to the jungles of Costa Rica’s Central Pacific Coast. While volunteering at a remote animal sanctuary, Gabriel witnessed the profound impact a small facility could have on conservation and the lives of rainforest animals. Captivated by the parrots, monkeys, sloths, and other wildlife, he returned to the US with a burning passion to aid these incredible creatures and make a significant contribution to conservation efforts.</p>
                            <Image className="Small" src={homeComponentImg} />
                        <p className="text">Fueled by inspiration, Gabriel acquired land and began constructing an animal preserve. He rescued parrots in need and diligently researched federal zoo regulations. Through perseverance and dedication, he obtained his USDA Zoo Exhibitors license, enabling him to host field trips and visit schools nationwide to educate students about wildlife and the challenges they face in the wild.</p>
                    </div>
                </div>
                <div className="Large container">
                    <Image src={homeComponentImg} />
                </div>
            </div>
            <div className="desktop">
                <div className="Large container">
                    <Image src={homeComponentImg1} />
                </div>
                <div className="container">
                    <p className="title">Wild Encounters, Real Learning: Bringing the Zoo to You!</p>
                    <div className="paragraph">
                        <p className="text">At Animal Adventure Squad, we believe learning about nature should be exciting, interactive, and unforgettable! Our traveling team brings a variety of live animals straight to your school, giving students the chance to meet incredible creatures like tortoises, parrots, kangaroos, and even an axolotl! Through hands-on animal encounters, students will gain a deeper understanding of conservation, biology, and the natural world sparking curiosity and a love for wildlife. Get ready to watch their eyes light up as they learn about animal adaptations, ecosystems, and more in a fun and engaging way!</p>
                    </div>
                </div>
            </div>
            <div className="desktop">
                <div className="container">
                    <p className="title">Aligned with National Science Standards</p>
                    <div className="paragraph">
                        <p className="text">Our programs are designed to make learning both meaningful and memorable! We tailor our animal shows to fit the specific science curriculum for each grade level. Whether it’s exploring animal life cycles with 2nd and 3rd graders or discussing ecosystems and adaptations with 4th and 5th graders, our educators bring concepts to life through real animal ambassadors. We even help improve science testing scores by reinforcing key topics with exciting, real-world examples—making learning not just an experience but an adventure!</p>
                    </div>
                </div>
                <div className="Large container">
                    <Image src={homeComponentImg2} />
                </div>
            </div>
        </section>
    );
};