import { IconContext } from "react-icons";
import { VscAccount } from "react-icons/vsc";

function GreenUserIcon() {
  return (
    <IconContext.Provider
      value={{ color: "green", className: "global-class-name" }}
    >
      <div>
        <VscAccount size={50} color="#A7F3D0" />
      </div>
    </IconContext.Provider>
  );
}

export default GreenUserIcon;
