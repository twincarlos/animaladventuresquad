import "./Programs.css";
import Image from "next/image";
import programsHeaderImg from "@/app/assets/programs-header-img.png";
import ambassadors1 from "@/app/assets/ambassadors-1.png";
import ambassadors2 from "@/app/assets/ambassadors-2.png";
import ambassadors3 from "@/app/assets/ambassadors-3.png";
import animal1 from "@/app/assets/animal-1.png";
import animal2 from "@/app/assets/animal-2.png";
import animal3 from "@/app/assets/animal-3.png";

export default function Programs() {
    return (
        <main className="programs">
            <section className="programs-header">
                <Image className="programs-header-img" src={programsHeaderImg} />
            </section>
            <section className="programs-ambassadors main-body">
                <h1>FALL 24 AND SPRING 25 AMBASSADORS</h1>
                <div className="Large ambassadors-container">
                    <div className="ambassadors-imgs">
                        <Image className="ambassador ambassador-1" src={ambassadors1} />
                        <Image className="ambassador ambassador-2" src={ambassadors2} />
                        <Image className="ambassador ambassador-3" src={ambassadors3} />
                    </div>
                    <div className="ambassadors-names">
                        <p className="ambassador-name ambassador-name-1">Various species of snakes</p>
                        <p className="ambassador-name ambassador-name-2">Monkey Tailed Skink</p>
                        <p className="ambassador-name ambassador-name-3">Various species of parrots</p>
                    </div>
                </div>
                <div className="Small ambassadors-container">
                    <div className="ambassador-container ambassador-container-1">
                        <Image className="ambassador ambassador-1" src={ambassadors1} />
                        <p className="ambassador-name ambassador-name-1">Various species of snakes</p>
                    </div>
                    <div className="ambassador-container ambassador-container-2">
                        <Image className="ambassador ambassador-2" src={ambassadors2} />
                        <p className="ambassador-name ambassador-name-2">Monkey Tailed Skink</p>
                    </div>
                    <div className="ambassador-container ambassador-container-3">
                        <Image className="ambassador ambassador-3" src={ambassadors3} />
                        <p className="ambassador-name ambassador-name-3">Various species of parrots</p>
                    </div>
                </div>
            </section>
            <section className="programs-animals">
                <div className="programs-animals-names">
                    <p className="programs-animal-name">Bearded Dragon</p>
                    <p className="programs-animal-name">Madagascan Tenrec</p>
                    <p className="programs-animal-name">Spectacled Owl</p>
                    <p className="programs-animal-name long">Madagascan Hissing Cockroaches</p>
                    <p className="programs-animal-name white">Blue Tongue Skink</p>
                    <p className="programs-animal-name">Blue Tongue Skink</p>
                    <p className="programs-animal-name">Hedgehog</p>
                    <p className="programs-animal-name">Silkie Chicken</p>
                </div>
            </section>
            <section className="programs-animal-imgs">
                <div className="Large ambassadors-container main-body">
                    <div className="ambassadors-imgs">
                        <Image className="animal ambassador ambassador-1" src={animal1} />
                        <Image className="animal ambassador ambassador-2" src={animal2} />
                        <Image className="animal ambassador ambassador-3" src={animal3} />
                    </div>
                    <div className="animals-names">
                        <p className="ambassador-name animal-name-1">3 Banded Armadillo</p>
                        <p className="ambassador-name animal-name-2">Spectacled Owl</p>
                        <p className="ambassador-name animal-name-3">Axolotl</p>
                    </div>
                </div>
                <div className="Small ambassadors-container main-body">
                    <div className="animal-container">
                        <Image className="animal ambassador ambassador-2" src={animal2} />
                        <p className="ambassador-name animal-name-2">Spectacled Owl</p>
                    </div>
                    <div className="animal-container">
                        <Image className="animal ambassador ambassador-1" src={animal1} />
                        <p className="ambassador-name animal-name-1">3 Banded Armadillo</p>
                    </div>
                    <div className="animal-container">
                        <Image className="animal ambassador ambassador-3" src={animal3} />
                        <p className="ambassador-name animal-name-3">Axolotl</p>
                    </div>
                </div>
            </section>
            <section className="programs-footer">
                <p>Get in touch with us! Whether you’re curious about our wildlife, conservation efforts, or planning your visit, we’re here to assist you. Reach out to our team via phone, email, or visit us in person. We look forward to hearing from you and sharing our commitment to wildlife preservation!</p>
            </section>
        </main>
    );
};