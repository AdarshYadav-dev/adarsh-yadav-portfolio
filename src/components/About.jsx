import React, { useRef } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// ---------------------------------------------------------------------------
// Lightweight tilt effect — pure React, no external dependency.
// Tracks mouse position relative to the card and applies a CSS 3D rotate
// transform proportional to cursor offset from centre.
// ---------------------------------------------------------------------------
const useTilt = (max = 15) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 2;   // -1 → +1
    const y = ((e.clientY - top) / height - 0.5) * -2;  // -1 → +1
    el.style.transform = `perspective(800px) rotateX(${y * max}deg) rotateY(${x * max}deg) scale3d(1.02,1.02,1.02)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform =
        "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
    }
  };

  return { ref, handleMouseMove, handleMouseLeave };
};

// ---------------------------------------------------------------------------
// ServiceCard — same layout/classes as before, tilt provided by useTilt hook
// ---------------------------------------------------------------------------
const ServiceCard = ({ index, title, icon }) => {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt(12);

  return (
    <div
      className="xs:w-[250px] w-full"
      style={{ transition: "transform 0.15s ease-out" }}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// About section
// ---------------------------------------------------------------------------
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a Full Stack Developer with hands-on experience building real-time
        web applications, energy monitoring dashboards, and backend services.
        I work with React.js, Node.js, Python, PostgreSQL, and MQTT-based
        communication systems. Currently at Good Enough Energy, I build live
        BESS monitoring platforms and IoT-driven dashboards. I enjoy solving
        complex problems and delivering clean, efficient, and scalable solutions.
        Let's build something great together!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
