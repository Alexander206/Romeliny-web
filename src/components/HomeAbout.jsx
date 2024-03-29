// Dependencies
import { useContext } from "react";
import PropTypes from "prop-types";

// Context
import GlobalContext from "../context/GlobalContext";
import { Link } from "react-router-dom";

// Principal component
const HomeAbout = ({ img, title, logo, text, whatsapp, facebook, instagram, linkedin }) => {
    const { context } = useContext(GlobalContext);
    const links = context.links;
    const routes = context.routes;

    return (
        <section id="about" className="about" style={{ backgroundImage: `url(${img})` }}>
            <div className="about_gradient">
                <article className="about_article">
                    <h1>{title}</h1>
                    <img className="about_logo" src={logo} alt="logo de romeliny en circulo" />
                    <p>{text}</p>
                    <Link className="about_btn" to={routes.contact}>Contáctanos</Link>
                    <figure className="about_social">
                        <a href={links.whatsapp} target="_blank">
                            <img src={whatsapp} alt="link de whatsapp" />
                        </a>
                        <a href={links.facebook} target="_blank">
                            <img src={facebook} alt="link de facebook" />
                        </a>
                        <a href={links.instagram} target="_blank">
                            <img src={instagram} alt="link de instagram" />
                        </a>
                        <a href={links.linkedin} target="_blank">
                            <img src={linkedin} alt="link de linkedin" />
                        </a>
                    </figure>
                </article>
            </div>
        </section>
    );
};

// Validation props
HomeAbout.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    whatsapp: PropTypes.string.isRequired,
    facebook: PropTypes.string.isRequired,
    instagram: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
};

// Export component
export default HomeAbout;
