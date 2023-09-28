import { Link } from "react-router-dom";

function Menu() {
    return (
        <nav>
            <ul className="navList">
                <li className="navBrand">Gradebook</li>
                <li className="navItem"><Link className="navLink" to="/">Home</Link></li>
            </ul>
            <Link className="createButton" to="/create-assignment">+</Link>
        </nav>
    )
}

export default Menu