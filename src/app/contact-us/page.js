"use client";
import "./ContactUs.css";
import Image from "next/image";
import contactUsMobile from "@/app/assets/contact-us-mobile.png";
import { sendEmail } from "@/app/actions/mailchimp.js";
import emailjs from "emailjs-com";
import { useState } from "react";

export default function ContactUs() {
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
    });

    async function handleSubmit () {
        await emailjs.send(
            process.env.NEXT_PUBLIC_SERVICE_ID,
            process.env.NEXT_PUBLIC_TEMPLATE_ID,
            {
                user_name: userData.firstName + " " + userData.lastName,
                user_email: userData.email,
                message: userData.message,
                subject: userData.subject
            },
            process.env.NEXT_PUBLIC_USER_ID
        );
        setData({
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            message: ""
        });
    };

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
                                <input type="text" name="first-name" value={userData.firstName} onChange={e => setUserData({ ...userData, firstName: e.target.value })} />
                            </label>
                            <label>
                                Last name
                                <input type="text" name="last-name" value={userData.lastName} onChange={e => setUserData({ ...userData, lastName: e.target.value })} />
                            </label>
                            <label>
                                Email
                                <input type="email" name="email" value={userData.email} onChange={e => setUserData({ ...userData, email: e.target.value })} />
                            </label>
                            <label>
                                Subject
                                <input type="subject" name="subject" value={userData.subject} onChange={e => setUserData({ ...userData, subject: e.target.value })} />
                            </label>
                            <label className="input-text">
                                Leave us a message...
                                <input type="text" name="message" value={userData.message} onChange={e => setUserData({ ...userData, message: e.target.value })} />
                            </label>
                        </div>
                        <button onClick={() => {
                            handleSubmit();
                            alert("Thanks for your message! Our team will review it shortly.");
                            window.location.reload();
                        }} type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </main>
    );
};
