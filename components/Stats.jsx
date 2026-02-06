'use client';

import CountUp from "react-countup";

const stats = [
    {
        title: "Years of Experience",
        count: 2,
    },
    {
        title: "Projects Completed",
        count: 8
    },
    {
        title: "Technologies mastered",
        count: 10,
    },
    {
        title: "Code commits",
        count: 1630
    },
];
const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0"> 
        <div className="container mx-auto xl:mt-8 xl:mb-8">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {stats.map((stat, index) => {
                    return(
                        <div className="flex-1 flex gap-6 items-center justify-center xl:justify-start  xl:items-center" 
                            key={index} >
                            <CountUp 
                                end={stat.count} 
                                duration={5} 
                                delay={2}
                                className="text-4xl xl:text-6xl text-accent font-extrabold"/>
                            <p className={`${stat.title.length < 22 ? "max-w-[160px]" : "max-w-[150px]"} leading-snug text-white/80`}>
                            {stat.title}</p>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    </section>
    )
}

export default Stats
