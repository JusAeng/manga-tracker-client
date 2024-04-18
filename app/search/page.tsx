import SearchContainer from "./SearchContainer";
import axiosInstance from "../utils/axios";

const SearchPage = async () => {
  const res = await axiosInstance.get("/manga");
  const allManga = res.data || [];

  return (
    <main className="main-page scrollbar-hide">
      <SearchContainer allManga={allManga} />
    </main>
  );
};

export default SearchPage;
