import "./HomeComponent1.css";
import Image from "next/image";
import homeComponentImg from "@/app/assets/home-component-1-img.png";
import Link from "next/link";

export default function HomeComponent1() {
    return (
        <section className="home-component home-component-1">
            <Image src={homeComponentImg} />
            <div className="book-a-visit-container">
                <Link href={"/contact-us"}>BOOK A VISIT</Link>
                <h2>Free for Your School!</h2>
                <p>Want to bring our exciting animal programs to your school for FREE? It’s easy! We offer complimentary educational sessions to schools with 300 or more students. All we ask in return is that students have the opportunity to take a photo with one of our animal ambassadors to help fund our program.</p>
            </div>
        </section>
    );
};