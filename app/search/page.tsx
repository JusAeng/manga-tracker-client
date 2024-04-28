import SearchContainer from "./SearchContainer";
import { fetchUtil } from "../utils/fetch";

const SearchPage = async () => {
  // const res = await fetchUtil("/manga");
  // const allManga = res || [];

  return (
    <main className="main-page scrollbar-hide">
      <SearchContainer />
    </main>
  );
};

export default SearchPage;
