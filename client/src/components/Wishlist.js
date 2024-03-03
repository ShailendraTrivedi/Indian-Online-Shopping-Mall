import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";

export default function Wishlist() {
  return (
    <div className="space-y-[50px]">
      <h4 className="text-h4 font-semibold text-center">
        Wishlist - Your Personal Shopping Showcase
      </h4>
      <div className="flex flex-col gap-[50px]">
        {Array.from({ length: 5 }).map((_, i) => (
          <div className="flex justify-between gap-5">
            <ProductCard
              key={i}
              productName="Air Jordan XXXVIII"
              productMRP="₹18,350.00"
              productSliceMRP="₹18,350.00"
              productRating={i + 1}
            />
            <ProductCard
              key={i}
              productName="Air Jordan XXXVIII"
              productMRP="₹18,350.00"
              productSliceMRP="₹18,350.00"
              productRating={i + 2}
            />
            <ProductCard
              key={i}
              productName="Air Jordan XXXVIII"
              productMRP="₹18,350.00"
              productSliceMRP="₹18,350.00"
              productRating={i + 3}
            />
          </div>
        ))}
        <nav className="flex justify-center items-center w-full">
          <ul class="flex border-2 border-black50 rounded-xl">
            <li className="p-2 hover:bg-black10 px-[20px] border-r-2 flex items-center gap-1">
              <ChevronLeft />
              Previous
            </li>
            <li className="p-2 hover:bg-black10 px-[20px] border-r-2">1</li>
            <li className="p-2 hover:bg-black10 px-[20px] border-r-2">2</li>
            <li className="p-2 hover:bg-black10 px-[20px] border-r-2">3</li>
            <li className="p-2 hover:bg-black10 px-[20px] border-r-2">4</li>
            <li className="p-2 hover:bg-black10 px-[20px] border-r-2">5</li>
            <li className="p-2 hover:bg-black10 px-[20px] flex items-center gap-1">
              Next
              <ChevronRight />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
