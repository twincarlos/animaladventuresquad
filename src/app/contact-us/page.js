import "./ContactUs.css";

export default function ContactUs() {
    return (
        <main className="contact-us">
            <div className="main-body">
                <div className="main-header">
                    <h1 className="main-title">CONNECT WITH ANIMAL ADVENTURE SQUAD</h1>
                    <p>Get in touch with us! Whether you’re curious about our wildlife, conservation efforts, or planning your visit, we’re here to assist you. Reach out to our team via phone, email, or visit us in person. We look forward to hearing from you and sharing our commitment to wildlife preservation!</p>
                </div>
                <div className="container">
                    <div>
                        <h1>Contact Us</h1>
                        <p>Do you want to have this experience? Get in touch with us.</p>
                    </div>
                    <form>
                        <div className="form-labels">
                            <label>
                                First Name
                                <input />
                            </label>
                            <label>
                                Last name
                                <input />
                            </label>
                            <label>
                                Email
                                <input />
                            </label>
                            <label>
                                Subject
                                <input />
                            </label>
                            <label className="input-text">
                                Leave us a message...
                                <input type="text" />
                            </label>
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </main>
    );
};