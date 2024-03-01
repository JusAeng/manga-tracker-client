interface IProp {
  option: string;
  added: string[];
  callback: (option: string) => void;
}

interface DropdownMenuType {
  [key: string]: string[];
}

const FilterDropdown: React.FC<IProp> = ({ option, added, callback }) => {
  const dropdownMenu: DropdownMenuType = {
    genres: ["Romatic comedy"],
    publishers: ["Siam Inter Comic", "Luckpim"],
    sort: [""],
  };
  return (
    <div className="flex flex-col bg-[#aaaaaa] absolute top-[100%] left-0 h-[40vh] w-[100vw] mt-[5px]">
      {dropdownMenu[option].map((optionMenu) => (
        <button key={optionMenu} onClick={() => callback(optionMenu)}>
          {optionMenu}
        </button>
      ))}
    </div>
  );
};

export default FilterDropdown;
