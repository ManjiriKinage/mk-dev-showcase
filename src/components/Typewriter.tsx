import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Typewriter({ words, className = "" }: { words: string[]; className?: string }) {
  const [i, setI] = useState(0);
  const [txt, setTxt] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del) {
        const next = word.slice(0, txt.length + 1);
        setTxt(next);
        if (next === word) setTimeout(() => setDel(true), 1200);
      } else {
        const next = word.slice(0, txt.length - 1);
        setTxt(next);
        if (next === "") {
          setDel(false);
          setI((v) => v + 1);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [txt, del, i, words]);

  return (
    <span className={className}>
      {txt}
      <motion.span
        aria-hidden
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-1 bg-gradient-brand"
      />
    </span>
  );
}
