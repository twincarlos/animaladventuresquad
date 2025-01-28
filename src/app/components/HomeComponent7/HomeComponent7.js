"use client";
import "./HomeComponent7.css";
import Image from "next/image";
import logo from "@/app/assets/header-logo.png";
import { mailchimp } from "@/app/actions/mailchimp.js";

export default function HomeComponent7() {
    return (
        <section className="home-component home-component-7">
            <div className="widget">
                <Image src={logo} />
                <p className="title">Keep in touch With Us!</p>
                <form action={mailchimp}>
                    <input type="text" name="email" placeholder="E-mail" />
                    <button type="submit" onClick={() => alert("Thanks for subscribing!")}>Subscribe</button>
                </form>
                <p className="widget-footer">We will only send you an email once per Month at most!</p>
            </div>
        </section>
    );
};
