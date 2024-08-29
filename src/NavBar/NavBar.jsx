const NavBar = () => {
  return (
    <>
      {/* large and mid device */}
      <div className="text-center w-[640px] md:w-[1280px] m-auto md:flex items-center justify-around">
        <div>
          <h1 className="text-4xl font-bold">My Kitchen</h1>
        </div>
        <div className="md:flex gap-2">
          <ul className="menu menu-dropdown menu-horizontal">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-4 justify-around">
          <label className="input input-ghost rounded-3xl bg-black opacity-20 flex items-center gap-2">
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 18.9998L13.803 13.8028M13.803 13.8028C15.2096 12.3962 15.9998 10.4885 15.9998 8.49931C15.9998 6.51011 15.2096 4.60238 13.803 3.19581C12.3964 1.78923 10.4887 0.999023 8.49949 0.999023C6.51029 0.999023 4.60256 1.78923 3.19599 3.19581C1.78941 4.60238 0.999207 6.51011 0.999207 8.49931C0.999207 10.4885 1.78941 12.3962 3.19599 13.8028C4.60256 15.2094 6.51029 15.9996 8.49949 15.9996C10.4887 15.9996 12.3964 15.2094 13.803 13.8028Z"
                stroke="#9b9b9b"
                strokeOpacity="0.7"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input type="text" className="grow" placeholder="Search" />
          </label>
          <div>
            <svg
              width={48}
              height={48}
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width={48} height={48} rx={24} fill="#0BE58A" />
              <path
                d="M31.9761 32.9668C31.0444 31.7333 29.8391 30.7329 28.455 30.0446C27.0709 29.3562 25.5459 28.9987 24.0001 29.0001C22.4543 28.9987 20.9292 29.3562 19.5451 30.0446C18.1611 30.7329 16.9557 31.7333 16.0241 32.9668M31.9761 32.9668C33.7941 31.3497 35.0762 29.2182 35.655 26.8549C36.2337 24.4916 36.0804 22.0082 35.2153 19.7341C34.3503 17.4599 32.8144 15.5025 30.8113 14.1213C28.8081 12.7401 26.4325 12.0005 23.9994 12.0005C21.5663 12.0005 19.1906 12.7401 17.1875 14.1213C15.1844 15.5025 13.6485 17.4599 12.7834 19.7341C11.9184 22.0082 11.7651 24.4916 12.3438 26.8549C12.9226 29.2182 14.2061 31.3497 16.0241 32.9668M31.9761 32.9668C29.7814 34.9243 26.9409 36.0043 24.0001 36.0001C21.0588 36.0046 18.219 34.9246 16.0241 32.9668M28.0001 21.0001C28.0001 22.061 27.5786 23.0784 26.8285 23.8285C26.0783 24.5787 25.0609 25.0001 24.0001 25.0001C22.9392 25.0001 21.9218 24.5787 21.1716 23.8285C20.4215 23.0784 20.0001 22.061 20.0001 21.0001C20.0001 19.9392 20.4215 18.9218 21.1716 18.1717C21.9218 17.4215 22.9392 17.0001 24.0001 17.0001C25.0609 17.0001 26.0783 17.4215 26.8285 18.1717C27.5786 18.9218 28.0001 19.9392 28.0001 21.0001Z"
                stroke="#150B2B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
