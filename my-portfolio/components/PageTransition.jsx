// use client means that the code will only run on the client side, 
// and will be ignored during server side rendering.
'use client';

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation';

const PageTransition = ({children}) => {
    const pathname = usePathname();
  return (
    <AnimatePresence>
        <div key={pathname}>
            <motion.div 
                initial={{opacity: 1}}
                animate={{opacity: 0, 
                transition:{delay: 0.5, duration: 0.4, ease: "easeInOut" },
                }}
                className = "h-screen w-screen bg-primary fixed top-0 pointer-events-none "
                />
            {children}
        </div>
    </AnimatePresence>
  )
}

export default PageTransition
