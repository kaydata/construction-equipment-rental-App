import { FAQ } from "@/components/Faq";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
     <section className="w-full flex-center flex-col">
      <Hero />
      <Features />
      <FAQ />
     </section>
     
  )
}
