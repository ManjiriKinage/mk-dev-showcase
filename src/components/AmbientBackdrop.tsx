import { motion } from "framer-motion";

export function AmbientBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <motion.div
        className="animate-blob absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-primary/25 blur-[120px]"
      />
      <motion.div
        className="animate-blob absolute -right-40 top-96 h-[520px] w-[520px] rounded-full bg-accent/25 blur-[140px]"
        style={{ animationDelay: "-4s" }}
      />
      <motion.div
        className="animate-blob absolute bottom-0 left-1/3 h-[380px] w-[380px] rounded-full bg-primary/15 blur-[120px]"
        style={{ animationDelay: "-8s" }}
      />
    </div>
  );
}
