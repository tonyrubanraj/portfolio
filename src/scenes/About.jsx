import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const skillVariant = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

const skillsList = [
  {
    title: "JAVA",
    image: "java.png",
  },
  {
    title: "Spring boot",
    image: "spring-boot.png",
  },
  {
    title: "Python",
    image: "python.png",
  },
  {
    title: "MySQL",
    image: "mysql.png",
  },
  {
    title: "HTML",
    image: "html.png",
  },
  {
    title: "CSS",
    image: "css.png",
  },
  {
    title: "JavaScript",
    image: "js.png",
  },
  {
    title: "React JS",
    image: "react.png",
  },
  {
    title: "AEM",
    image: "aem.png",
  },
  {
    title: "Serverless",
    image: "serverless.png",
  },
  {
    title: "Node.js",
    image: "node.png",
  },
  {
    title: "GraphQL",
    image: "graphql.png",
  },
  {
    title: "Machine Learning",
    image: "ml.png",
  },
  {
    title: "Deep Learning",
    image: "dl.png",
  },
  {
    title: "TensorFlow",
    image: "tf.png",
  },
  {
    title: "Git",
    image: "git.png",
  },
];

const Skill = (skill) => {
  const { title, image } = skill.skill;
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 
  bg-grey z-30 flex flex-col justify-center items-center text-center text-deep-blue`;

  return (
    <motion.div variants={skillVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-lg font-playfair">{title}</p>
      </div>
      <img
        className="h-full w-full"
        src={`../assets/skills/${image}`}
        alt={title}
      />
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/4 mx-auto text-center mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl mb-5">
            ABOUT <span className="text-yellow">ME</span>
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
      </motion.div>

      {/* CONTENT */}
      <div className="flex sm:flex-row flex-col w-full justify-between">
        {/* BACKGROUND */}
        <div className="sm:w-[50%]">
          <motion.div
            className="mt-0 flex justify-center flex-col h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="font-opensans md:text-xl text-justify leading-relaxed">
              I am a Software developer with 3 years of experience in building
              applications. I am very passionate about coding and constantly try
              to learn new technologies.
            </p>
            <p className="font-opensans pt-5 md:text-xl text-justify leading-relaxed">
              Intrigued by the field of data science, I have also earned Machine
              Learning and Deep Learning specialization certifications from
              Coursera. Additionally, I have experience in contributing to
              open-source project, Keras.
            </p>
          </motion.div>
        </div>

        {/* DIVIDER */}
        <div className="hidden sm:flex items-center flex-1 w-[3px] justify-center">
          <div className={`h-[80%] sm:w-[2px] bg-gradient-rainblue`}></div>
        </div>

        {/* SKILLS */}
        <div className="flex justify-start w-full sm:w-[40%] flex-col mt-12 sm:mt-0">
          <div className="text-3xl text-center pb-10 font-playfair font-semibold text-yellow">
            SKILLS
          </div>
          <motion.div
            className="grid grid-cols-4 sm:grid-cols-5 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
          >
            {skillsList.map((skill) => {
              return <Skill key={skill.title} skill={skill} />;
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
