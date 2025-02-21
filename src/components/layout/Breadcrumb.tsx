import { Link, useLocation } from "react-router-dom";
import { menuData, MenuItem } from "../../constants/menuData";

const Breadcrumb = (): React.JSX.Element => {
    const location = useLocation();
    const pathSegments = location.pathname.split("/").filter(segment => segment);

    const findMenuName = (path: string): string => {
        const menuItem = menuData.find((item: MenuItem) => item.path === `/${path}`);
        return menuItem ? menuItem.name : path;
    }

    return (
        <div className="breadcrumb">
            <ul>
                <li>
                    <Link to="/" className="">HOME</Link>
                </li>
                {pathSegments.map((segment, index) => {
                    const fullPath = `/${pathSegments.slice(0, index + 1).join("/")}`;
                    const name = findMenuName(segment);
                    const isLast = index === pathSegments.length - 1;
                    
                    return (
                        <li key={fullPath} >
                            {isLast ? (
                                <span>{name}</span>
                            ) : (
                                <Link to={fullPath}>{name}</Link>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default Breadcrumb;

