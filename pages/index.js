import Hero from "@/sections/Hero"
import About from "@/sections/About"
import Kits from "@/sections/Kits"
import How from "@/sections/How"
import Signup from "@/sections/Signup"
import Contact from "@/sections/Contact"
import Footer from "@/components/Footer"
import Features from "@/sections/Features"

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Kits />
      <About />
      <How />
      <Signup />
      <Contact />
      <Footer />
    </>
  )
}
