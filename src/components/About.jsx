import aboutImg from '../images/about.png'
function About() {
    return (
        <section className="about" id="about">
            <div className="about-img">
                <img src={aboutImg} alt="olunga" />
            </div>

            <div className="about-content">
                <h2 class="heading">About <span>Me</span></h2>
                <p>
                    Hi there! I'm Cedric Olunga, a full-stack developer and graphic designer who thrives at the intersection of code and creativity. <br/>I bring websites and applications to life, wielding tools like HTML, CSS, JavaScript, Node.js, and React to build dynamic and user-friendly experiences. <br/>But my passion doesn't stop there. With Adobe Photoshop and Illustrator in my hands, I craft stunning visuals, logos, and branding elements that resonate with your audience and complement your online presence
                    This is just a glimpse into my world.
                </p>
                <p>
                    Imagine a sleek landing page that converts visitors into customers, or a mobile app that feels as intuitive as it is visually captivating. <br/>That's where I come in, bridging the gap between technical prowess and artistic flair. Whether you need a complete website overhaul or a captivating logo design, I'm here to collaborate and turn your vision into reality.
                </p>
                <p>
                    Let's connect and explore how I can help you achieve your digital goals!
                </p>
            </div>
        </section>
    );
}
export default About