// import { Link } from "react-router-dom";
function PortfolioBox(props){
    return (
        <div class="portfolio-box">
        <img src={props.image} alt="" /> 

        <div class="portfolio-layer">
            <h4>{props.niche}</h4>
        </div>
    </div>
    )
}

export default PortfolioBox