import { Filter, Loading, ProductCard } from "../components";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function SearchPage() {
  const { loading, data } = useSelector((state) => state.productStore);
  return (
    <div className="w-full grid grid-cols-5 gap-5">
      <Filter />
      <div className="col-span-4 grid grid-cols-3 gap-[10px]">
        {loading ? (
          <>
            <div className="col-span-3">
              <Loading />
            </div>
          </>
        ) : (
          <>
            {data?.map((product, i) => {
              return (
                <Link to={`/description/${i}`}>
                  <ProductCard
                    key={i}
                    productName={product.productName}
                    productMRP={product.productMRP}
                    productSliceMRP={product.productSliceMRP}
                    productRating={i + 1}
                  />
                </Link>
              );
            })}
            <nav className="flex justify-center items-center w-full col-span-3">
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
          </>
        )}
      </div>
    </div>
  );
}
