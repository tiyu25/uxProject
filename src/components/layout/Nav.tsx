import { Link } from "react-router-dom";
import { menuData } from "../../constants/menuData";

const Nav = (): React.JSX.Element => {
    return (
        <nav className="gnb">
            <ul>
                {menuData.map((menu, idx) => (
                    <li key={idx}><Link to={menu.path}>{menu.name}</Link></li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav;