import '../Styles/howto.css';
import img from '../images/howtoimg.png';

const HowTo = () => {
    return (
        <div className="howto-container">
            <h1>How To Shop- Simple 1, 2 & 3 </h1>
            <div>
            </div>
            <div>
                <ul className="howto-list">
                    <li><img src={img}></img> </li>
                    <li className="wordlist"><i class="fas fa-scroll"></i> Scroll down and view our items from our wide selection!
                        <br></br><br></br><i class="fas fa-shopping-cart"></i> Choose how many you want and add them to your cart!
                        <br></br><br></br><i class="fas fa-money-check-alt"></i> Add some more items and then go to your cart and checkout!
                    </li>
                </ul>
            </div>

        </div >

    )
}

export default HowTo;