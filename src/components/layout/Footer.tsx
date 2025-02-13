import { Link } from "react-router-dom";
import logo from '../../assets/img/logo-wh.png'
import waMark from '../../assets/img/wa2024-mark.png'
import { footerData } from '../../constants/footerData'
import { menuData } from '../../constants/menuData'

const Footer = (): React.JSX.Element => {
    return (
        <footer className="footer">
            <div className="wrap-inner">
                <div className="top">
                    <ul className="foot-menu">
                        {menuData.map((menu, idx) => (
                            <li key={idx}><Link to={menu.path}>{menu.name}</Link></li>
                        ))}
                    </ul>
                    <ul className="sns-link-btn">
                        {footerData.snsLinks.map((item, idx) => (
                            <li key={idx} className={item.name}><a href={item.url} target="_blank">{item.label}</a></li>
                        ))}
                    </ul>
                </div>
                <div className="bottom">
                    <div className="foot-logo">
                        <Link to="/"><img src={logo} alt="아모레스토리 로고"/></Link>
                    </div>
                    <p className="copyright">© AMOREPACIFIC. All Rights Reserved.</p>
                    <a href="https://www.i-award.or.kr/Web/Assess/FinalCandidateView.aspx?REG_SEQNO=13674" target="_blank" className="wa-btn"><img src={waMark} alt="i-AWARDS KOREA 로고"/>i-AWARDS KOREA 홈페이지 새창 이동</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;