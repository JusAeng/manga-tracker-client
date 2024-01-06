interface Iprop {
  head: string;
  rank?: boolean;
  sort?: boolean;
  search?: boolean;
}

const SearchButton = () => {
  return (
    <div>
      <div>searchh</div>
    </div>
  );
};

const SortButton = () => {
  return (
    <div>
      <div>sortt</div>
    </div>
  );
};

const MenuBar: React.FC<Iprop> = ({ head, rank, sort, search }) => {
  return (
    <main className="flex bg-[#5c7df7] h-[40px] justify-between items-center px-[10px]">
      <h1 className="bg-[#ffffff]">{head}</h1>
      <div className="flex justify-around bg-[#ffffff] gap-[20px]">
        {rank && <div>rank</div>}
        {sort && <SortButton />}
        {search && <SearchButton />}
      </div>
    </main>
  );
};

export default MenuBar;
