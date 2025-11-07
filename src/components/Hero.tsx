// src/components/Hero.tsx
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FiArrowRight } from "react-icons/fi";
import { useEffect } from "react";
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion";

const BLUE_SHADES: string[] = ["#0F4C81", "#1E67C6", "#2563EB", "#38BDF8"];

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
      <div className="relative z-10 flex flex-col items-center text-center">
        <span className="mb-1.5 inline-block rounded-full bg-blue-600/50 px-3 py-1.5 text-sm">Work in progress and in active talks with stakeholders.</span>
        <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl md:text-7xl">
          Ethics for the Orbital Edge
        </h1>
        <p className="my-6 max-w-xl text-center text-base md:text-lg">
          Building the world's first framework for transparent, fair, and sustainable governance of orbital data.
        </p>
        <p className="my-6 max-w-xl text-center text-base md:text-lg">
          Introducing <strong>Cloud Orbital Data Ethics Council — ODEC</strong>.
        </p>
        <motion.button
          style={{ border, boxShadow }}
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 hover:bg-gray-950/50"
        >
          Read our Proposal version 0.1
          <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.button>
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
