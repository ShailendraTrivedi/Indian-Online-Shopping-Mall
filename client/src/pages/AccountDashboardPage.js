import { useParams } from "react-router-dom";
import {
  AccountDetails,
  AddressBook,
  OrderHistory,
  Wishlist,
} from "../components";
import { useState } from "react";

export default function AccountDashboardPage() {
  const [selectOption, setSelectOption] = useState("account-details");
  const handleSelectOption = (target) => {
    switch (target) {
      case "account-details":
        return <AccountDetails />;
      case "address-book":
        return <AddressBook />;
      case "wishlist":
        return <Wishlist />;
      case "order-history":
        return <OrderHistory />;
      default:
        return;
    }
  };
  return (
    <div className="w-full grid grid-cols-5 gap-5">
      <div>
        <ul className="space-y-[20px]">
          <li>
            <h5 className="text-h5 font-semibold">Manage My Account</h5>
            <ul className="p-[10px] space-y-[5px]">
              <li
                onClick={() => setSelectOption("account-details")}
                className="cursor-pointer"
              >
                Account Details
              </li>
              <li
                onClick={() => setSelectOption("address-book")}
                className="cursor-pointer"
              >
                Address Book
              </li>
            </ul>
          </li>
          <li>
            <h5 className="text-h5 font-semibold">My Order</h5>
            <ul className="p-[10px] space-y-[5px]">
              <li
                onClick={() => setSelectOption("order-history")}
                className="cursor-pointer"
              >
                Order History
              </li>
            </ul>
          </li>
          <li>
            <h5 className="text-h5 font-semibold">My Wishlist</h5>
            <ul className="p-[10px] space-y-[5px]">
              <li
                onClick={() => setSelectOption("wishlist")}
                className="cursor-pointer"
              >
                Wishlist
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="col-span-4">{handleSelectOption(selectOption)}</div>
    </div>
  );
}
