"use client";
import { useState } from "react";

function MyNavigation() {
  const [clicked, setClicked] = useState(false);

  const toggle = () => {
    setClicked(!clicked);
  };

  const tabs = [
    { label: "Proyectos", path: "#proyectos" },
    { label: "Acerca de mi", path: "#acerca" },
    { label: "Experiencia", path: "#experiencia" },
    { label: "Contacto", path: "#contacto" },
  ];

  return (
    <header>
      <nav className=" visible md:invisible max-w-screen-md mx-auto absolute top-0   z-30 md:top-10 left-0 right-0">
        <button onClick={toggle} className=" fixed z-30 right-2 p-2 text-2xl">
          ☰
        </button>

        <ul
          className={`  ${
            clicked ? " right-0" : "-right-[100%]"
          }  transition-[right] ease-in duration-300 w-[50%] fixed md:static 
           mt-8 md:visible md:w-auto ml-auto bg-white md:bg-transparent flex   flex-col md:flex-row md:mt-0 py-2 text-white justify-center  gap-x-4 gap-y-6 md:gap-y-0 rounded-md `}
        >
          {tabs.map((tab, index) => (
            <li key={index}>
              <a
                href={tab.path}
                className="p-2 text-sm   rounded-md md:border-2 md:border-purple-700 text-black md:text-purple-700 hover:bg-purple-700 hover:text-slate-200"
              >
                {tab.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default MyNavigation;
