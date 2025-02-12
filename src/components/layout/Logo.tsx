import { Link } from "react-router-dom";
import logo from '../../assets/img/logo-bk.png'

const Logo = (): React.JSX.Element => {
    return (
        <h1 className="logo">
            <Link to="/"><img src={logo} alt="아모레 스토리 로고" /></Link>
        </h1>
    )
}

export default Logo;