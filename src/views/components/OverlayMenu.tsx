import { HiOutlineDocument } from "react-icons/hi";
import { MdOutlinePermMedia } from "react-icons/md";
import { FiCamera } from "react-icons/fi";
import { FiHeadphones } from "react-icons/fi";

function OverlayMenu({ open, onClose, onSelect }) {
  if (!open) return null;

  return (
    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-white border-2 border-[#025CEA] rounded-3xl px-6 py-6 w-72 shadow-lg">
      <div className="flex flex-col gap-4 text-[#025CEA] text-lg font-medium">

        <div onClick={() => onSelect("documents")} className="flex items-center gap-4 cursor-pointer">
          <HiOutlineDocument size={28} />
          <span>Documents</span>
        </div>

        <div onClick={() => onSelect("media")} className="flex items-center gap-4 cursor-pointer">
          <MdOutlinePermMedia size={28} />
          <span>Photo & Videos</span>
        </div>

        <div onClick={() => onSelect("camera")} className="flex items-center gap-4 cursor-pointer">
          <FiCamera size={28} />
          <span>Camera</span>
        </div>

        <div onClick={() => onSelect("audio")} className="flex items-center gap-4 cursor-pointer">
          <FiHeadphones size={28} />
          <span>Audio</span>
        </div>

      </div>
    </div>
  );
}

export default OverlayMenu;