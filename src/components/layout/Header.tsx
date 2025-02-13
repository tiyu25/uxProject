import HeaderActions from "./HeaderActions";
import Logo from "./Logo";
import Nav from "./Nav";

const Header = (): React.JSX.Element => {
    return (
        <header>
            <div className="thead wrap-inner">
                <Nav />
                <Logo />
                <HeaderActions />
            </div>
        </header>
    )
}

export default Header;