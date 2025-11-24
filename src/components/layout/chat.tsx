import { useState } from "react";
import { FaTimes, FaPaperPlane, FaComments } from "react-icons/fa";

export default function Chat() {
const [open, setOpen] = useState(false);
const [messages, setMessages] = useState([
{ from: "bot", text: "Hello! How can I assist you today?" },
]);
const [input, setInput] = useState("");

const sendMessage = () => {
if (!input.trim()) return;
setMessages([...messages, { from: "user", text: input }]);
setInput("");
setTimeout(() => {
setMessages((prev) => [
...prev,
{ from: "bot", text: "Thanks for your message! We will get back to you soon." },
]);
}, 1000);
};

return ( <div>
{/* Floating Chat Button */}
{!open && (
<button
onClick={() => setOpen(true)}
className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-xl hover:scale-105 transition-transform duration-300 text-white"
> <FaComments size={24} /> </button>
)}
  {/* Chat Window */}
  {open && (
    <div className="fixed bottom-6 right-6 z-50 w-80 md:w-96 h-[500px] flex flex-col rounded-xl shadow-2xl bg-white overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <h2 className="font-semibold text-lg">Live Chat</h2>
        <button onClick={() => setOpen(false)} className="hover:text-gray-200">
          <FaTimes />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-3">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`p-2 max-w-[70%] rounded-lg ${
                msg.from === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div className="flex p-3 bg-gray-100 border-t border-gray-200">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg transition-colors"
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  )}
</div>

);
}
