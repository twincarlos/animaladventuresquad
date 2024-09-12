import "./HomeComponent8.css";
import Image from "next/image";
import homeComponentImg from "@/app/assets/home-component-8-img.png";

export default function HomeComponent8() {
    return (
        <section className="home-component home-component-8">
            <h1>Meet Our Animal Ambassadors</h1>
            <p>Who’s your favorite? Could it be our quirky axolotl, known as the “Mexican walking fish,” or maybe our friendly tortoise who has been around since your grandparents were kids? At Animal Adventure Squad, our animal ambassadors are the stars of the show! Each of these incredible creatures plays a key role in teaching students about the diversity of life on Earth, from the rainforests to the deserts. As students learn about their habitats, adaptations, and conservation, they’ll connect with these animals on a personal level creating a lasting impression.</p>
            <Image src={homeComponentImg} />
            <h1>Support Global Conservation Efforts</h1>
            <p>Did you know that by booking our program, you’re helping protect wildlife around the world? Animal Adventure Squad has pledged $3,000,000 to support conservation projects that safeguard endangered species and their habitats. From rescuing animals in need to restoring vital ecosystems, we’re passionate about making a positive impact. And it all starts with education! By introducing students to these animals, we hope to inspire the next generation of conservationists who will protect our planet for years to come. Together, we can make a difference!</p>
        </section>
    );
};