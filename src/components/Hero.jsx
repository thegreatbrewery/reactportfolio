import { Link } from "react-router-dom";
import myImage from '../images/home.png'
export default function Hero() {
    return (
        <section className="home" id="home">
            <div class="home-content">
                <h3>Hello, It's Me</h3>
                <h1>Cedric Olunga</h1>
                <p>
                    As a web developer, my passion is building stunning and useful websites for those who wish to change the world.
                </p>
                <div class="social-media">
                    <Link to=''><i className='bx bxl-facebook social-link'></i></Link>
                    <Link to=''><i className='bx bxl-twitter social-link'></i></Link>
                    <Link to=''><i className='bx bxl-linkedin social-link' ></i></Link>
                </div>
            </div>
            <div className="home-img">
                <img src={myImage} alt="olunga" />
            </div>
        </section>
    );
}