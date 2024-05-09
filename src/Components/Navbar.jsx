import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-cyan-300 w-full">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-end">
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
                src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="text-white mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-black rounded-box w-52"
          >
            <li>
              <button className="justify-between">UserName</button>
            </li>
            <li>
              <button>Add Volunteer Post</button>
            </li>
            <li>
              <button>Manage My Post</button>
            </li>
            <li>
              <button>My Volunteer Requested Post</button>
            </li>
            <li>
              <button>Logout</button>
            </li>
          </ul>
        </div>

        <Link to="/login" className="font-bold text-xl">
          Login
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
