import ProjectCard from "./ProjectCard";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("Index");
  const TAGS = {
    python: {
      name: "python",
      logo: "python",
      classe: "bg-yellow-200 ",
    },
    tailwind: {
      name: "tailwind css",
      logo: "tailwind",
      classe: "bg-sky-200   ",
    },

    express: {
      name: "Express",
      logo: "nodejs",
      classe: "bg-slate-300 flex-row-reverse ",
    },
    nextjs: {
      name: "Nextjs",
      logo: "nextjs",
      classe: "bg-black text-white  ",
    },
    js: {
      name: "Java Script",
      logo: "nodejs",
      classe: "bg-slate-200",
    },
    qml: {
      name: "QML",
      logo: "qml",
      classe: "bg-green-500 text-white ",
    },
    pyside: {
      name: "pyside6",
      logo: "qt",
      classe: " bg-slate-200 ",
    },
  };

  const PROJECTS = [
    {
      info: {
        title: "Elige Inteligente",
        description: t("projectElige"),
        img: "/elige.webp",
        projectDemo: "https://elige-inteligente.devmotec.com",
      },
      tags: [TAGS.nextjs, TAGS.tailwind],
    },
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
        title: "Devmotec",
        description: t("projectDevmotec"),
        img: "/devmotec.webp",
        projectGitHub: "https://github.com/nee47/devmotec",
        projectDemo: "https://devmotec.com",
      },
      tags: [TAGS.nextjs, TAGS.tailwind],
    },
    {
      info: {
        title: "Lubesac",
        description: t("project2"),
        img: "/lubesac.webp",
        projectGitHub: "https://github.com/nee47/lubsacweb",
        projectDemo: "https://lubricantesespecialesdelperu.com",
      },
      tags: [TAGS.nextjs, TAGS.tailwind, TAGS.js],
    },
    {
      info: {
        title: "Pertu Experiences",
        description: t("projectPertu"),
        img: "/pertu.webp",

        projectDemo: "https://pertu-experiences.netlify.app/",
      },
      tags: [TAGS.nextjs, TAGS.tailwind, TAGS.js],
    },
  ];

  return (
    <section
      className=" flex flex-col w-full items-center justify-center pt-44  "
      id={t("nav1.path").slice(1)}
    >
      <h2 className="text-black text-5xl font-bold">{t("pro")}</h2>
      <div className="mt-20">
        {PROJECTS.map(
          (p, index) =>
            p && (
              <ProjectCard
                key={index}
                info={p.info}
                tags={p.tags}
                index={index}
              />
            ),
        )}
      </div>
    </section>
  );
}
