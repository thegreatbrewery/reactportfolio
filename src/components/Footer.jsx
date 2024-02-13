import { Link } from "react-router-dom";
function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer className="footer">
            <div className="footer-text">
                <p>&copy; Copyright {year} Cedric Olunga - All Rights Reserved.</p>
            </div>

            <div class="footer-iconTop">
                <Link to='/'className="footer-link"><i class='bx bx-up-arrow-alt'></i></Link>
            </div>
        </footer>
    );
}
export default Footer