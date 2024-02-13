import ServiceBox from "./serviceBox";

function Services(props) {
    return (
        <section className="services" id="services">
            <h2 className="heading">My <span>Services</span></h2>
            <div className="services-container">
                <ServiceBox icon="bx bx-code-alt" title="Web development" description="I craft bespoke websites that reflect your brand identity and engage your target audience. From static websites to dynamic web applications, I leverage HTML, CSS, JavaScript, Node.js, and React to build websites that are not only beautiful but also functional and efficient. Every website I create is meticulously designed to adapt flawlessly across all devices, desktops, tablets, and mobiles, ensuring a smooth and consistent user experience for everyone."/>
                <ServiceBox icon="bx bx-code-alt" title="Mobile App development" description="I build beautiful and native-feeling mobile apps for both iOS and Android using Flutter, a single codebase framework that streamlines development and saves time. I design and develop mobile apps that are not only visually appealing but also intuitive and user-friendly, ensuring a seamless interaction for your users."/>
                <ServiceBox icon="bx bxs-paint" title="Graphic Design" description=" I help you establish a strong visual identity with impactful logos, brand guidelines, and marketing materials that resonate with your audience and build brand recognition. Whether you need brochures, presentations, or social media graphics, I create stunning visuals that align with your brand identity and marketing goals."/>
            </div>
        </section>
    );
}
export default Services