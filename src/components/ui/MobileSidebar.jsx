import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import { Navbar } from "./Navbar";

export const MobileSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsSidebarOpen(true)}>
        <Menu size={24} />
      </button>

      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              className="absolute inset-0 bg-black/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsSidebarOpen(false)}
            />

            <motion.div
              className="flex flex-col gap-3 absolute top-0 right-0 h-full w-55 bg-surface dark:bg-surface-dark pt-8 px-4"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <button className="" onClick={() => setIsSidebarOpen(false)}>
                <X size={36} />
              </button>

              <Navbar />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
