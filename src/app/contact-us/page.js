"use client";
import "./ContactUs.css";
import Image from "next/image";
import contactUsMobile from "@/app/assets/contact-us-mobile.png";
import { sendEmail } from "@/app/actions/mailchimp.js";

export default function ContactUs() {
    return (
        <main className="contact-us">
            <div className="main-body">
                <div className="main-header">
                    <Image className="contact-us-mobile" src={contactUsMobile} />
                    <h1 className="main-title">CONNECT WITH ANIMAL ADVENTURE SQUAD</h1>
                    <p>Get in touch with us! Whether you’re curious about our wildlife, conservation efforts, or planning your visit, we’re here to assist you. Reach out to our team via phone, email, or visit us in person. We look forward to hearing from you and sharing our commitment to wildlife preservation!</p>
                </div>
                <div className="container">
                    <div className="contact-us-form-header">
                        <h1>Contact Us</h1>
                        <p>Do you want to have this experience? Get in touch with us.</p>
                    </div>
                    <form action={sendEmail}>
                        <div className="form-labels">
                            <label>
                                First Name
                                <input type="text" name="first-name" />
                            </label>
                            <label>
                                Last name
                                <input type="text" name="last-name" />
                            </label>
                            <label>
                                Email
                                <input type="email" name="email" />
                            </label>
                            <label>
                                Subject
                                <input type="subject" name="subject" />
                            </label>
                            <label className="input-text">
                                Leave us a message...
                                <input type="text" name="message" />
                            </label>
                        </div>
                        <button onClick={() => {
                            alert("Thanks for your message! Our team will review it shortly.");
                            window.location.reload();
                        }} type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </main>
    );
};
