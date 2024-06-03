import Image from "next/image";
import uba from "@/public/UBA.png";
import Languages from "./Languages";
import Frameworks from "./Frameworks";
import DBS from "./DBS";

export default function About() {
  return (
    <div id="acerca" className=" py-12 px-[5%] md:px-[15%]">
      <h1 className="text-3xl font-bold ">Sobre mí</h1>
      <p className="mt-2">
        Mi nombre es James Joseph Vilca Vargas, soy desarrollador full stack. Mi
        pasión por la tecnologia empezó en la secundaria. Actualmente tengo 29
        años.
      </p>
      <p>
        Me dedico a dar soluciones de todo tipo en el mundo de la programación.
      </p>

      <section className="my-16">
        <article>
          <h1 className="text-3xl ">Mis conocimientos</h1>
          <div className="flex flex-wrap gap-4 mt-6 ">
            <div>
              <Languages />
              <DBS />
            </div>
            <Frameworks />
          </div>
        </article>
      </section>

      <section className="my-24">
        <h1 className="text-3xl">Idiomas</h1>
        <p className="my-4">Español nativo</p>
        <p>Inglés avanzado</p>
      </section>

      <section className="my-24">
        <h1 className=" text-3xl">Educación</h1>
        <div className="flex gap-x-2 mt-10 items-center">
          <Image
            src={uba}
            alt="Universidad de Buenos Aires"
            className=" h-36  w-auto"
          />
          <div className="flex flex-col">
            <div className="font-bold text-7xl">.UBA</div>
            <div className="text-xl w-[180px] break-words leading-5 pl-4">
              Universidad de Buenos Aires
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-3xl bg-gray-900 rounded-sm w-fit text-white p-4 ">
            Ingeniería en Informática
          </h2>
          <p className="text-gray-700">Fecha de inicio: 2014</p>
        </div>
      </section>
    </div>
  );
}
