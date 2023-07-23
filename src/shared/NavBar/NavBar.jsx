import ActiveLink from "../../components/ActiveLink/ActiveLink";

const NavBar = () => {
  return (
    <div className="navbar w-10/12 absolute left-1/2 -translate-x-1/2 z-50 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Colleges</a>
            </li>
            <li>
              <a>Admission</a>
            </li>
            <li>
              <a>My College</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Apply</a>
      </div>
      <div className="navbar-center hidden lg:flex  ml-auto">
        <ul className="menu menu-horizontal">
          <li>
            <ActiveLink to="/">Home</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/colleges">Colleges</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/admission">Admission</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/my-college">My College</ActiveLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end w-fit">
        <a className="btn btn-primary btn-outline normal-case font-bold">Log In</a>
      </div>
    </div>
  );
};

export default NavBar;
