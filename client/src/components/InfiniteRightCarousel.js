export default function InfiniteRightCarousel() {
    return (
      <div className="relative w-full h-[150px] overflow-hidden">
        <div className="absolute right-0 top-2 p-2 flex gap-5 infinity-right-carousel">
          {Array.from({ length: 20 }).map((_, i) => (
            <div className="w-[100px] h-[100px] rounded-xl overflow-hidden shadow-[0px_0px_2px_2px_rgba(0,0,0,.5)]">
              {/* <img
                src={cardDetails[i]}
                alt={`Images${i}`}
                className=" w-full h-full object-cover"
              /> */}
            </div>
          ))}
        </div>
      </div>
    );
  }