import { ArrowRightCircle, Heart } from "lucide-react";
import { RatingStars } from ".";

export default function ProductCard({
  productName,
  productMRP,
  productSliceMRP,
  productRating,
}) {
  return (
    <div className="relative rounded-xl w-[350px] overflow-hidden shadow-[0px_0px_2px_0px_rgba(0,0,0,.5)]">
      <div className="absolute top-2 right-2 hover:cursor-pointer">
        <Heart size={30} />
      </div>
      <div className="h-[300px] bg-black10">
        {/* <img src="./Images/product.png" alt="" className="w-full h-full object-cover" /> */}
      </div>
      <div className="p-[10px] space-y-2">
        <div className="flex justify-between">
          <h1 className="text-h5 font-semibold">{productName.slice(0,15)}...</h1>
          <RatingStars productRating={productRating} />
        </div>
        <div className="flex justify-between">
          <div className="flex justify-center items-center gap-2">
            <span className="font-bold pe-1">MRP:</span>
            <span className="text-h5">{productMRP}</span>
            <span className="line-through text-black50">{productSliceMRP}</span>
          </div>
          <div className="flex justify-center items-center gap-2 cursor-pointer">
            More
            <ArrowRightCircle />
          </div>
        </div>
      </div>
    </div>
  );
}


