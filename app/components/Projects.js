import ProjectCard from "./ProjectCard";
import Python from "./icons/Python";
import Tailwind from "./icons/Tailwind";
import NodeJs from "./icons/NodeJs";
import Nicon from "./icons/Nicon";
import QT from "./icons/QT";

export default function Projects() {
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
        title: "YT downloader web",
        description:
          "Descargador de youtube tipo y2mate, realizado con next js para el front y express para el backend. Utiliza el ejecutable del modulo yt-dlp",
        img: "/app1.webp",
        projectGitHub: "https://github.com/nee47/ytdownloader-web",
        projectDemo: "https://streamable.com/umoapp",
      },
      tags: [TAGS.nextjs, TAGS.express, TAGS.tailwind],
    },
    {
      info: {
        title: "Lubesac",
        description:
          "Página web para la empresa Lubricantes especiales del Perú, presentación de la empresa, catálogo estático de los productos y optimizado para mobiles. Realizado con nextjs de forma estática.",
        img: "/app3.webp",
        projectGitHub: "https://github.com/nee47/lubsacweb",
        projectDemo:
          "https://master--lubricantesespecialesdelperu.netlify.app/",
      },
      tags: [TAGS.nextjs, TAGS.tailwind, TAGS.js],
    },
    {
      info: {
        title: "YT downloader Desktop",
        description:
          "Descargador de youtube simple para deskptop, realizado con python, pyside6 con qml para la interfaz gráfica y el modulo yt-dlp.",
        img: "/app2.webp",
        projectGitHub: "https://github.com/nee47/ytdownloader",
        projectDemo: "https://streamable.com/kr4xgy",
      },
      tags: [TAGS.python, TAGS.pyside, TAGS.qml],
    },
  ];

  return (
    <section
      id="proyectos"
      className="flex flex-col w-full items-center bg-slate-50 justify-center pt-20  "
    >
      <h2 className="text-black text-3xl font-bold  ">Proyectos destacados</h2>
      <div className="mt-20">
        {PROJECTS.map((p, index) => (
          <ProjectCard key={index} info={p.info} tags={p.tags} />
        ))}
      </div>
    </section>
  );
}
