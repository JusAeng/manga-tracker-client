interface IProp {
  option: string;
  added: string[];
  callback: (option: string, optionMenu: string) => void;
}

interface DropdownMenuType {
  [key: string]: string[];
}

const FilterDropdown: React.FC<IProp> = ({ option, added, callback }) => {
  const dropdownMenu: DropdownMenuType = {
    genres: [
      "Action",
      "Adventure",
      "Comedy",
      "Drama",
      "Fantasy",
      "Horror",
      "Mystery",
      "Romance",
      "Science Fiction (Sci-Fi)",
      "Slice of Life",
      "Supernatural",
      "Thriller",
      "Mecha",
      "Psychological",
      "Sports",
      "Shounen",
      "Shoujo",
      "Seinen",
      "Josei",
      "Harem",
      "Ecchi",
      "Historical",
      "Music",
      "Magic",
      "School",
      "Space",
      "Super Power",
      "Martial Arts",
      "Military",
      "Post-Apocalyptic",
    ],
    publishers: ["Siam Inter Comic", "Luckpim"],
    sort: ["A -> Z"],
  };
  const optionMenus = dropdownMenu[option].filter(
    (item) => !added.includes(item)
  );
  return (
    <div
      className="flex flex-wrap gap-x-[18px] px-[5px] pt-[5px] pb-[16px] gap-y-[10px] bg-primaryx 
    absolute top-[100%] left-0 w-[100vw] min-h-[10vh] max-h-[30vh] overflow-auto mt-[5px] rounded-b-[8px]"
    >
      {optionMenus.map((optionMenu) => (
        <button
          key={optionMenu}
          onClick={() => callback(option, optionMenu)}
          className="py-[2px] px-[10px] h-fit rounded-[15px] bg-[#232323] text-[#bbbbbb]"
        >
          {optionMenu}
        </button>
      ))}
    </div>
  );
};

export default FilterDropdown;
