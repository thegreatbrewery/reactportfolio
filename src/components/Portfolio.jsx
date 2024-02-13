import PortfolioBox from "./portfolioBox";
import noganestLogo from '../images/Noganest.png'
import noganestWebsite from '../images/noganestWebsite.png'
import brochure1 from '../images/1brochure.jpg'
import brochure2 from '../images/2brochure.jpg'
import brochure3 from '../images/3brochure.jpg'
import flyer2 from '../images/flyer...jpg'

function Portfolio() {
    return (
        <section class="portfolio" id="portfolio">
            <h2 class="heading">Latest <span>Projects</span></h2>

            <div class="portfolio-container">
                <PortfolioBox image={noganestWebsite} niche='Web Design' />
                <PortfolioBox image={noganestLogo} niche='Logo Design' />
                <PortfolioBox image={brochure1} niche='Brochure Design'/>
                <PortfolioBox image={brochure2} niche='Brochure Design'/>
                <PortfolioBox image={brochure3} niche='Brochure Design'/>
                <PortfolioBox image={flyer2} niche='Flyer Design'/>
            </div>
        </section>
    )
}
export default Portfolio