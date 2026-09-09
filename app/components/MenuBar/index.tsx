interface Iprop {
  head: string;
}

const MenuBar: React.FC<Iprop> = ({ head }) => {
  return (
    <header className="sticky top-0 z-20 bg-bg/90 backdrop-blur-md border-b border-border">
      <div className="h-14 flex items-center px-5">
        <h1 className="text-ink">{head}</h1>
      </div>
    </header>
  );
};

export default MenuBar;
