import { motion } from "framer-motion";

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
    sort: ["A -> Z", "Z -> A"],
  };
  const optionMenus = dropdownMenu[option].filter(
    (item) => !added.includes(item)
  );
  return (
    <motion.div
      initial={{ height: "5vh" }}
      animate={{
        height: "30vh",
        transition: {
          //   delay: 0.1,
          duration: 0.2,
        },
      }}
      exit={{
        opacity: 0,
        height: "5vh",
      }}
      className="flex flex-wrap content-start gap-x-[18px] gap-y-[10px] px-[5px] pt-[5px] pb-[16px] bg-primaryx 
    absolute top-[35px] left-0 w-[100vw] overflow-auto rounded-b-[8px]"
    >
      {optionMenus.length !== 0 ? (
        optionMenus.map((optionMenu) => (
          <motion.button
            exit={{ opacity: 0 }}
            key={optionMenu}
            onClick={() => callback(option, optionMenu)}
            className="py-[2px] px-[10px] h-fit rounded-[15px] bg-[#232323] text-[#bbbbbb]"
          >
            {optionMenu}
          </motion.button>
        ))
      ) : (
        <div className="text-center text-[#bbbbbb] h-fit w-[100%]">
          No more {option} !
        </div>
      )}
    </motion.div>
  );
};

export default FilterDropdown;
