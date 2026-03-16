import { motion } from "motion/react"
import { useRef, useEffect, useState } from "react"
import Navigation from "../Components/Navigation"

function Counter() {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isInView) {
        setIsInView(true)
      }
    }, { threshold: 0.5 })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [isInView])

  useEffect(() => {
    if (!isInView) return

    let current = 0
    const target = 100000
    const duration = 1500 
    const increment = target / (duration / 16) 
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isInView])

  return (
    <span ref={ref}>
      {count >= 1000 ? `${(count / 1000).toFixed(0)}K` : count}
    </span>
  )
}

export default function Landing() {
  return (

    <div className="regular">
        <Navigation />
        <div className=" border-red-600 max-w-250 text-6xl min-w-50 mx-auto px-5 md:px-20 flex flex-col justify-center h-screen">
            <motion.div initial={{ opacity: 0 }}  animate={{ opacity: 1 }} transition={{duration: 1}}  className="text-sm md:text-xl mb-3">Hello</motion.div>
            <motion.div initial={{ opacity: 0 }}  animate={{ opacity: 1 }} transition={{duration: 1.5}} id="home" className="text-3xl md:text-6xl">I am Lucid. I'm a {<a className="link" href="#dev">VR Developer</a>} and {<a className="link" href="#content">Content Creator</a>} based in England.</motion.div>


            <motion.a initial={{ opacity: 0 }} animate={{ opacity: [0.7, 1, 0.7] }} whileHover={{ scale: 1.2 }} transition={{opacity: {duration: 3, repeat: Infinity, ease: "easeInOut"}, scale: {duration: 0.2}}} href="#content" className="bg-[#232323] w-5 h-5 self-center absolute mt-100 rounded-full cursor-pointer"/>

        </div>
        <div id="content"  className=" border-red-600 max-w-250 text-6xl min-w-50 mx-auto px-5 md:px-20 flex flex-col justify-center h-screen">
            <motion.div  initial={{ opacity: 0 }}  whileInView={{ opacity: 1 }} transition={{duration: 1}} className="text-xl mb-3">
                Content Creation
            </motion.div>
            <motion.div initial={{ opacity: 0 }}  whileInView={{ opacity: 1 }} transition={{duration: 1.5}} className="text-3xl md:text-6xl">
                Since 2022, I have been creating VR content on {<a className="link" href="https://www.youtube.com/@mightbelucid">YouTube</a>} and {<a className="link" href="https://www.tiktok.com/@mightbelucid">TikTok</a>}, gathering over <span className="text-blue-500"><Counter /></span> followers across both platforms and have been an official Content Creator for {<a className="link" href="https://www.anotheraxiom.com">Another Axiom</a>} since 2025.
            </motion.div>

        </div>
        <div id="dev" className="border-red-600 max-w-250 min-w-50 mx-auto px-5 md:px-20 flex flex-col justify-center py-20 md:py-32">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 1}} className="text-xl mb-3">
                VR Development
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 1.5}} className="text-3xl md:text-6xl mb-12">
                I have been creating VR projects since 2023, with my most recent being {<a className="link" href="https://marmovr.com">Marmo</a>}. I've built a strong skill set in <span className="text-blue-500">Unity</span> and 3D modelling in <span className="text-blue-500">Blender</span>.
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 1}} className="text-sm md:text-base mb-4 opacity-50">
                Marmo videos
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-16">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="aspect-video w-full">
                    <iframe
                        src="https://www.youtube.com/embed/jo6NctCuI-A?autoplay=1&mute=1"
                        className="w-full h-full"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                        title="Featured video 1"
                    />
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.15 }} className="aspect-video w-full">
                    <iframe
                        src="https://www.youtube.com/embed/aDHAZIc85pg?start=30&autoplay=1&mute=1"
                        className="w-full h-full"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                        title="Featured video 2"
                    />
                </motion.div>
            </div>
        </div>
        <div className="border-red-600 max-w-250 text-6xl min-w-50 mx-auto px-5 md:px-20 flex flex-col justify-center h-screen">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 1}} className="text-xl mb-3">
                Currently learning
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 1.5}} className="text-3xl md:text-6xl">
                I am expanding into web development, focusing on frontend with <span className="text-blue-500">React</span>, and also starting <span className="text-blue-500">C++</span>.
            </motion.div>
        </div>
        <div id="contact" className=" border-red-600 max-w-250 text-6xl min-w-50 mx-auto px-5 md:px-20 flex flex-col justify-center h-screen">
            <motion.div initial={{ opacity: 0 }}  whileInView={{ opacity: 1 }} transition={{duration: 1}} className="text-xl mb-3">
                Where to find me
            </motion.div>
            <motion.div initial={{ opacity: 0 }}  whileInView={{ opacity: 1 }} transition={{duration: 1.5}} className="text-3xl md:text-6xl">
                You can find me on {<a className="link" href="https://www.youtube.com/@mightbelucid">YouTube</a>}, {<a className="link" href="https://www.tiktok.com/@mightbelucid">TikTok</a>}, and contact me through my {<a className="link" href="https://www.discord.com/">Discord</a>} @mightbelucid.
            </motion.div>
        </div>

    </div>
  )
}