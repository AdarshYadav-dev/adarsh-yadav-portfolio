import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// ---------------------------------------------------------------------------
// Contact cards data — all links use direct protocol handlers, no form needed
// ---------------------------------------------------------------------------
const CONTACT_CARDS = [
  {
    id: "contact-email",
    label: "Email Me",
    value: "adarsh98215@gmail.com",
    href: "mailto:adarsh98215@gmail.com",
    description: "Send me an email directly",
    color: "#915EFF",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    id: "contact-phone",
    label: "Call Me",
    value: "+91 83689 89212",
    href: "tel:+918368989212",
    description: "Available Mon–Sat, 10am–7pm IST",
    color: "#00cea8",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.67 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.58 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
  {
    id: "contact-whatsapp",
    label: "WhatsApp",
    value: "+91 97179 76608",
    href: "https://wa.me/919717976608",
    description: "Chat with me on WhatsApp",
    color: "#25D366",
    external: true,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
      </svg>
    ),
  },
  {
    id: "contact-github",
    label: "GitHub",
    value: "AdarshYadav-dev",
    href: "https://github.com/AdarshYadav-dev",
    description: "Browse my code & projects",
    color: "#6e40c9",
    external: true,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    id: "contact-linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/adarsh-y-7aa9a1276",
    href: "https://www.linkedin.com/in/adarsh-y-7aa9a1276/",
    description: "Let's connect professionally",
    color: "#0077B5",
    external: true,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
];

// ---------------------------------------------------------------------------
// Individual contact card
// ---------------------------------------------------------------------------
const ContactCard = ({ id, label, value, href, description, color, external, icon, index }) => (
  <motion.a
    id={id}
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    variants={fadeIn("up", "spring", index * 0.15, 0.6)}
    className="group flex items-start gap-4 bg-tertiary p-5 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
    style={{ "--card-color": color }}
  >
    {/* Icon box */}
    <div
      className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
      style={{ background: `${color}22`, color }}
    >
      {icon}
    </div>

    {/* Text */}
    <div className="min-w-0">
      <p className="text-white font-semibold text-[16px] leading-tight">{label}</p>
      <p className="text-secondary text-[13px] mt-0.5 truncate">{value}</p>
      <p className="text-secondary/60 text-[12px] mt-1">{description}</p>
    </div>

    {/* Arrow */}
    <div className="ml-auto flex-shrink-0 self-center text-secondary/40 group-hover:text-white/70 transition-colors duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9 18 6-6-6-6"/>
      </svg>
    </div>
  </motion.a>
);

// ---------------------------------------------------------------------------
// Main Contact section
// ---------------------------------------------------------------------------
const Contact = () => {
  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      {/* Left panel — CTA + cards */}
      <motion.div
        variants={fadeIn("right", "tween", 0.1, 0.9)}
        className="flex-[0.75] flex flex-col"
      >
        {/* Header */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Ready to collaborate?</p>
          <h3 className={styles.sectionHeadText}>Let's Connect.</h3>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.2, 1)}
          className="mt-4 text-secondary text-[16px] max-w-lg leading-[28px]"
        >
          Have a project in mind, an opportunity to discuss, or just want to say hi?
          Reach out through any of the channels below — I typically respond within 24 hours.
        </motion.p>

        {/* Contact cards */}
        <div className="mt-8 flex flex-col gap-4">
          {CONTACT_CARDS.map((card, index) => (
            <ContactCard key={card.id} {...card} index={index} />
          ))}
        </div>
      </motion.div>

      {/* Right panel — 3D Earth */}
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 0.9)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
