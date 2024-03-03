import { LockKeyhole, Minus, Plus, Trash2 } from "lucide-react";
import { AddButton, FormattedPrice, Loading } from "../components";
import ShippingPage from "./ShippingPage";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DecrementAction,
  DeleteCartAction,
  IncrementAction,
} from "../redux";

export default function CartPage() {
  let { loading, data } = useSelector((state) => state.cartStore);
  const [checkOut, setCheckOut] = useState(false);
  const cartProducts = [...data].reverse();
  console.log(data);
  const dispatch = useDispatch();

  const [totalAmount, setTotalAmount] = useState({
    subtotal: 0,
    shipping: 50,
    taxes: 8,
    discount: 0,
  });

  useEffect(() => {
    let subtotal = 0;
    cartProducts.forEach(
      (item, i) => (subtotal += item.selectedProductMRP * item.selectedQuantity)
    );
    setTotalAmount((prevState) => ({
      ...prevState,
      subtotal: subtotal,
    }));
  }, [cartProducts]);

  const ship = totalAmount.subtotal > 1000 ? "FREE" : totalAmount.shipping;
  const tax = Math.round(totalAmount.subtotal * (totalAmount.taxes / 100));
  const total = totalAmount.subtotal + ship + tax;
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {checkOut && <ShippingPage setCheckOut={setCheckOut} />}
          <div className="p-[50px] grid grid-cols-3 gap-10">
            <div className="col-span-2">
              <ul className="space-y-[20px] ">
                {cartProducts?.map((product, i) => (
                  <li className="shadow-[0px_0px_2px_0px_rgba(0,0,0,0.5)] grid grid-cols-3 gap-[30px] w-full rounded-[10px] p-[20px]">
                    <div className="">
                      <div className="w-full h-full bg-black10"></div>
                    </div>
                    <div className="flex justify-between items-end w-full col-span-2">
                      <div className="h-full flex flex-col justify-between">
                        <h4 className="text-h4 font-semibold">
                          {product.selectedProductName}
                        </h4>
                        <div className="grid grid-cols-2 gap-[20px] py-[10px]">
                          <div className="flex flex-col justify-between w-[5rem] font-semibold">
                            <div className="">Color</div>
                            <div className="">Size</div>
                            <div className="">Price</div>
                            <div className="">Quantity</div>
                            <div className="">Subtotal</div>
                          </div>
                          <div className="space-y-[10px]">
                            <div className="text-center">
                              {product.selectedColor}
                            </div>
                            <div className="text-center">
                              {product.selectedSize}
                            </div>
                            <div className="text-center">
                              ₹{product.selectedProductMRP}
                            </div>
                            <div className="flex gap-[10px]">
                              <Plus
                                size={30}
                                onClick={() =>
                                  dispatch(
                                    IncrementAction(product.selectedProductID)
                                  )
                                }
                                className="primary text-white p-[3px] rounded-full cursor-pointer"
                              />
                              <div className="text-center text-h5 bg-black10 px-[20px]">
                                {product.selectedQuantity}
                              </div>
                              <Minus
                                onClick={() =>
                                  dispatch(
                                    DecrementAction(product.selectedProductID)
                                  )
                                }
                                size={30}
                                className="primary text-white p-[3px] rounded-full cursor-pointer"
                              />
                            </div>
                            <div className="text-center text-h5 font-bold">
                              ₹
                              {product.selectedQuantity *
                                product.selectedProductMRP}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div
                          onClick={() =>
                            dispatch(
                              DeleteCartAction(product.selectedProductID)
                            )
                          }
                          className="primary p-[10px] text-white rounded-full cursor-pointer"
                        >
                          <Trash2 size={30} />
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <h5 className="text-h5 border-b-2 border-black10 p-[10px] font-bold">
                TOTAL
              </h5>
              <div className="space-y-[20px] p-[10px]">
                <div className="flex justify-between">
                  <ul className="font-semibold uppercase">
                    <li className="">Subtotal</li>
                    <li className="">Shipping</li>
                    <li className="">Taxes</li>
                    <li className="">Discount</li>
                  </ul>
                  <ul className="">
                    <li className="">{FormattedPrice(totalAmount.subtotal)}</li>
                    <li className="">{FormattedPrice(ship)}</li>
                    <li className="">{FormattedPrice(tax)}</li>
                    <li className="">{FormattedPrice(totalAmount.discount)}</li>
                  </ul>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    className="bg-black10 w-full p-2 pe-[5rem] ps-[20px] focus:outline-none rounded-[10px]"
                    placeholder="PROMO-CODE"
                  />
                  <span className="absolute top-2 right-4 gradient-text cursor-pointer">
                    Apply
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">SUBTOTAL</span>
                  <span className="font-bold text-h5">
                    {FormattedPrice(total)}
                  </span>
                </div>
                <AddButton
                  onClick={() => setCheckOut(true)}
                  size={"medium"}
                  name={"Process to checkout"}
                  className={"primary text-white"}
                />
                <div className="text-black50 flex gap-[10px] items-center justify-center text-h6">
                  <LockKeyhole size={20} />
                  <p>Secure your purchase with a safe payment.</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
