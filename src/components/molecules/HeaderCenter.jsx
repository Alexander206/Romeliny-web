// Dependencies
import { useContext } from "react";
import PropTypes from "prop-types";

// Components
import HeaderNavItem from "../atoms/HeaderNavItem.jsx";

// Context
import GlobalContext from "../../context/GlobalContext.jsx";

// Principal component
const HeaderCenter = ({ nav }) => {
    // Datos obtenidos del contexto
    const { context } = useContext(GlobalContext);
    const routes = context.routes;

    return (
        <nav className="header_center">
            <ul className="header_list">
                <HeaderNavItem link={routes.home} text={nav[0]} />
                <HeaderNavItem link={routes.store} text={nav[1]} />
                <HeaderNavItem link={routes.contact} text={nav[2]} />
            </ul>
        </nav>
    );
};

// Validation props
HeaderCenter.propTypes = {
    nav: PropTypes.array.isRequired,
};

// Export component
export default HeaderCenter;
