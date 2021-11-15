// About.js will contain the about section
import '../Styles/About.css';


const About = () => {
    return (
        <div className="about-container">

            <div className="about">
                <h1>About Us</h1>
            </div>

            <div className="img-section">
                <p>Display img</p>
            </div>

            <div className="description">
                <p>Company description</p>
            </div>

            <div className="staff">
                <h1>Staff Descriptions</h1>
            </div>

            {/*Staff descriptions below*/ }

            <div className="huzaifa-img">
                <p>huzaifa img</p>
            </div>
            <div className="huzaifa">
                <p>my name is huzaifa</p>
            </div>

            <div className="hanzalah-img">
                <p>hanzalah img</p>
            </div>
            <div className="hanzalah">
                <p>my name is hanzalah</p>
            </div>

            <div className="zubair">
                <p>my name is huzaifa</p>
            </div>
            <div className="zubair-img">
                <p>my name is huzaifa</p>
            </div>

            <div className="ziyad">
                <p>my name is huzaifa</p>
            </div>
            <div className="ziyad-img">
                <p>my name is huzaifa</p>
            </div>

        </div>
    );
}

export default About;