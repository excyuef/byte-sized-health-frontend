import { IconContext } from "react-icons";
import { HiMiniUserCircle } from "react-icons/hi2";
import { TfiLayoutLineSolid } from "react-icons/tfi";

export default function RegisterProgress() {
  return (
    <IconContext.Provider
      value={{
        size: "3.5em"
      }}>
      <div
        className="flex justify-between items-center">
        <HiMiniUserCircle />
        <TfiLayoutLineSolid />
        <HiMiniUserCircle />
        <TfiLayoutLineSolid />
        <HiMiniUserCircle />
      </div>
    </IconContext.Provider>
  )
}
