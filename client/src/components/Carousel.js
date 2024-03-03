export default function Carousel() {
  return (
    <div className="w-[1380px] overflow-x-scroll p-[50px] scroll">
      <div className="flex w-fit justify-between gap-10">
        {Array.from({ length: 7 }).map((_, i) => (
          <div
            key={i}
            className="cursor-pointer bg-white hover:bg-gradient-to-t from-[#ff0000] to-[#7e0000] h-[150px] w-[150px] shadow-[0px_0px_5px_2px_rgba(0,0,0,0.5)] rounded-xl"
          ></div>
        ))}
      </div>
    </div>
  );
}
