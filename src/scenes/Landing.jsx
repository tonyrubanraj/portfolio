// import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Landing = ({ setSelectedPage }) => {
  // const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-center md:items-center md:h-full gap-16 py-10"
    >
      <div className="z-30 basis-2/5 mt-20 sm:mt-32 md:mt-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: {
              opacity: 0,
              x: -50,
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Tony RR {""}
            <span className="sm:inline sm:mt-0 block mt-7">
              <span
                className="relative text-deep-blue font-semibold z-20 before:content-brush before:absolute before:left-[-25px]
            before:top-[-70px] before:z-[-1]"
              >
                Raja
              </span>
            </span>
          </p>
          <p className="mt-10 mb-7 text-sm text-center md:text-start font-opensans">
            I am a graduate student currently pursuing M.Sc in Big Data
            Analytics at Trent University
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: {
              opacity: 0,
              x: -50,
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10">
              Let's talk
            </div>
          </AnchorLink>
        </motion.div>
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: {
              opacity: 0,
              x: -50,
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
