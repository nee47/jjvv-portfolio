"use client";
import React from "react";
import Link from "next/link";

function MyNavigation() {
  return (
    <header>
      <nav className=" max-w-screen-md m-auto absolute top-10 left-0 right-0 m-x-auto">
        <ul className="flex  py-2 text-white items-center justify-center gap-x-8 ">
          <li>
            <a
              className=" bg-slate-600 p-2 rounded-md border border-slate-400"
              href="#projects-section"
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              className=" bg-slate-600 p-2 rounded-md border border-slate-400"
              href="#projects-section"
            >
              Acerca de mi
            </a>
          </li>
          <li>
            <Link href="/">Habilidades</Link>
          </li>
          <li>
            <Link href="/">Educación</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MyNavigation;
