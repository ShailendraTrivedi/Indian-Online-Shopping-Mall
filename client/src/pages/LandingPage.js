import {
  AddButton,
  Carousel,
  ClickCarousel,
  InfiniteLeftCarousel,
  ProductCard,
  Separator,
} from "../components";

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-10">
      <ClickCarousel />
      <InfiniteLeftCarousel />
      <div className="">
        <Separator name="Categories" />
        <Carousel />
      </div>
      <div className="">
        <Separator name="Best Selling Products" />
        <div className="flex flex-wrap gap-20 justify-between p-[50px]">
          {Array.from({ length: 6 }).map((_, i) => (
            <ProductCard
              key={i}
              productName="Air Jordan XXXVIII"
              productMRP="₹18,350.00"
              productSliceMRP="₹18,350.00"
              productRating={i + 1}
            />
          ))}
        </div>
      </div>
      <div className="">
        <Separator name="Top Brands" />
        <div className="p-[50px] grid grid-cols-2 gap-2 h-[600px]">
          <div className="w-full h-full bg-black10"></div>
          <div className="flex flex-col gap-2">
            <div className="w-full h-full bg-black10"></div>
            <div className="w-full h-full bg-black10"></div>
          </div>
        </div>
      </div>
      <div className="">
        <Separator name="Sponsored" />
        <div className="p-[50px] h-[600px] w-full">
          <div className="relative flex justify-center items-end w-full h-full bg-black10">
            <AddButton
              name="Apply Now"
              size="large"
              className="w-full m-[10px] p-8 bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
