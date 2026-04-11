import { IconContext } from "react-icons";
import { BsCheckCircle } from "react-icons/bs";

function GrayFinishIcon() {
  return (
    <IconContext.Provider
      value={{ color: "gray", className: "global-class-name" }}
    >
      <div>
        <BsCheckCircle size={50} color="#DBEAFE" />
      </div>
    </IconContext.Provider>
  );
}

export default GrayFinishIcon;
