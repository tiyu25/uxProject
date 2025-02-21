
const SearchFilter = (): React.JSX.Element => {
  return (
    <div className="searchFilter">
      <form>
        <select id="filter" className="options">
          <option value="option1">전체</option>
          <option value="option2">최신순</option>
          <option value="option3">조회순</option>
        </select>
        <input
          className="searchInput"
          type="text"
          placeholder="검색할 키워드 입력"
        />
        <button type="submit">검색</button>
      </form>
    </div>
  );
};
export default SearchFilter;
