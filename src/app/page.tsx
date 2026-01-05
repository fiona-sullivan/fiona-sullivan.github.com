import Hero from '@/components/sections/Hero'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import CallToAction from '@/components/sections/CallToAction'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Skills />
      <Experience />
      <CallToAction />
    </>
  )
}
