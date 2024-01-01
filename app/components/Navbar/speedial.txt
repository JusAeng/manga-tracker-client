"use client";

import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";

import { RiHomeFill, RiSearchFill } from "react-icons/ri";
import { ImBooks } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface ActionType {
  icon: JSX.Element;
  name: string;
  link: string;
}

const actions: ActionType[] = [
  { icon: <RiHomeFill size={16} />, name: "Home", link: "/" },
  { icon: <RiSearchFill size={16} />, name: "Search", link: "/search" },
  { icon: <ImBooks size={16} />, name: "Shelf", link: "/shelf" },
  { icon: <FaUserAlt size={16} />, name: "Profile", link: "/profile" },
];

const Navbar = () => {
  const router = useRouter();

  const handleSpeedDialAction = (action: ActionType) => {
    router.push(action.link);
    console.log(action.link);
  };

  return (
    <main className="flex">
      <SpeedDial
        ariaLabel="SpeedDial example"
        icon={<SpeedDialIcon sx={{ color: "#ffffff" }} />}
        FabProps={{
          style: {
            backgroundColor: "#2c7ee8",
            backgroundSize: "cover",
          },
        }}
        direction="right"
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => handleSpeedDialAction(action)}
          />
        ))}
      </SpeedDial>
    </main>
  );
};

export default Navbar;
