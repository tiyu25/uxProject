import { Link } from "react-router-dom";

const Nav = (): React.JSX.Element => {
    return (
        <nav className="gnb">
            <ul>
                <li><Link to="/">INSPIRE</Link></li>
                <li><Link to="/">HERITAGE</Link></li>
                <li><Link to="/">NEW BEAUTY</Link></li>
                <li><Link to="/">ESG</Link></li>
                <li><Link to="/">PRESS</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;