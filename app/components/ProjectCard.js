import Image from "next/image";
import Pill from "./Pill";

export default function ProjectCard({ info, tags }) {
  return (
    <article>
      <header className=" flex flex-wrap  gap-x-10 items-center justify-center mb-8  md:mb-36 ">
        <Image
          className="rounded-t-lg flex-shrink-[2] w-[580px]   px-6  "
          src={info.img}
          alt="aplicacion desarrollada por joseph vilca"
          width={700}
          height={500}
        />

        <div className=" md:min-w-[580px] max-w-[580px]  flex-grow  p-6  ">
          <h3 className="font-bold">{info.title}</h3>
          <p className="text-sm pt-2 text-slate-600">{info.description}</p>
          <div className="pt-6 flex text-xs gap-x-6">
            <a
              href={info.projectGitHub}
              target="_blank"
              className="group outline outline-2 outline-black p-2 rounded-sm  md:hover:outline-purple-500 transition-[outline] ease-in "
            >
              Ver en GitHub
              <span> →</span>
            </a>
            {info.projectDemo && (
              <a
                href={info.projectDemo}
                target="_blank"
                className="p-2 hover:outline  hover:outline-sky-500 transition-[outline] ease-in rounded-sm"
              >
                Probar Online
              </a>
            )}
          </div>

          {
            <div className="flex gap-x-2 pt-6 ">
              {tags?.map((tag, index) => (
                <Pill key={index} props={tag} />
              ))}
            </div>
          }
        </div>
      </header>
    </article>
  );
}
