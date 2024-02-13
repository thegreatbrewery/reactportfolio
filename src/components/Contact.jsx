export default function Contact() {
    return (
        <section className="contact" id="contact">
            <h2 className="heading">Contact <span>Me!</span></h2>
            <form>
                <div className="input-box">
                    <input type="text" placeholder="Full Name" />
                    <input type="email" placeholder="Email Address" />
                </div>
                <div className="input-box">
                    <input type="number" placeholder="Mobile number" />
                    <input type="text" placeholder="Email Subject" />
                </div>
                <textarea name="" id="" cols="30" rows="10" placeholder="Your Message" />
                <input type="submit" value="Send Message" class="btn" />
            </form>
        </section>
    );
}