import {
  Copyright,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  SendHorizontal,
} from "lucide-react";

export default function Footer() {
  return (
    <div className="desktop:w-full mx-auto w-[1440px] bg-black">
      <div className="bg-black text-white mx-auto w-[1440px] h-[400px] flex justify-around items-center p-10">
        <div className=" space-y-10 flex flex-col justify-center ">
          <img
            src="./Images/LogoWhite.png"
            alt=""
            className="w-[133px] h-[73px]"
          />
          <ul className="space-y-5">
            <li className="text-h5 font-semibold">Subscribe</li>
            <li>Get 10% off your first order</li>
            <li className="text-white border-2 border-white rounded-xl flex items-center p-2">
              <input
                placeholder="Enter your email..."
                type="text"
                className=" bg-black rounded-lg w-[20rem] h-full ps-2 focus:outline-none"
              />
              <SendHorizontal className="cursor-pointer"/>
            </li>
          </ul>
        </div>
        <div className="flex w-full justify-around items-start">
          <div className="space-y-10 flex flex-col justify-center">
            <label htmlFor="" className="text-h5 font-semibold">
              Support
            </label>
            <ul className="space-y-5">
              <li className="cursor-pointer">ABC Apartment</li>
              <li className="cursor-pointer">iosm@gmail.com</li>
              <li className="cursor-pointer">+00000-00000-00000</li>
            </ul>
          </div>
          <div className="space-y-10 flex flex-col justify-center">
            <label htmlFor="" className="text-h5 font-semibold">
              Account
            </label>
            <ul className="space-y-5">
              <li className="cursor-pointer">My Account</li>
              <li className="cursor-pointer">Login / Register</li>
              <li className="cursor-pointer">Cart</li>
              <li className="cursor-pointer">Wishlist</li>
              <li className="cursor-pointer">Shop</li>
            </ul>
          </div>
          <div className="space-y-10 flex flex-col justify-center">
            <label htmlFor="" className="text-h5 font-semibold">
              Quick Link
            </label>
            <ul className="space-y-5">
              <li className="cursor-pointer">Privacy Policy</li>
              <li className="cursor-pointer">Terms Of Use</li>
              <li className="cursor-pointer">FAQ</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
          </div>
          <div className="space-y-10 flex flex-col justify-center">
            <label htmlFor="" className="text-h5 font-semibold">
              Social Media
            </label>
            <ul className="space-y-5">
              <li className="flex gap-1 text-blue-500 cursor-pointer">
                <Facebook />
                Facebook
              </li>
              <li className="flex gap-1 text-pink-900 cursor-pointer">
                <Instagram />
                Instagram
              </li>
              <li className="flex gap-1 text-blue-700 cursor-pointer">
                <Linkedin />
                LinkedIn
              </li>
              <li className="flex gap-1 text-blue-200 cursor-pointer">
                <Twitter />
                Twitter
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto w-[1440px] border-t-2 border-gray-500 text-gray-500 p-10 flex justify-center items-center gap-2 cursor-pointer">
        <Copyright />
        Copyright Indian Online Shopping Mall 2024. All right reserved
      </div>
    </div>
  );
}
