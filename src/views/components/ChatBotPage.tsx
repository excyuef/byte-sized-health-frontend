import { useState } from "react";
import ByteCareLabel from "./ByteCareLabel.tsx";
import BubbleChatBot from "./BubbleChatBot.tsx";
import InputBarChatBot from "./InputBarChatBot.tsx";

function ChatBotPage() {
  const [messages, setMessages] = useState([
    { text: "Halo! Bagaimana kabar kamu hari ini?", sender: "bot" },
  ]);

  const handleSend = (text) => {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { text, sender: "user" }]);

    // contoh balasan bot sederhana
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "Pesan kamu diterima 👍", sender: "bot" },
      ]);
    }, 500);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute top-4 -left-5 sm:top-6 sm:left-6">
        <ByteCareLabel />
      </div>

      <div className="absolute top-20 sm:top-24 left-1/2 -translate-x-1/2 w-full max-w-lg sm:max-w-2xl px-3 sm:px-4">
        <BubbleChatBot messages={messages} />
      </div>

      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 w-full max-w-lg sm:max-w-2xl px-3 sm:px-4">
        <InputBarChatBot onSend={handleSend} />
      </div>
    </div>
  );
}

export default ChatBotPage;
