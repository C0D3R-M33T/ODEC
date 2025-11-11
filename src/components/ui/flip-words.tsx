import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FlipWordsProps {
  words: string[];
  duration?: number;
  className?: string;
  wrapperClassName?: string;
}

export const FlipWords: React.FC<FlipWordsProps> = ({
  words,
  duration = 2500,
  className,
  wrapperClassName,
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length <= 1) return;
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, duration);
    return () => clearTimeout(timeout);
  }, [index, duration, words.length]);

  return (
    <span
      className={cn(
        "inline-flex h-[1.2em] items-center overflow-hidden align-middle",
        wrapperClassName
      )}
      style={{ perspective: "1200px" }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          initial={{ rotateX: 90, opacity: 0, y: "0.35em" }}
          animate={{ rotateX: 0, opacity: 1, y: "0em" }}
          exit={{ rotateX: -90, opacity: 0, y: "-0.35em" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className={cn(
            "inline-block whitespace-nowrap font-semibold tracking-tight",
            className
          )}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};
