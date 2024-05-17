export default function ProjectCard({ title, description, tags, imgSrc }) {
  return (
    <article>
      <header className=" max-w-4xl  flex flex-col md:flex-row gap-x-10 items-center mb-48 ">
        <img
          className="rounded-t-lg max-w-md hover:scale-150 transition ease-out "
          src={imgSrc}
          alt=""
        />
        <div className="">
          <h3 className="font-bold">{title}</h3>
          <p className="text-xs text-slate-600 ">{description}</p>
        </div>
      </header>
    </article>
  );
}
