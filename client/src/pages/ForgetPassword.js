import { UpdatePassword, VerifyEmail, VerifyOTP } from "../components";
import { useState } from "react";

export default function ForgetPassword() {
  const [idx, setIdx] = useState(0);
  const location = [
    { belowHeading: "top-[0px]", inputLocation: "top-[0px]" },
    { belowHeading: "top-[-25px]", inputLocation: "top-[-235px]" },
    { belowHeading: "top-[-50px]", inputLocation: "top-[-555px]" },
  ];
  const handleIndex = () => {
    setIdx(idx + (1 % 3));
  };
  return (
    <div className="w-[1200px] h-[634px] mx-auto grid grid-cols-2 gap-[20px]">
      <div className="col-span- flex flex-col gap-[5px] justify-center items-center">
        <div className="w-[500px] h-[500px] bg-black10"></div>
        <h4 className="text-h4">Let’s reset your Account Password</h4>
        <h6 className="text-h6 mx-[50px] text-center">
          Thank you for signing up with Indian Online Shopping Mall! To activate
          your account and access exclusive benefits, please check your email
          inbox for a OTP.
        </h6>
        <div className="flex gap-2">
          <div className="h-2 w-5 primary rounded-full" />
          <div className="h-2 w-2 primary rounded-full" />
          <div className="h-2 w-2 primary rounded-full" />
        </div>
      </div>
      <div className="pt-[100px] flex flex-col gap-[50px] items-center">
        <div className="space-y-[10px] w-full">
          <h3 className="text-h3 font-bold text-center">Forget Password</h3>
          <div className="relative w-full h-[24px] overflow-hidden">
            <div
              className={`absolute ${
                location[idx % 3].belowHeading
              } left-0 w-full transition-all duration-500`}
            >
              <p className="text-center">
                To reset your password, please enter the email address of your
                account.
              </p>
              <p className="text-center">
                We send you a code verify your email address. Please enter the
                code below.
              </p>
              <p className="text-center">
                Enter new password below to change your password.
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-[575px] h-[248px] px-[5px] overflow-hidden">
          <div
            className={`absolute left-0 ${
              location[idx % 3].inputLocation
            } w-[570px] h-fit flex flex-col gap-[100px] transition-all duration-500`}
          >
            <VerifyEmail handleIndex={handleIndex} />
            <VerifyOTP handleIndex={handleIndex} />
            <UpdatePassword handleIndex={handleIndex} />
          </div>
        </div>
      </div>
    </div>
  );
}
