import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Firebase/FirebaseProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="navbar w-full fixed top-0 z-10 bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] px-2 rounded-box w-52 bg-gray-400"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/needvolunteer">Need Volunteer</Link>
            </li>
            <div className="flex-none">
              <ul className="menu menu-horizontal bg-gray-400">
                <li>
                  <details>
                    <summary>My Profile</summary>
                    <ul className="rounded-t-none bg-gray-400">
                      <li>
                        <a>Add Volunteer Post</a>
                      </li>
                      <li>
                        <a>Manage My Post</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Volunteer Management
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="bg-gray-400 border rounded-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="ml-5 bg-gray-400 border rounded-lg">
            <Link to="/needvolunteer">Need Volunteer</Link>
          </li>
        </ul>
        <div className="flex-none">
          <ul className="menu menu-horizontal">
            <li>
              <details>
                <summary className="bg-gray-400">My Profile</summary>
                <ul className="p-2 rounded-t-none m-2 w-[200px] bg-gray-400">
                  <li>
                    <a>Add Volunteer Post</a>
                  </li>
                  <li>
                    <a>Manage My Post</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end" title={user?.displayName}>
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  alt="Tailwind CSS Navbar component"
                  src={
                    user?.photoURL ||
                    "https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-black rounded-box w-52"
            >
              <li>
                <button className="justify-between">
                  {user?.displayName || user?.email}
                </button>
              </li>
              <li>
                <button onClick={logOut}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="font-bold text-xl mr-5">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};
export default Navbar;
