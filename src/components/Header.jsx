import React from "react";

function Header() {
  return (
    <nav class="relative w-full flex flex-wrap items-center justify-between py-3 bg-[#20354b] text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
      <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <div class="container-fluid">
          <a class="text-2xl text-white font-semibold text-center" href="#">
            <img
              src="/bytewise-logo.png"
              className="w-[150px] hidden sm:block"
              alt=""
            />
          </a>
        </div>
        <div>
          <a class="text-2xl text-white font-semibold sm:-ml-[100px]" href="#">
            Hall Of Open Source
          </a>
        </div>
        <div></div>
      </div>
    </nav>
  );
}

export default Header;
