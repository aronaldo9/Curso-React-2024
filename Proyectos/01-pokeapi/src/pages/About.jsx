import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import proy1 from "../assets/images/proy_prestamosReact.png";
import proy2 from "../assets/images/proy_agenciaViajes.png";
import proy3 from "../assets/images/proy_festivalRock.png";
import proy4 from "../assets/images/proy_blogCafe.png";

const projects = [
  {
    id: 1,
    name: "Blog de Café HTML-CSS",
    image: proy4,
    liveUrl: "https://blog-de-cafe-apf.netlify.app/",
    githubUrl: "https://github.com/aronaldo9/BlogDeCafe",
  },
  {
    id: 2,
    name: "Préstamos React",
    image: proy1,
    liveUrl: "https://proyect-prestamos-react-apf.netlify.app/",
    githubUrl: "https://github.com/aronaldo9/Proyecto-Prestamos-React",
  },
  {
    id: 3,
    name: "Festival de Música HTML-CSS",
    image: proy3,
    liveUrl: "https://festivalrock-apf.netlify.app/",
    githubUrl: "https://github.com/aronaldo9/festivalMusica",
  },
  {
    id: 4,
    name: "Agencia de Viajes Node.JS",
    image: proy2,
    liveUrl: "https://agenciaviajesnode-w6ts.onrender.com/",
    githubUrl: "https://github.com/aronaldo9/agenciaviajesnode",
  },
];

const About = () => {
  return (
    <>
      <Navbar />
      <h1 className="text-4xl font-bold text-center text-gray-800 underline">
        ABOUT ME
      </h1>
      <div className="text-2xl font-bold text-center text-red-800 mt-4">
        Mis Proyectos
      </div>
      <div className="flex flex-wrap justify-center">
        {projects.map((project) => (
          <div key={project.id}>
            <div className="relative flex w-80 flex-col rounded-xl bg-black bg-clip-border text-gray-700 shadow-md my-5 mx-4">
              <div className="relative mx-4 mt-6 h-40 overflow-visible rounded-xl bg-blue-500 bg-clip-border text-white shadow-lg shadow-blue-500/40 bg-gradient-to-t from-blue-500 to-blue-900">
                <img
                  src={project.image}
                  alt=""
                  className="size-32 rounded-full my-4 mx-auto cursor-pointer"
                />
              </div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-900 antialiased ">{`Proyecto: ${project.name}`}</h5>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-mono text-base font-light leading-relaxed text-blue-500 hover:underline"
                >
                  {project.liveUrl}
                </a>
              </div>
              <div className="p-6 pt-0">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="select-none rounded-lg bg-blue-950 py-3 px-6 text-center align-middle font-sans text-sm text-white font-bold uppercase shadow-md shadow-blue-800/20 transition-all hover:shadow-lg hover:shadow-blue-600/50"
                >
                  Ir al Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link
        to="/"
        className="text-xl text-blue-500 flex items-center justify-center"
      >
        Volver a Home
      </Link>
      <Footer />
    </>
  );
};

export default About;
