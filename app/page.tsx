import About from "@/components/about";
import Education from "@/components/education";
import Footer from "@/components/footer";
import Header from "@/components/header";
import TextReveal from "@/components/magicui/text-reveal";
import Projects from "@/components/projects";

export default function Component() {
  return (
    <main className="flex min-h-[100dvh] flex-col divide-y">
      <Header></Header>
      <section className="w-full" id="hook">
        <TextReveal text="I like to build websites using Javascript, Next.js, Tailwindcss, PHP and Drupal" />
      </section>
      <About></About>
      <Education></Education>
      <Projects></Projects>
      <Footer></Footer>
    </main>
  );
}
