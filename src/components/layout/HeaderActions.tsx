import LanguageButton from "./LanguageButton";
import SearchButton from "./SearchButton";

const HeaderActions = (): React.JSX.Element => {
    return (
        <div className="right">
            <SearchButton />
            <LanguageButton />
        </div>
    )
}

export default HeaderActions;