import { motion, AnimatePresence } from "motion/react";
import { containerVariants, itemVariants } from "@/utils";

type MobileMenuProps = {
  handleMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showMenu: boolean;
};

const MobileMenu = ({ handleMenu, showMenu }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {showMenu ? (
        <motion.section
          initial={{ height: 0 }}
          animate={{ height: "35vh" }}
          exit={{
            height: 0,
            transition: { delay: 0.7, duration: 0.3 },
          }}
          className="md:hidden fixed top-18 left-0 w-full bg-blue-600 px-4 flex-col z-50"
        >
          <motion.ul
            variants={containerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className=" flex gap-6 py-12 px-4 flex-col"
          >
            <motion.li
              className="capitalize text-white cursor-pointer"
              variants={itemVariants}
            >
              <a href="#services" onClick={() => handleMenu(!showMenu)}>
                services
              </a>
            </motion.li>
            <motion.li
              className="capitalize text-white cursor-pointer"
              variants={itemVariants}
            >
              <a href="#about" onClick={() => handleMenu(!showMenu)}>
                about
              </a>
            </motion.li>

            <motion.li
              className="capitalize text-white cursor-pointer"
              variants={itemVariants}
            >
              <a href="#testimonials" onClick={() => handleMenu(!showMenu)}>
                reviews
              </a>
            </motion.li>
            <motion.li
              className="capitalize text-white cursor-pointer"
              variants={itemVariants}
            >
              <a href="#contact" onClick={() => handleMenu(!showMenu)}>
                contact
              </a>
            </motion.li>
          </motion.ul>
        </motion.section>
      ) : null}
    </AnimatePresence>
  );
};

export default MobileMenu;
