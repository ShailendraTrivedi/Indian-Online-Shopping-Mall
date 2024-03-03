import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function ClickCarousel() {
  const [index, setIndex] = useState(0);
  const leftPx = ["left-[30px]", "left-[-1370px]", "left-[-2770px]"];
  const imageSrc = ["", "", ""];

  return (
    <div className="relative w-[1380px] h-[300px] overflow-hidden">
      <div className="relative">
        <div
          className={`absolute flex gap-20 ${
            leftPx[
              index > 0
                ? index % imageSrc.length
                : (index * -1) % imageSrc.length
            ]
          } transition-all duration-500 ease-in-out`}
        >
          {imageSrc.map((src, i) => (
            <div className="bg-black10 w-[1320px] h-[300px] mx-auto  rounded-xl overflow-hidden">
              {/* <img
                key={i}
                src={src}
                alt=""
                className="object-cover w-full h-full"
              /> */}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-[115px] left-0 bg-white rounded-full p-2">
        <ChevronLeft
          onClick={() => setIndex(index - 1)}
          className="p-2 rounded-full shadow-[0px_0px_2px_rgba(0,0,0,10)] cursor-pointer"
          size={50}
        />
      </div>
      <div className="absolute top-[115px] right-0 bg-white rounded-full p-2">
        <ChevronRight
          onClick={() => setIndex(index + 1)}
          className="p-2 rounded-full shadow-[0px_0px_2px_rgba(0,0,0,10)] cursor-pointer"
          size={50}
        />
      </div>
    </div>
  );
}