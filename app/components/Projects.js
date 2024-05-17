import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="flex flex-col w-full items-center  bg-slate-50 justify-center ">
      <h2 className="text-black text-2xl font-bold  ">Proyectos destacados</h2>
      <div className="mt-10">
        <ProjectCard
          title="Youtube Downloader (Desktop)"
          description="Sencillo descargador de videos de  youtube, realizado en python con pyside qml"
          imgSrc="app1.jpg"
        />
        <ProjectCard
          title="Youtube Downloader (Web)"
          description="Descargador de youtube tipo y2mate, realizado con next js para el front y express para el backend"
          imgSrc="app2.jpg"
        />
        <ProjectCard
          title="Youtube Downloader (Desktop)"
          description="Descargador de youtue tipo y2mate, realizado con next js para el front y express para el backend"
          imgSrc="app1.jpg"
        />
        <ProjectCard
          title="Youtube Downloader (Desktop)"
          description="Descargador de youtue tipo y2mate, realizado con next js para el front y express para el backend"
          imgSrc="app1.jpg"
        />
      </div>
      <div className="" id="projects-section">
        test
      </div>
    </section>
  );
}
