// About.js will contain the about section
import background from '../../images/cityeditted.jpg';
import './About.css';
//import background from '../images/cityeditted.jpg';

const About = () => {
    return (
        <div className="about-container">

            <img src={background} alt="" />

            <div className="about">
                <h1>About Us</h1>
            </div>

            <div className="img-section">
            </div>

            <div className="description">
                <p>H2Z2 is a online grocery store that allows its customers to order any and all types of foods and vegetables that everyone needs on a daily basis.
                    At H2Z2 we put our customers above all else and will do anything to ensure that customers have the easiest and fattest way to shop for their daily groceries that will be delivered right to their doorstep.
                    H2Z2 gets fresh vegetables and fruits every single day to endure that what we sell to our customers in only the best of the best. Our bakery goods are made fresh every single morning andmore throuout the day for 24/7 freshness.
                    As a Web Programming project this website was created to be an engaging website where customers can interact with. This website has a contact us page and signup/login page that
                    is connected to a database that saves all the information that is inputted and also shows the message if someone used the contact us page.
                </p>

                <p></p>

                <p>
                    Thank you for shopping with H2Z2 Groceries!
                </p>
            </div>

            <div className="staff">
                <h1>Staff Descriptions</h1>
            </div>

            {/*Staff descriptions below*/}

            <div className="huzaifa-img">
            </div>
            <div className="huzaifa">
                <p>Huzaifa Zia is a second year software engineering student at the time of the production of this website. He mainly worked on the Front End design of the Home page,
                    The Products Page, The Cart page and its backend functionality. He used his previous Web Devlopment knowledge as well learned lost of new technologies in order to
                    create this website for his final Web Programming project. You can contact huzaifa at <a href="mailto::huzaifa.zia@ontariotechu.net">huzaifa.zia@ontariotechu.net </a>
                    or reach him on his <a href="https://www.linkedin.com/in/huzaifa-zia-86673b206/">LinkedIn.</a>
                </p>
            </div>

            <div className="hanzalah-img">
            </div>
            <div className="hanzalah">
                <p>Hello, My name is Hanzalah Patel. I am a second year student at Ontario Tech University studying Software Engineering. This website was designed as the final project for
                    our Web Programming class.
                </p>
            </div>

            <div className="zubair-img">
            </div>
            <div className="zubair">
                <p>Hello, My name is Zubair Islam. I am a second year student at Ontario Tech University studying Software Engineering. This website was designed as the final project for
                    our Web Programming class.
                </p>
            </div>

            <div className="ziyad-img">
            </div>
            <div className="ziyad">
                <p>Hello, My name is Ziyad Khan. I am a second year student at Ontario Tech University studying Software Engineering. This website was designed as the final project for
                    our Web Programming class.
                </p>
            </div>

        </div>
    );
}

export default About;