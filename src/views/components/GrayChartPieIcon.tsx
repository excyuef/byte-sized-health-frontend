import { IconContext } from "react-icons";
import { HiChartPie } from "react-icons/hi2";

function GrayChartPieIcon() {
  return (
    <IconContext.Provider
      value={{ color: "gray", className: "global-class-name" }}
    >
      <div>
        <HiChartPie size={50} color="#DBEAFE" />
      </div>
    </IconContext.Provider>
  );
}

export default GrayChartPieIcon;
