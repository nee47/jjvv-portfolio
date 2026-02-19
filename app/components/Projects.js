import ProjectCard from "./ProjectCard";
import Python from "./icons/Python";
import Tailwind from "./icons/Tailwind";
import NodeJs from "./icons/NodeJs";
import Nicon from "./icons/Nicon";
import QT from "./icons/QT";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("Index");
  const TAGS = {
    python: {
      name: "python",
      logo: Python,
      classe: "bg-yellow-200 ",
    },
    tailwind: {
      name: "tailwind css",
      logo: Tailwind,
      classe: "bg-sky-200   ",
    },

    express: {
      name: "Express",
      logo: NodeJs,
      classe: "bg-slate-300 flex-row-reverse ",
    },
    nextjs: {
      name: "Nextjs",
      logo: Nicon,
      classe: "bg-black text-white  ",
    },
    js: {
      name: "Java Script",
      logo: NodeJs,
      classe: "bg-slate-200",
    },
    qml: {
      name: "QML",
      logo: (props) => {
        return <svg width={0} height={0}></svg>;
      },
      classe: "bg-green-500 text-white ",
    },
    pyside: {
      name: "pyside6",
      logo: QT,
      classe: " bg-slate-200 ",
    },
  };

  const PROJECTS = [
    {
      info: {
        title: "Dominaria General Contractors",
        description: t("projectDominaria"),
        img: "/dominariaca.jpg",
        projectDemo: "https://dominaria.ca",
      },
      tags: [TAGS.nextjs, TAGS.tailwind],
    },
    {
      info: {
        title: "YT downloader web",
        description: t("project1"),
        img: "/app1.webp",
        projectGitHub: "https://github.com/nee47/ytdownloader-web",
        projectDemo: "https://streamable.com/umoapp",
      },
      tags: [TAGS.nextjs, TAGS.express, TAGS.tailwind],
    },
    {
      info: {
        title: "Lubesac",
        description: t("project2"),
        img: "/app3.webp",
        projectGitHub: "https://github.com/nee47/lubsacweb",
        projectDemo:
          "https://master--lubricantesespecialesdelperu.netlify.app/",
      },
      tags: [TAGS.nextjs, TAGS.tailwind, TAGS.js],
    },
    ,{
      info: {
        title: "Pertu Experiences",
        description: t("projectPertu"),
        img: "/pertu-opt.jpg",
        
        projectDemo: "https://pertu-experiences.netlify.app/",
      },
      tags: [TAGS.nextjs, TAGS.tailwind, TAGS.js],
    },
  ];

  return (
    <section
      className="flex flex-col w-full items-center bg-slate-50 justify-center pt-20  "
      id={t("nav1.path").slice(1)}
    >
      <h2 className="text-black text-3xl font-bold  ">{t("pro")}</h2>
      <div className="mt-20">
        {PROJECTS.map((p, index) => (
          <ProjectCard key={index} info={p.info} tags={p.tags} />
        ))}
      </div>
    </section>
  );
}
