import { SquarePen, X } from "lucide-react";
import React, { useState } from "react";
import { AddButton } from "../components";
import { Link } from "react-router-dom";

const ShippingPage = ({ setCheckOut }) => {
  const [noLocation, setNoLocation] = useState(false);
  const handlePayment = () => {
    setCheckOut(false);
  };
  return (
    <div className="relative z-50">
      <div className="fixed inset-0 bg-black50">
        <div className="w-full h-full flex flex-col gap-[10px] justify-center items-center">
          <div className="h-[100px] w-[50rem] bg-white flex justify-between">
            <div className="text-h5 h-[100px] flex justify-center items-center px-[50px] font-semibold">
              Shipping Confirmation
            </div>
            {/* <div className="h-[100px] w-[100px] flex justify-center items-center">
              <X size={40} />
            </div> */}
          </div>
          <div className="w-[50rem] h-[30rem]">
            {noLocation ? (
              <div className="w-full h-full  bg-white flex flex-col gap-[20px] justify-center items-center">
                <div className="w-[140px] h-[200px]">
                  <img
                    src="/Images/Location.png"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <div className="text-h5">
                  You Did Not Added You Address Yet !
                </div>
                <div className="w-1/2">
                  <Link to="/account-dashboard">
                    <AddButton
                      size={"medium"}
                      className={"primary"}
                      name={"Add You Address"}
                    />
                  </Link>
                </div>
              </div>
            ) : (
              <div className="relative p-[50px] bg-white w-full h-full flex flex-col justify-between gap-[10px] items-center">
                <div className="absolute top-14 right-14">
                  <Link to="/account-dashboard">
                    <AddButton>
                      <SquarePen size={30} />
                    </AddButton>
                  </Link>
                </div>
                <div className="w-full p-[20px] space-y-[20px] bg-black10 rounded-[10px]">
                  <div className="flex flex-col gap-[5px]">
                    <label htmlFor="" className="font-semibold">
                      Recipient's Name
                    </label>
                    <span>Shailendra Trivedi</span>
                  </div>
                  <div className="flex flex-col gap-[5px]">
                    <label htmlFor="" className="font-semibold">
                      Address
                    </label>
                    <span>Lucknow,Uttar Pradesh, India</span>
                  </div>
                  <div className="grid grid-cols-2 w-full">
                    <div className="flex flex-col gap-[5px]">
                      <label htmlFor="" className="font-semibold">
                        Town/City
                      </label>
                      <span>Lucknow</span>
                    </div>
                    <div className="flex flex-col gap-[5px]">
                      <label htmlFor="" className="font-semibold">
                        State
                      </label>
                      <span>Uttar Pradesh</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 w-full">
                    <div className="flex flex-col gap-[5px]">
                      <label htmlFor="" className="font-semibold">
                        Post Code
                      </label>
                      <span>226089</span>
                    </div>
                    <div className="flex flex-col gap-[5px]">
                      <label htmlFor="" className="font-semibold">
                        Country
                      </label>
                      <span>India</span>
                    </div>
                  </div>
                </div>
                <div className="flex w-full gap-10">
                  <AddButton
                    onClick={() => setCheckOut(false)}
                    size={"medium"}
                    className={"border-2 border-black"}
                    name={"Cancel"}
                  />
                  <AddButton
                    onClick={handlePayment}
                    size={"medium"}
                    className={"primary text-white"}
                    name={"Continue To Payment"}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPage;
