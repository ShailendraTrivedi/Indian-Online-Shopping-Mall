import { Search, ShoppingCart, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
export default function Navbar() {
  const [openUser, setOpenUser] = useState(false);
  const userRef = useRef();
  const navigate = useNavigate();
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      return navigate(`/search/${e.target.value}`);
    }
  };

  const token = Cookies.get("token");

  const handleLogout = () => {
    Cookies.remove("token");
    localStorage.clear();
    navigate("/");
  };

  const handleOpenUser = () => {
    setOpenUser(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (userRef.current && !userRef.current.contains(event.target)) {
        handleOpenUser();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [userRef]);

  return (
    <div className="relative w-full z-50">
      <div className="fixed -translate-x-1/2 left-1/2 w-[1380px] h-[100px] mx-auto border-b-2 border-black flex justify-between items-center bg-white">
        <img src="./Images/Logo.png" alt="" className="" />
        <div className="flex gap-10">
          <ul className="flex justify-between items-center gap-5">
            <Link to="">
              <li className="">Home</li>
            </Link>
            <Link to="/about">
              <li className="">About</li>
            </Link>
            <Link to="/contact">
              <li className="">Contact</li>
            </Link>
            {!token && (
              <Link to="/account">
                <li className="">Acount</li>
              </Link>
            )}
          </ul>
          <div className="relative">
            <Search className="absolute top-2 left-2" />
            <input
              onKeyDown={(e) => handleSearch(e)}
              type="text"
              className="w-[20rem] p-2 ps-10 bg-black5 focus:outline-none rounded-xl"
              placeholder="Search what you want..."
            />
          </div>
          {token && (
            <div className="flex gap-2 items-center">
              <div
                ref={userRef}
                onClick={() => !openUser && setOpenUser(true)}
                className={`${
                  openUser && "bg-black10"
                } rounded-full h-10 w-10 flex justify-center items-center cursor-pointer`}
              >
                <User />
                {openUser && (
                  <div className="relative z-10">
                    <ProfileMenu
                      handleLogout={handleLogout}
                      onClick={handleOpenUser}
                    />
                  </div>
                )}
              </div>
              <Link to="/cart">
                <div className="hover:bg-black10 rounded-full h-10 w-10 flex justify-center items-center cursor-pointer">
                  <ShoppingCart />
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
