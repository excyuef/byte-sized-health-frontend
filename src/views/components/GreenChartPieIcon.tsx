import { IconContext } from "react-icons";
import { HiChartPie } from "react-icons/hi2";

function GreenChartPieIcon() {
  return (
    <IconContext.Provider
      value={{ color: "green", className: "global-class-name" }}
    >
      <div>
        <HiChartPie size={50} color="#A7F3D0" />
      </div>
    </IconContext.Provider>
  );
}

export default GreenChartPieIcon;
