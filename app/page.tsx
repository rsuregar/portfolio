import About from "@/components/about";
import Education from "@/components/education";
import Footer from "@/components/footer";
import Header from "@/components/header";
import TextReveal from "@/components/magicui/text-reveal";
import Projects from "@/components/projects";

export default function Component() {
  return (
    <main className="flex flex-col min-h-[100dvh] divide-y">
      <Header></Header>
      <section className="w-full py-12 md:py-24 lg:py-32" id="projects">
        <TextReveal text="I love to build using Javascript, Next.js, Tailwindcss, PHP and Drupal" />
      </section>
      <About></About>
      <Education></Education>
      <Projects></Projects>
      <Footer></Footer>
    </main>
  );
}
