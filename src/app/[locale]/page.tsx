import About from "@/src/components/about";
import Education from "@/src/components/education";
import Footer from "@/src/components/footer";
import Header from "@/src/components/header";
import TextReveal from "@/src/components/magicui/text-reveal";
import Projects from "@/src/components/projects";
import { useTranslations } from "next-intl";

export default function Component() {
  const t = useTranslations("Hook");
  return (
    <main className="flex min-h-[100dvh] flex-col divide-y">
      <Header></Header>
      <section className="w-full" id="hook">
        <TextReveal text={t("title")} />
      </section>
      <About></About>
      <Education></Education>
      <Projects></Projects>
      <Footer></Footer>
    </main>
  );
}
