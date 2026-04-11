import GreenUserIcon from "./GreenUserIcon";
import GreenChartPieIcon from "./GreenChartPieIcon";
import GrayFinishIcon from "./GrayFinishIcon";

function TahapIsiDataDiriIcon() {
  return (
    <div className="flex flex-row items-center justify-center gap-2">
      <GreenUserIcon />
      <hr className="border-2 border-[#DBEAFE] w-50 rounded-2xl" />
      <GreenChartPieIcon />
      <hr className="border-2 border-[#DBEAFE] w-1/2 rounded-2xl" />
      <GrayFinishIcon />
    </div>
  );
}

export default TahapIsiDataDiriIcon;