import './Contact.css'

const Contact = () => {
    return (
        <div className="form-container">

            <h1 className="contactUs"><i class="fas fa-paper-plane"></i>Contact Us</h1>

            <div className="contact-info">
                <h1>Contact Information:</h1>

                <p></p>

                <p>H2Z2 always puts customers first and love to help anyone who has aproblem with any of our products. Contact us using the information below or fill out the form on the right to get in touch with us.</p>
                <p>Thank You for shopping with H2Z2!</p>

                <p></p>

                <p><i class="fas fa-phone"></i> (647)-000-HELP</p>
                <p><i class="fas fa-envelope-square"></i> Contact@h2z2.com</p>
                <p><i class="fas fa-map-marker-alt"></i> 2000 Simcoe St N, Oshawa, ON L1G 0C5</p>

                <p></p>

                <h3>Contact us on our social media</h3>

                <p><i class="fab fa-twitter"></i>   <i class="fab fa-facebook"></i>   <i class="fab fa-instagram"></i></p>

            </div>


            <div className="contact-form">
                <form>

                    <h1>Send us a message!</h1>

                    <label for="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." required />

                    <label for="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." required />

                    <label for="email">Email: </label>
                    <input type="email" id="email" name="email" id="email" className="email" placeholder="example@something.com" tabIndex="3" required />

                    <label for="message">Message: </label>
                    <textarea id="message" placeholder="Message..." name="message" />

                    <input type="submit" className="send" />

                </form>
            </div>
            
            <div className="dissappear">
                <p>T</p>
                <p>T</p>
                <p>T</p>
                <p>T</p>
                <p>T</p>

            </div>
        </div>

    )
}

export default Contact;