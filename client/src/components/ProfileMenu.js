import { Link } from "react-router-dom";
export default function ProfileMenu({ onClick, handleLogout }) {
  return (
    <div className="absolute top-6 -left-10">
      <ul
        onClick={onClick}
        className="w-[250px] p-2 bg-gray-100 rounded-xl overflow-hidden"
      >
        <Link to="/account-dashboard">
          <li className="p-2 hover:bg-black10 rounded-lg">Manage My Account</li>
        </Link>
        <Link to="/help-center">
          <li className="p-2 hover:bg-black10 rounded-lg">Help Center</li>
        </Link>
        <Link to="/privacy-policy">
          <li className="p-2 hover:bg-black10 rounded-lg">Privacy & Policy</li>
        </Link>
        <li onClick={handleLogout} className="p-2 hover:bg-black10 rounded-lg">
          Logout
        </li>
      </ul>
    </div>
  );
}
