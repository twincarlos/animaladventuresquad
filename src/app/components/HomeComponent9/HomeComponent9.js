import "./HomeComponent9.css";
import Image from "next/image";
import manIcon from "@/app/assets/man-icon.png";
import womanIcon from "@/app/assets/woman-icon.png";

export default function HomeComponent9() {
    return (
        <section className="home-component home-component-9">
            <h1 className="title">WHAT TEACHERS ARE SAYING</h1>
            <div className="testimonials">
                <div className="testimonial">
                    <Image className="teacher-icon" src={manIcon} />
                    <div className="testimonial-quote blue">
                        <p>“The Animal Adventure Squad team gave our students an experience they’ll never forget! Not only were the kids thrilled to meet the animals, but they also walked away with a deeper understanding of important science topics like conservation and ecosystems. The live presentations made abstract concepts come to life!”</p>
                    </div>
                    <div className="testimonial-author">
                        <p>Ms. Jackson,</p>
                        <p>4th Grade Teacher</p>
                    </div>
                </div>
                <div className="testimonial pink">
                    <Image className="teacher-icon" src={womanIcon} />
                    <div className="testimonial-quote pink">
                        <p>“The Animal Adventure Squad team gave our students an experience they’ll never forget! Not only were the kids thrilled to meet the animals, but they also walked away with a deeper understanding of important science topics like conservation and ecosystems. The live presentations made abstract concepts come to life!”</p>
                    </div>
                    <div className="testimonial-author">
                        <p>Ms. Jackson,</p>
                        <p>4th Grade Teacher</p>
                    </div>
                </div>
                <div className="testimonial">
                    <Image className="teacher-icon" src={manIcon} />
                    <div className="testimonial-quote blue">
                        <p>“This past Friday when Jean came from Animal Adventure Squad, it was an amazing experience not only for our patients but the employees as well. Here at the clinic, it takes us some time to transport our patients from one room to another due to wheelchairs and equipment.</p>
                    </div>
                    <div className="testimonial-author">
                        <p>Ms. Avara,</p>
                        <p>Special Needs Teacher</p>
                    </div>
                </div>
            </div>
            <p>Our programs receive rave reviews from teachers and students alike! From boosting engagement to enhancing understanding, our animal shows have a unique way of captivating young minds and turning lessons into lasting memories.</p>
        </section>
    );
};