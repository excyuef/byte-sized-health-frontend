import { IconContext } from "react-icons";
import { BsCheckCircle } from "react-icons/bs";

function GreenFinishIcon() {
  return (
    <IconContext.Provider
      value={{ color: "green", className: "global-class-name" }}
    >
      <div>
        <BsCheckCircle size={50} />
      </div>
    </IconContext.Provider>
  );
}

export default GreenFinishIcon;
