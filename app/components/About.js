import Python from "./icons/Python";
import ReactCon from "./icons/ReactCon";
import HtmlIcon from "./icons/HtmlIcon";
import NodeJs from "./icons/NodeJs";
import Nicon from "./icons/Nicon";
import QT from "./icons/QT";
import CssIcon from "./icons/CssIcon";
import Tailwind from "./icons/Tailwind";

export default function About() {
  return (
    <div id="acerca" className=" py-10 px-[15%]">
      <h1 className="text-3xl font-bold ">Sobre mí</h1>
      <p className="mt-2">
        Mi nombre es James Joseph Vilca Vargas, soy desarrollador full stack. Mi
        pasión por la tecnologia empezó en la secundaria. Actualmente tengo 29
        años.
      </p>
      <p>
        Me dedico a dar soluciones de todo tipo en el mundo de la programación.
      </p>

      <section className="my-6">
        <article>
          <h1 className="text-3xl ">Mis conocimientos</h1>
          <div></div>
          <div className=" relative bg-black  rounded-md text-white max-w-[550px] my-6 p-4 roboto">
            <h2 className="text-2xl  text-green-400 ">
              Lenguajes de programación
            </h2>
            <ul className="mt-4">
              {["Python", "JavaScript", "Java", "C#", "C"].map(
                (item, index) => (
                  <li key={index} className=" group hover:bg-purple-600">
                    <span className="text-green-400 group-hover:text-transparent">
                      ~$
                    </span>{" "}
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="bg-stone-700  rounded-md roboto text-white max-w-[550px] my-6 p-4 ">
            <h2 className="text-2xl  ">Base de datos</h2>

            <ul className="mt-4 py-4 ">
              {["SQL", "MongoDB", "FirebaseDB"].map((item, index) => (
                <li
                  key={index}
                  className="hover:bg-green-600  border border-stone-300 pl-2"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-600  rounded-md roboto text-white max-w-[550px] my-6 p-4 ">
            <h2 className="text-2xl ">Frameworks y más tecnologias</h2>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 grid-rows-4 gap-2 ">
              {[
                {
                  label: "React",
                  icon: ReactCon,
                },
                {
                  label: "Html",
                  icon: HtmlIcon,
                },
                {
                  label: "CSS",
                  icon: CssIcon,
                },
                {
                  label: "Next js",
                  icon: Nicon,
                },
                {
                  label: "Tailwind CSS",
                  icon: Tailwind,
                },
                {
                  label: "Pyside",
                  icon: QT,
                },
                {
                  label: "Express JS",
                  icon: NodeJs,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative text-center rounded-md h-20 bg-slate-800 min-w-[140px]  group p-4 "
                >
                  <div className="md:invisible text-sm  group-hover:visible absolute z-40 -top-4 rounded-md left-10 bg-white  w-20 h-10 text-black">
                    {item.label}
                  </div>
                  <item.icon className="m-auto " width="55px" height="55px" />
                </div>
              ))}
            </div>
          </div>
        </article>
      </section>

      <section className="my-6">
        <h1 className="text-3xl">Idiomas</h1>
        <ul>
          <li>Español nativo</li>
          <li>Ingles avanzado</li>
        </ul>
      </section>

      <section>
        <h1>Educacion</h1>
      </section>
    </div>
  );
}
