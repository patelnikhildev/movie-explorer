import { Search } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import { Input } from "./Input";

export const SearchInput = () => {
  const [MobileSearchInput, setMobileSearchInput] = useState(false);
  return (
    <>
      <button
        onClick={() =>
          setMobileSearchInput((prev) => (prev === false ? true : false))
        }
        className="md:hidden"
      >
        <Search size={24} />
      </button>

      <Input className="hidden md:block"/>

      <AnimatePresence>
        {MobileSearchInput && (
          <motion.div
            className="absolute top-12 left-0 px-3 py-1 bg-surface dark:bg-surface-dark w-full"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.2 }}
          >
            <Input />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
