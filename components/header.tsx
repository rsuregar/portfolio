"use client";
import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { ChevronRight, ChevronsDown } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Icons } from "./icons";
import OrbitingCircles from "./magicui/orbiting-circles";
import WordRotate from "./magicui/word-rotate";
import SocialLinks from "./socialLinks";
import { buttonVariants } from "./ui/button";

export default function Header() {
  const { resolvedTheme, theme, setTheme } = useTheme();
  return (
    <section className="flex h-screen items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-10 px-4 md:px-6 lg:flex-row lg:gap-16">
        <button
          onClick={() => {
            setTheme(resolvedTheme === "light" ? "dark" : "light");
          }}
          type="button"
          className="btn btn-primary absolute right-0 top-0 m-8"
          aria-label="Toggle theme"
        >
          {theme === "light" ? <SunIcon /> : <MoonIcon />}
        </button>
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="mb-2 text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Hi, I&apos;m Léo Corre 👋
            </h1>
            <span className="max-w-[600px] md:text-xl">
              I&apos;m a passionate software engineer with an interest in
              <WordRotate
                className="inline-flex w-full text-left font-bold leading-none tracking-tighter"
                words={[
                  "Web Development.",
                  "UI/UX Design.",
                  "Frontend Frameworks.",
                  "Backend Architectures.",
                  "SEO Strategies.",
                  "Web Performance Optimization.",
                  "Responsive Design.",
                  "Web Accessibility.",
                  "JavaScript Libraries.",
                ]}
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
              View My Works
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
              Contact Me
              <ChevronRight className="h-4 w-4 translate-x-0 transform transition-all duration-300 ease-out group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="flex gap-x-1 pt-1 font-sans text-sm text-muted-foreground print:hidden">
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
        className="absolute bottom-0 mx-auto mb-8 animate-bounce"
        aria-label="Go down to the hook section"
      >
        <ChevronsDown></ChevronsDown>
      </a>
    </section>
  );
}
