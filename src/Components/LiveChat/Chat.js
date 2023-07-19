import React, { useState } from "react";
import { RiChatSmile2Line } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    // Implement your logic to send the message
    // e.g., Call an API or perform any action
    setMessage("");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className="">
          {isOpen ? (
            <div className="bg-white shadow-lg rounded-lg w-64">
              <div className="flex items-center justify-between px-4 py-2 bg-blue-500 text-white rounded-t-lg">
                <span className="text-lg font-semibold">WhatsApp Chat</span>
                <button className="text-white" onClick={toggleChat}>
                  <AiOutlineClose className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4">
                {/* Chat messages */}
                <div className="mb-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <img
                        className="w-8 h-8 rounded-full"
                        src="https://via.placeholder.com/32"
                        alt="User Avatar"
                      />
                    </div>
                    <div className="ml-3">
                      <div className="bg-gray-100 rounded-lg px-3 py-2">
                        <p className="text-sm text-gray-800">
                          Welcome to the live chat!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message input */}
                <div className="flex">
                  <input
                    type="text"
                    className="flex-1 border border-gray-300 rounded-l-lg px-2 py-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Type a message..."
                    value={message}
                    onChange={handleMessageChange}
                  />
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-r-lg"
                    onClick={handleSendMessage}
                  >
                    <IoIosSend className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white fixed bottom-4 right-4 p-2 rounded-full"
              onClick={toggleChat}
            >
              <RiChatSmile2Line className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;
