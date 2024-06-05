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

        <div className="my-12">
          <h2 className="text-2xl ">Conceptos</h2>
          <ul className="mt-2 grid grid-cols-1 w-fit md:grid-cols-2">
            <li className="max-w-[370px]">Modelo MVC</li>
            <li className="max-w-[370px]">Modelo MVP</li>
            <li className="max-w-[370px]">TDD</li>
            <li className="max-w-[370px]">Unit testing</li>
            <li className="max-w-[370px]">Infraestructura</li>
            <li className="max-w-[370px]">Arquitectura de software</li>
            <li className="max-w-[370px]">Patrones de diseño</li>
            <li>Serverless</li>
            <li className="max-w-[370px]">Programación orientada a objetos</li>
            <li className="max-w-[370px]">Integración contínua (Travis-CI)</li>
            <li className="max-w-[370px]">Git y Github</li>
            <li className="max-w-[370px]">
              Conocimiento básico del funcionamiento de los principales
              servicios de AWS
            </li>
          </ul>
        </div>

        <div className="my-12">
          <h2 className="text-2xl ">Tecnologías que deseo aprender</h2>
          <ul className="mt-2 grid grid-cols-1 w-fit md:grid-cols-2">
            <li className="max-w-[370px]">Docker</li>
            <li className="max-w-[370px]">Kubernetes</li>
            <li className="max-w-[370px]">React Native</li>
            <li className="max-w-[370px]">Aws cognito</li>
            <li className="max-w-[370px]">Aws DynamoDB</li>
            <li className="max-w-[370px]">Aws DocumentDB</li>
            <li className="max-w-[370px]">CloudFlare</li>
            <li className="max-w-[370px]">Aws Cloudfront</li>
          </ul>
        </div>
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
