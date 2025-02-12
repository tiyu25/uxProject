const SearchButton = (): React.JSX.Element => {
    return (
        <button className="search-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                <g fill="transparent" transform="translate(5 5)">
                <path stroke="#000" stroke-linecap="round" stroke-width="2" d="m0 0 5 5" transform="translate(17 17)"></path>
                <path stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M15.425 1.8A10.015 10.015 0 1 0 19.2 5.575" transform="translate(-.5 -.5)"></path>
                </g>
            </svg>
        </button>
    )
}

export default SearchButton;