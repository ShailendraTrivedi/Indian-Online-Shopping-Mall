import { Bot, ChevronDown, SendHorizontal } from "lucide-react";
import { useState } from "react";

export default function ChatBot() {
  const [chatBot, setChatBot] = useState(false);
  return (
    <div
      onClick={() => !chatBot && setChatBot(true)}
      className={`bot ${chatBot && "rectangle"} overflow-hidden`}
    >
      {chatBot && (
        <div className="w-full h-full">
          <div className="primary p-3">
            <div className="w-full h-[80px] flex flex-col gap-4 text-white">
              <div className="ps-[50px] flex justify-between items-center">
                <h5 className="text-h5">Chat with us !</h5>
                <ChevronDown
                  onClick={() => setChatBot(false)}
                  size={30}
                  className="hover:bg-white hover:text-red rounded-full"
                />
              </div>
              <hr className="h-[1px] bg-white" />
              <h3 className="text-h6">Ask Question related to Shopping.</h3>
            </div>
          </div>
          <div className="w-full h-full space-y-0">
            <div className="w-full h-[335px] overflow-y-scroll scroll">
              <TempChats />
            </div>
            <div className="w-full h-fit flex items-center p-1">
              <input
                type="text"
                className="p-2 bg-black10 w-[300px] m-2 rounded-[10px] focus:outline-none"
                placeholder="Enter Your Query...."
              />
              <SendHorizontal
                size={50}
                color="white"
                className="primary p-3 rounded-full"
              />
            </div>
          </div>
        </div>
      )}
      <div className={`movingChatBot ${chatBot && "goTopBot"}`}>
        <Bot className="botIcon" />
      </div>
    </div>
  );
}

function TempChats() {
  return (
    <div className="flex flex-col">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i}>
          <div
            className={`flex flex-col p-2 justify-center ${
              false && "items-end"
            }`}
          >
            <label htmlFor="" className="font-bold gradient-text px-2">
              ChatBot
            </label>
            <p className="w-3/4 flex p-1 gap-[2px] justify-end bg-black10 rounded-xl m-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              atque!
            </p>
          </div>
          <div
            className={`flex flex-col p-2 justify-center ${
              true && "items-end"
            }`}
          >
            <label htmlFor="" className="font-bold gradient-text px-2">
              You
            </label>
            <p className="w-3/4 flex p-1 gap-[2px] justify-end bg-black10 rounded-xl m-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              atque!
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
