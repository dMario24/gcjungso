"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="bg-white shadow-md relative z-20">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/logo_gcjungso.png"
              alt="과천시 중소기업협의회 로고"
              className="h-32"
            />
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-4">
          <Link
            href="/greeting"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            인사말
          </Link>
          <Link
            href="/organization"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            조직도
          </Link>
          <Link
            href="/members"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            회원사
          </Link>
          <Link
            href="/kakao"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            문의하기
          </Link>
        </nav>
        <div onClick={handleNav} className="md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={nav ? "md:hidden" : "hidden"}>
        <ul className="absolute left-0 right-0 bg-white shadow-md flex flex-col items-center z-10">
            <li className="w-full text-center">
                <Link href="/greeting" className="block py-3 hover:bg-gray-100" onClick={() => setNav(false)}>인사말</Link>
            </li>
            <li className="w-full text-center border-t">
                <Link href="/organization" className="block py-3 hover:bg-gray-100" onClick={() => setNav(false)}>조직도</Link>
            </li>
            <li className="w-full text-center border-t">
                <Link href="/members" className="block py-3 hover:bg-gray-100" onClick={() => setNav(false)}>회원사</Link>
            </li>
            <li className="w-full text-center border-t">
                <Link href="/kakao" className="block py-3 hover:bg-gray-100" onClick={() => setNav(false)}>문의하기</Link>
            </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;