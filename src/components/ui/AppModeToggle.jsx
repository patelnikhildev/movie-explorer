import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";

export const AppModeToggle = () => {
  const [mode, setmode] = useState("dark");

  function handleModeToggle() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute("data-theme");

    const newTheme = currentTheme === "dark" ? "light" : "dark";

    html.setAttribute("data-theme", newTheme);
    setmode(newTheme);
  }

  return (
    <button
      onClick={handleModeToggle}
      className="md:bg-surface md:dark:bg-surface-dark md:p-2.5 md:rounded-3xl"
    >
      <AnimatePresence mode='wait'>
        {mode === "dark" ? (
          <motion.div
          key='sun'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <Sun size={24} />
          </motion.div>
        ) : (
          <motion.div
          key='moon'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <Moon size={24} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};
