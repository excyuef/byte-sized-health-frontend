import { IconContext } from "react-icons";
import { BsFillHouseDoorFill } from "react-icons/bs";

function HomeIcon() {
  return (
    <IconContext.Provider
      value={{ className: "global-class-name" }}
    >
      <BsFillHouseDoorFill size={15} />
    </IconContext.Provider>
  );
}

export default HomeIcon;
