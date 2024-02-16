export default function Contact() {
    return (
        <section className="contact" id="contact">
            <h2 className="heading">Contact <span>Me!</span></h2>
            <form name="Contact Form" method="POST" data-netlify="true">
                <div className="input-box">
                    <input type="text" placeholder="Full Name" name="fullName" />
                    <input type="email" placeholder="Email Address" name="email"/>
                </div>
                <div className="input-box">
                    <input type="number" placeholder="Mobile number" name="contactNumber" />
                    <input type="text" placeholder="Email Subject" name="emailSubject"/>
                </div>
                <textarea name="meassage" cols="30" rows="10" placeholder="Your Message" />
                <button type="submit" class="btn">Send message</button>
            </form>
        </section>
    );
}