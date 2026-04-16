function BubbleChatBot({ messages }: any) {
  return (
    <div className="bg-white w-full px-5 py-4 rounded-4xl drop-shadow-lg flex flex-col gap-3 max-h-[60vh] overflow-y-auto">

      <h2 className="text-[#025CEA] font-bold">ByteCare</h2>

      {messages.map((msg, index): any => (
        <div
          key={index}
          className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`px-4 py-2 rounded-2xl max-w-[70%] 
              ${msg.sender === "user"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
              }`}
          >
            {msg.text}
          </div>
        </div>
      ))}

    </div>
  );
}

export default BubbleChatBot;
