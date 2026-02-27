import Image from "next/image";
import Pill from "./Pill";
import { useTranslations } from "next-intl";

export default function ProjectCard({ info, tags }) {
  const t = useTranslations("Index");
  return (
    <article>
      <header className="mb-8 px-6 flex flex-wrap gap-x-10 items-center justify-center md:mb-36">
        <Image
          className="rounded-md mb-2 md:mb-0 flex-shrink-[2] w-[580px] hover:scale-105 transform transition-transform duration-300"
          src={info.img}
          alt="Aplicacion desarrollada por James Vilca"
          width={700}
          height={500}
        />

        <div className=" md:min-w-[580px] max-w-[580px] flex-grow ">
          <h3 className="font-bold text-2xl text-black w-fit">{info.title}</h3>
          <p className=" text-sm pt-2 text-slate-800">{info.description}</p>
          <div className="pt-6 flex text-xs gap-x-6">
            {info.projectGitHub && (
              <a
                href={info.projectGitHub}
                target="_blank"
                className="group font-bold outline outline-1 outline-black p-2 rounded-sm  md:hover:bg-purple-500 transition-colors ease-in "
              >
                {t("externals.git")}
                <span> →</span>
              </a>
            )}

            {info.projectDemo && (
              <a
                href={info.projectDemo}
                target="_blank"
                className="py-2 font-bold hover:text-white transition-colors duration-150 ease-in rounded-sm"
              >
                {t("externals.demo")}
              </a>
            )}
          </div>

          {
            <div className="flex gap-x-2 pt-6">
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
