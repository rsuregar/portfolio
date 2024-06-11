"use client";
import { cn } from "@/src/lib/utils";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { ChevronRight, ChevronsDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Icons } from "./icons";
import LocalSwitcher from "./local-switcher";
import OrbitingCircles from "./magicui/orbiting-circles";
import WordRotate from "./magicui/word-rotate";
import SocialLinks from "./socialLinks";
import { buttonVariants } from "./ui/button";

export default function Header() {
  const t = useTranslations("Header");
  const interest: string[] = t("interest").split(", ");

  const { theme, resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="relative flex h-screen items-center justify-center">
      <div className="container mb-24 flex flex-col items-center justify-center gap-10 px-4 md:mb-0 md:px-6 lg:flex-row lg:gap-16">
        <div className="absolute right-0 top-0 m-8 flex flex-row justify-center gap-4">
          <button
            onClick={() => {
              setTheme(resolvedTheme === "light" ? "dark" : "light");
            }}
            type="button"
            className="btn btn-primary"
            aria-label="Toggle theme"
          >
            {resolvedTheme === "light" ? <SunIcon /> : <MoonIcon />}
          </button>
          <LocalSwitcher />
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="mb-2 text-3xl font-bold tracking-tighter sm:text-5xl">
              {t("title-top")}
              <span className="block">{t("title-bottom")}</span>
            </h1>
            <span className="max-w-[600px] md:text-xl">
              {t("description")}
              <WordRotate
                className="inline-flex w-full text-left font-bold leading-none tracking-tighter"
                words={interest}
              />
            </span>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              href="#projects"
              className={cn(
                buttonVariants({
                  size: "lg",
                }),
                "gap-2 whitespace-pre md:flex",
                "group relative gap-1 overflow-hidden rounded-full text-base font-semibold tracking-tighter",
                "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2",
              )}
            >
              {t("works")}
              <ChevronRight className="h-4 w-4 translate-x-0 transform transition-all duration-300 ease-out group-hover:translate-x-1" />
            </Link>
            <Link
              href="mailto:lcorre.pro@gmail.com"
              target="_blank"
              className={cn(
                buttonVariants({
                  variant: "secondary",
                  size: "lg",
                }),
                "gap-2 whitespace-pre md:flex",
                "group relative gap-1 overflow-hidden rounded-full text-base font-semibold tracking-tighter",
              )}
            >
              {t("contact")}
              <ChevronRight className="h-4 w-4 translate-x-0 transform transition-all duration-300 ease-out group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="flex justify-center gap-x-1 pt-1 font-sans text-sm text-muted-foreground md:justify-normal print:hidden">
            <SocialLinks />
          </div>
        </div>

        <div className="relative hidden h-[500px] w-full max-w-[32rem] overflow-hidden rounded-lg bg-background lg:flex lg:items-center lg:justify-center">
          <OrbitingCircles
            className="h-[30px] w-[30px] border-none bg-transparent"
            duration={20}
            delay={14}
            radius={80}
          >
            <Icons.nextjs className="h-8 w-8" />
          </OrbitingCircles>
          <OrbitingCircles
            className="h-[30px] w-[30px] border-none bg-transparent"
            duration={20}
            delay={7}
            radius={80}
          >
            <Icons.react className="h-8 w-8" />
          </OrbitingCircles>
          <OrbitingCircles
            className="h-[50px] w-[50px] border-none bg-transparent"
            reverse
            radius={160}
            duration={20}
          >
            <Icons.drupal className="h-8 w-8" />
          </OrbitingCircles>
          <OrbitingCircles
            className="h-[50px] w-[50px] border-none bg-transparent"
            reverse
            radius={160}
            duration={20}
            delay={20}
          >
            <Icons.gitHub className="h-8 w-8" />
          </OrbitingCircles>

          <OrbitingCircles
            className="h-[50px] w-[50px] border-none bg-transparent"
            reverse
            radius={120}
            duration={10}
          >
            <Icons.tailwindcss className="h-8 w-8" />
          </OrbitingCircles>
        </div>
      </div>
      <a
        href="#hook"
        className="absolute bottom-8 mx-auto animate-bounce"
        aria-label="Go down to the hook section"
      >
        <ChevronsDown></ChevronsDown>
      </a>
    </section>
  );
}
