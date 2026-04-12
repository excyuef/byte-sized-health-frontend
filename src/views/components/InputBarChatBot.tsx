import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { IoSend } from "react-icons/io5";
import OverlayMenu from "./OverlayMenu";

function InputBarChatBot({ onSend }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    console.log("Pesan dikirim:", message);

    // TAMBAHAN
    if (onSend) {
      onSend(message);
    }

    setMessage("");
  };

  const [open, setOpen] = useState(false);

  const handleSelect = (type) => {
    console.log("Pilih:", type);
    setOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="w-full flex justify-center p-4">
      <div className="relative w-full flex justify-center p-6">
        <OverlayMenu
          open={open}
          onClose={() => setOpen(false)}
          onSelect={handleSelect}
        />
        <div className="flex items-center w-full max-w-3xl bg-white rounded-full px-4 py-3 shadow">
          <FiPlus
            className="text-blue-500 text-xl mr-3 cursor-pointer"
            onClick={() => setOpen(!open)}
          />

          <input
            type="text"
            placeholder="Type a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-500"
          />

          <IoSend
            className={`text-2xl ml-3 cursor-pointer ${
              message.trim() ? "text-blue-500" : "text-gray-400"
            }`}
            onClick={handleSend}
          />
        </div>
      </div>
    </div>
  );
}

export default InputBarChatBot;