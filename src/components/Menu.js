import { Link } from "react-router-dom";

function Menu() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
            </ul>
        </nav>
    )
}

export default Menu