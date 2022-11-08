import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

const projectList = [
  {
    title: "DataFlow Backend",
    image: "dataflow-backend.jpg",
    description:
      "Backend for a web application for data migration built using Spring boot",
    repoLink: "https://github.com/tonyrubanraj/DataFlow2.0",
  },
  {
    title: "DataFlow Frontend",
    image: "dataflow-frontend.jpg",
    description:
      "Frontend for a web application for data migration built using React JS",
    repoLink: "https://github.com/tonyrubanraj/dataflow2-frontend",
  },
  {
    title: "E-Shop",
    image: "eshop.png",
    description:
      "Front-end for an e-commerce website built using React JS, Material UI, and Strapi with Stripe payment integration",
    repoLink: "https://github.com/tonyrubanraj/eshop",
  },
  {
    title: "Portfolio",
    image: "portfolio.png",
    description:
      "The Portfolio website built using React JS, Tailwind and animations using Framer Motion",
    repoLink: "https://github.com/tonyrubanraj/portfolio",
  },
];

const Project = (project) => {
  const { title, image, description, repoLink } = project.project;
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 
  bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  return (
    <a href={repoLink} target="_blank" rel="noreferrer">
      <motion.div
        variants={projectVariant}
        className="relative md:h-[237px] md:w-[420px] h-[200px] w-[350px] xs:gap-y-4"
      >
        <div className={overlayStyles}>
          <p className="text-2xl font-playfair">{title}</p>
          <p className="mt-7">{description}</p>
        </div>
        <img className="h-full w-full" src={`../assets/${image}`} alt={title} />
      </motion.div>
    </a>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/4 mx-auto text-center mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl mb-5">
            <span className="text-yellow">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-2 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {projectList.map((project) => {
            return <Project key={project.title} project={project} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
