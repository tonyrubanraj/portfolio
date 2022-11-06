import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="py-48">
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
            SEND A <span className="text-yellow">MESSAGE</span>
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
      </motion.div>

      {/* FORM */}
      <div className="md:flex md:justify-center">
        <motion.div
          className="basis-1/2 mt-10 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/91f763f57a265795ca4f9c714c3f50f2 "
            method="POST"
          >
            {/* NAME FIELD */}
            <input
              className="w-full bg-white font-semibold placeholder-opaque-black p-3 text-black"
              type="text"
              placeholder="Name"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "This field is required"}
                {errors.name.type === "maxLength" && "Max Length is 100 chars"}
              </p>
            )}

            {/* EMAIL FIELD */}
            <input
              className="w-full bg-white font-semibold placeholder-opaque-black p-3 mt-5 text-black"
              type="text"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required"}
                {errors.email.type === "pattern" &&
                  "Enter a valid email address"}
              </p>
            )}

            {/* MESSAGE FIELD */}
            <textarea
              className="w-full bg-white font-semibold placeholder-opaque-black p-3 mt-5 text-black"
              type="text"
              placeholder="Message"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" && "This field is required"}
                {errors.message.type === "maxLength" &&
                  "Max Length is 2000 chars"}
              </p>
            )}

            <button
              type="submit"
              className="px-5 py-2 mt-5 bg-yellow font-semibold text-deep-blue hover:bg-red hover:text-white transition duration-500"
            >
              MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
