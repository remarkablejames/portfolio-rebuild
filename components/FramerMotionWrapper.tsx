"use client"
import {motion} from "framer-motion";

export default function FramerMotionWrapper({children}: { children: React.ReactNode }) {
    // Reload scripts only when the component mounts
    return (
        <motion.div
            initial={{y: 10, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            exit={{y: -10, opacity: 0}}
            transition={{duration: 0.5}}
        >
            {children}
        </motion.div>
    )
}