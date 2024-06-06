"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Link from "next/link";

function MyNavigation() {
  const [clicked, setClicked] = useState(false);

  const toggle = () => {
    setClicked(!clicked);
  };

  const t = useTranslations("Index");

  const tabs = ["nav1", "nav2", "nav3", "nav4"];

  return (
    <header>
      <nav className=" visible md:invisible max-w-screen-md mx-auto absolute top-0   z-40 md:top-10 left-0 right-0">
        <button onClick={toggle} className=" fixed z-50 right-2 p-2 text-2xl">
          ☰
        </button>

        <ul
          className={`  ${
            clicked ? " right-0" : "-right-[100%]"
          }  transition-[right] z-40 ease-in duration-300 w-[50%] fixed md:static 
           mt-8 md:visible md:w-auto ml-auto bg-white md:bg-transparent flex   flex-col md:flex-row md:mt-0 py-2 text-white justify-center  gap-x-2 gap-y-6 md:gap-y-0 rounded-md `}
        >
          {tabs.map((tab, index) => (
            <li key={index}>
              <a href={t(`${tab}.path`)}>
                <div className="p-2 md:py-1 text-sm  w-[100px]  rounded-md md:border-2 md:border-purple-700 text-center text-black md:text-purple-700 hover:bg-purple-700 hover:text-slate-200">
                  {t(`${tab}.label`)}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="bg-slate-200 ">
        <div className="flex justify-start gap-1 p-10">
          <Link
            href="/en"
            className=" px-2  bg-purple-300 text-purple-800 rounded-sm hover:bg-purple-400"
          >
            EN
          </Link>

          <Link
            href="/es"
            className=" px-2  bg-purple-300 text-purple-800   rounded-sm hover:bg-purple-400"
          >
            ES
          </Link>
        </div>
      </div>
    </header>
  );
}

export default MyNavigation;
