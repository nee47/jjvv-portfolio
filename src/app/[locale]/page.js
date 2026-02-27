import Projects from "../components/Projects";
import About from "../components/About";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default async function Home({ params }) {
  const l = await params;

  return (
    <main className="flex min-h-screen archivo bg-slate-200 flex-col items-center    ">
      <Hero></Hero>
      <Projects />
      <About />
      <Experience />
      <Footer />
    </main>
  );
}
