import { IconContext } from "react-icons";
import { HiMiniUserCircle } from "react-icons/hi2";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { FaChartPie } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

type ProgressProps = {
  progress: number
}

export default function RegisterProgress({ progress }: ProgressProps) {
  const active = "text-[#A1E5C8]"
  const base = "text-gray-200"
  return (
    <IconContext.Provider
      value={{
        size: "3.2em"
      }}>
      <div
        className="flex justify-between items-center">
        <HiMiniUserCircle
          className={progress >= 1 ? active : base}
          size="3.8em"
        />

        <TfiLayoutLineSolid className={base} />

        <FaChartPie
          className={progress >= 2 ? active : base}
        />

        <TfiLayoutLineSolid className={base} />

        <FaCheckCircle
          className={progress >= 3 ? active : base}
        />
      </div>
    </IconContext.Provider>
  )
}
