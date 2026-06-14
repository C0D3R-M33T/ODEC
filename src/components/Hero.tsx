// src/components/Hero.tsx
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FiArrowRight } from "react-icons/fi";
import { useEffect } from "react";
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion";
import { FlipWords } from "./ui/flip-words";

const BLUE_SHADES: string[] = ["#0F4C81", "#1E67C6", "#2563EB", "#38BDF8"];
const FLIP_LINES: string[] = [
  "Building the world’s first ethical framework for orbital data governance.",
  "Bridging the gap between Space Treaties and Data Regulations.",
  "Ensuring transparency and accountability in the space data economy.",
  "Defining global standards for responsible orbital information use.",
  "Creating trust between Earth and orbit through ethical governance.",
];
const MOBILE_FLIP_LINES: string[] = [
  "Ethical orbital data governance.",
  "Linking space treaties and data law.",
  "Accountable space data markets.",
  "Global orbital information standards.",
  "Trust between Earth and orbit.",
];

const COLLABORATOR_LOGOS = [
  { name: "ISRO", src: "/Logos/ISRO.svg" },
  { name: "IN-SPACe", src: "/Logos/IN-SPACe_Logo.png" },
  { name: "International Astronautical Federation", src: "/Logos/IAF.png" },
  { name: "New Space Consulting", src: "/Logos/NSC.png" },
  { name: "Asia Pacific University", src: "/Logos/apu%20white.png" },
  { name: "Asia School of Business", src: "/Logos/asb.png" },
  { name: "London School of Business and Finance", src: "/Logos/LSBF.png" },
  { name: "De Montfort University Leicester", src: "/Logos/dmu-logo-light.png" },
];

const Hero: React.FC = () => {
  const color = useMotionValue(BLUE_SHADES[0]);

  useEffect(() => {
    const controls = animate(color, BLUE_SHADES, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
    return controls.stop;
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 pb-32 pt-10 text-gray-200"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <span className="mb-1.5 inline-block rounded-full bg-blue-600/50 px-3 py-1.5 text-sm">Work in progress and in active talks with stakeholders.</span>
        <h1 className="max-w-[22rem] text-center text-3xl font-medium leading-tight text-white sm:max-w-3xl sm:text-5xl md:text-7xl">
          Orbital Data Ethics Council
        </h1>
        <p className="my-6 max-w-[22rem] text-center text-base text-white sm:max-w-3xl md:text-lg">
          <FlipWords
            words={MOBILE_FLIP_LINES}
            wrapperClassName="inline-flex sm:hidden"
            className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent"
          />
          <FlipWords
            words={FLIP_LINES}
            wrapperClassName="hidden sm:inline-flex"
            className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent"
          />
        </p>
        <p className="my-6 max-w-[22rem] text-center text-base sm:max-w-xl md:text-lg">
          Introducing <strong>Orbital Data Ethics Council — ODEC</strong>.
        </p>
        <motion.a
          style={{ border, boxShadow }}
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 hover:bg-gray-950/50"
          href="/ODEC%20White%20Paper.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Read our Proposal version 0.1
          <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.a>

        <section className="mt-8 w-full max-w-[22rem] sm:mt-10 sm:max-w-5xl" aria-labelledby="collaborators-heading">
          <h2
            id="collaborators-heading"
            className="text-[0.62rem] font-semibold uppercase tracking-[0.35em] text-blue-100/55"
          >
            Collaborators
          </h2>
          <ul className="mt-3 grid w-full grid-cols-4 gap-2 sm:mt-4 sm:grid-cols-8 sm:gap-3">
            {COLLABORATOR_LOGOS.map((collaborator) => (
              <li
                key={collaborator.name}
                className="group flex h-14 min-w-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.035] px-2 backdrop-blur-sm transition hover:border-sky-300/30 hover:bg-white/[0.06] sm:h-16 sm:px-3"
              >
                <img
                  src={collaborator.src}
                  alt={collaborator.name}
                  className="max-h-8 max-w-full rounded-sm object-contain opacity-75 contrast-110 saturate-75 drop-shadow-[0_0_8px_rgba(125,211,252,0.14)] transition duration-200 group-hover:opacity-100 group-hover:saturate-100 sm:max-h-10"
                />
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};

export default Hero;
