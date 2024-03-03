import {Login ,Register} from "../components";
import { useState } from "react";

export default function AccountPage() {
  const [accIdx, setAccIdx] = useState(0);
  const handleAccount = () => {
    setAccIdx(accIdx + (1 % 2));
  };
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="grid grid-cols-3 gap-[10px] w-full p-[50px]">
        <div className="col-span-2 flex flex-col gap-[10px]">
          <div className="w-full h-[450px] bg-black10"></div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="relative h-[120px] w-[640px] overflow-hidden">
              <div
                className={`absolute top-0 ${
                  accIdx % 2 === 0 ? "left-[0px]" : "left-[-640px]"
                } flex transition-all duration-500`}
              >
                <div className="flex flex-col w-[40rem] p-2">
                  <h4 className="text-h4 text-center">Login to Your Account</h4>
                  <h6 className="text-h6 text-center">
                    Welcome back to Indian Online Shopping Mall ! Please enter
                    your login credentials to access your account. If you don't
                    have an account yet, you can Register. Enjoy a personalized
                    shopping experience, track your orders, and discover
                    exclusive deals by registering.
                  </h6>
                </div>
                <div className="flex flex-col w-[40rem] p-2">
                  <h4 className="text-h4 text-center">Create Your New Account</h4>
                  <h6 className="text-h6 text-center">
                    Unlock a world of convenience by creating your Indian Online
                    Shopping Mall account. Fill in the details to start your
                    journey towards effortless online shopping. Join our
                    community and enjoy personalized recommendations, exclusive
                    deals, and much more!
                  </h6>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <div
                className={`h-2 w-2 ${
                  accIdx % 2 === 0 && "w-5"
                } primary rounded-full`}
              />
              <div
                className={`h-2 w-2 ${
                  accIdx % 2 === 1 && "w-5"
                } primary rounded-full`}
              />
            </div>
          </div>
        </div>
        <div className="relative w-full h-full overflow-hidden">
          <div
            className={`absolute top-0 ${
              accIdx % 2 === 0 ? "left-[0px]" : "left-[-468px]"
            } h-full flex gap-[50px] transition-all duration-500`}
          >
            <Login handleAccount={handleAccount} />
            <Register handleAccount={handleAccount} />
          </div>
        </div>
      </div>
    </div>
  );
}
