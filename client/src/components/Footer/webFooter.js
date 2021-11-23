import './footer.css';
import { footerItems } from './footerItems.js';

const webFooter = () => {
    return(

        <div className = "footer-container">

            <p></p>
            <p></p>
            <p></p>

            <p className = "paragraph"><i class="fab fa-twitter"></i>&nbsp;&nbsp;<i class="fab fa-facebook"></i>&nbsp;&nbsp;<i class="fab fa-instagram"></i>&nbsp;&nbsp;<i class="fab fa-linkedin"><br/></i></p>

            <p></p>

            <form method="get" action="/">
                <button type="submit">Home</button>
            </form>

            <p></p>
            <p></p>
            <h1 className = "footerh1"><i className="fab fa-react"></i> H2Z2 Groceries</h1>

        </div>
    )
}

export default webFooter;