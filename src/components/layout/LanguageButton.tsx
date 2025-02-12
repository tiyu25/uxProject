import icon from '../../assets/img/ico_language.png'

const LanguageButton = (): React.JSX.Element => {
    return (
        <button className="lang-btn">
            <img src={icon} alt="언어 선택" />
        </button>
    )
}

export default LanguageButton;