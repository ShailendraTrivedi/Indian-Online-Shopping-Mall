import {
  Headset,
  Package,
  Plus,
  ShoppingCart,
  Star,
  Tag,
  Truck,
} from "lucide-react";
import { Loading, RatingStars } from "../components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CartAction } from "../redux";

export default function DescriptionPage() {
  const dispatch = useDispatch();
  const { _id } = useParams();
  const [showDescription, setShowDescription] = useState(false);
  const [comments, setComments] = useState(false);
  const product = useSelector((state) => state.productStore.data[_id]);
  const { loading } = useSelector((state) => state.cartStore);

  const [selectedProduct, setSelectedProduct] = useState({
    selectedProductID: _id,
    selectedProductName: product.productName,
    selectedProductMRP: product.productMRP,
    selectedColor: product.productColors[0],
    selectedSize: product.productSize[0],
    selectedQuantity: 1,
  });

  const handleAddToCart = () => {
    dispatch(CartAction(selectedProduct));
  };

  return (
    <>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="p-[50px] grid grid-cols-2">
          <div className="flex flex-col gap-[50px]">
            <div className="flex gap-[50px] w-full">
              <ul className="space-y-[10px]">
                <li className="h-[100px] w-[100px] bg-black10"></li>
                <li className="h-[100px] w-[100px] bg-black10"></li>
                <li className="h-[100px] w-[100px] bg-black10"></li>
                <li className="h-[100px] w-[100px] bg-black10"></li>
              </ul>
              <div className="bg-black10 w-full h-full"></div>
            </div>
            <div className="space-y-[20px]">
              <button
                onClick={handleAddToCart}
                className="p-2 flex gap-[10px] items-center justify-center w-full primary text-white rounded-xl shadow-[0px_2px_10px_0px_rgba(0,0,0,0.5)]"
              >
                <ShoppingCart />
                Add To Cart
              </button>
              <ul className="text-gray-500 text-h5 flex justify-between w-[35rem] mx-auto">
                <li className="flex gap-[10px] items-center">
                  <Truck size={80} />
                  <h6>Free Shipping</h6>
                </li>
                <li className="flex gap-[10px] items-center">
                  <Package size={80} />
                  <h6>Delivered in 10 days</h6>
                </li>
                <li className="flex gap-[10px] items-center">
                  <Headset size={80} />
                  <h6>Delivered in 10 days</h6>
                </li>
              </ul>
            </div>
          </div>
          <div className="px-[20px] flex flex-col gap-[10px]">
            <div className="">{product.productCategory}</div>
            <h4 className="text-h4">{product.productName}</h4>
            <RatingStars productRating={product.productRatings} />
            <div className="text-h4 flex gap-[10px] items-end">
              <label htmlFor="">MRP</label>
              <span className="font-bold">₹{product.productMRP}</span>
              <span className="line-through text-p text-black50">
                ₹{product.productSliceMRP}
              </span>
            </div>
            <div className="flex flex-col gap-[5px] text-[#31a431] text-h6">
              <label htmlFor="" className="font-bold">
                Available Offers
              </label>
              <ul className="">
                <li className="flex gap-[10px] items-center">
                  <Tag size={20} />
                  30% discount
                </li>
                <li className="flex gap-[10px] items-center">
                  <Tag size={20} />
                  Get the premium subscription in 50% off
                </li>
              </ul>
            </div>
            <div className="flex gap-[10px] items-center">
              <label htmlFor="" className="">
                Color's:
              </label>
              <ul className="flex gap-[5px]">
                {product?.productColors?.map((color, i) => (
                  <label
                    onClick={() =>
                      setSelectedProduct((prevState) => ({
                        ...prevState,
                        selectedColor: color,
                      }))
                    }
                    htmlFor={`color_${i}`}
                  >
                    <li
                      className={`border-2 p-1 px-2 rounded-[10px] ${
                        selectedProduct.selectedColor === color
                          ? "text-black border-black"
                          : "text-black50 border-black50"
                      }`}
                    >
                      {color}
                    </li>
                    <input
                      id={`color_${i}`}
                      name="colors_checkbox"
                      type="radio"
                      value={color}
                      className="hidden"
                    />
                  </label>
                ))}
              </ul>
            </div>
            <div className="flex gap-[10px] items-center">
              <label htmlFor="" className="">
                Size's:
              </label>
              <ul className="flex gap-[5px] uppercase text-black50">
                {product?.productSize?.map((size, i) => (
                  <label
                    onClick={() =>
                      setSelectedProduct((prevState) => ({
                        ...prevState,
                        selectedSize: size,
                      }))
                    }
                    htmlFor={`size_${i}`}
                  >
                    <li
                      className={`border-2 p-1 px-2 rounded-[10px] ${
                        selectedProduct.selectedSize === size
                          ? "text-black border-black"
                          : "text-black50 border-black50"
                      }`}
                    >
                      {size}
                    </li>
                    <input
                      id={`size_${i}`}
                      name="size_checkbox"
                      type="radio"
                      className="hidden"
                    />
                  </label>
                ))}
              </ul>
            </div>
            <div className="flex gap-[10px] items-center">
              <label htmlFor="" className="">
                Quantity
              </label>
              <select
                onChange={(e) =>
                  setSelectedProduct((prevState) => ({
                    ...prevState,
                    selectedQuantity: e.target.value,
                  }))
                }
                className="w-[100px] p-[5px] focus:outline-none border-black border-[1px] rounded-[10px]"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="more">More</option>
              </select>
              {selectedProduct.selectedQuantity === "more" && (
                <input
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      setSelectedProduct((prevState) => ({
                        ...prevState,
                        selectedQuantity: e.target.value,
                      }));
                    }
                  }}
                  type="number"
                  className="w-[100px] border-[1px] border-black focus:outline-none p-[2px] ps-[10px]"
                />
              )}
            </div>
            <div className="w-full space-y-[10px]">
              <label
                htmlFor=""
                onClick={() => setShowDescription(!showDescription)}
                className="w-full flex justify-between p-[10px] border-b-2 border-black10"
              >
                Product Description
                <Plus />
              </label>
              {showDescription && (
                <p className="bg-black10 p-[20px]">
                  {product.productDescription}
                </p>
              )}
            </div>
            <div className="w-full space-y-[10px]">
              <label
                htmlFor=""
                className="w-full flex justify-between p-[10px] border-b-2 border-black10"
              >
                Delivery
                <Plus />
              </label>
            </div>
            <div className="w-full space-y-[10px]">
              <label
                htmlFor=""
                onClick={() => setComments(!comments)}
                className="w-full flex justify-between p-[10px] border-b-2 border-black10"
              >
                Ratings & Reviews
                <Plus />
              </label>
              {comments && (
                <div className="p-[10px] bg-black10 space-y-[20px]">
                  <h4 className="text-h4 flex gap-[10px] items-center">
                    <span>4.3</span>{" "}
                    <Star
                      color="rgb(255,208,0)"
                      className="fill-[rgb(255,208,0)]"
                    />{" "}
                    <div className="text-p">4,281 Ratings & 530 Reviews</div>
                  </h4>
                  <ul className="space-y-[10px]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <li className="flex ">
                        <div className="w-[200px] ">
                          <div className="w-[50px] h-[50px] bg-black rounded-full"></div>
                          <label htmlFor="" className="">
                            Sarah J.
                          </label>
                        </div>
                        <div className="">
                          <RatingStars size={15} productRating={5} />
                          <p className="text-h6">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolorem veritatis necessitatibus voluptates
                            delectus accusantium dolores tempore eaque itaque
                            quibusdam aliquid quia, nihil doloribus, cum earum
                            impedit odit iste numquam? Quam.
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
