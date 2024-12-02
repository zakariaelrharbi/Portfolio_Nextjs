import { motion } from 'framer-motion'

// variant for the stairs
const stairsAnimation = {
  initial: {
    top: "0%",
  },  
  animate: {
    top: "100%",
  },
  exit:{
    top:['100%','0%'],
  },
}

// calculate the reverse index for the stagger delay
const reverseIndex = (index) => {
    const totalSteps = 6; // total number of steps
    return totalSteps - index - 1;
}

const Stairs = () => {
  return (
    <>
      {/*render a motion divs, each representing a step of the stairs.
        Eacg div still have the same animation defined by the stairsAnimation variant.
        the delay for each div is calculated dinamically based on it's reverse index,
        creating a staggered effect with decreasing delay for each subsequent step.*/}
        {[...Array(6)].map((_, index) => {
            return (
                <motion.div
                    key={index}
                    className="w-full h-full bg-accent relative"
                    variants={stairsAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        duration: 0.4,
                        ease: 'easeInOut',
                        delay: 0.1 * reverseIndex(index),
                    }}
                />
            )
        }
        )}
    </>
    )
}

export default Stairs
