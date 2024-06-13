"use client";
import About from "@/src/components/about";
import Education from "@/src/components/education";
import Footer from "@/src/components/footer";
import Header from "@/src/components/header";
import Particles from "@/src/components/magicui/particles";
import TextReveal from "@/src/components/magicui/text-reveal";
import Projects from "@/src/components/projects";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Component() {
  const t = useTranslations("Hook");

  const { theme } = useTheme();

  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <main className="relative flex min-h-[100dvh] flex-col">
      <Header />
      <section className="w-full" id="hook">
        <TextReveal text={t("title")} />
      </section>
      <About />
      <Education />
      <Projects />
      <Footer />
      <Particles
        className="absolute inset-0 -z-50 h-full w-full"
        quantity={250}
        ease={80}
        color={color}
        size={1}
        refresh
      />
    </main>
  );
}
