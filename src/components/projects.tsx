import { GlobeIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { ProjectCard } from "./project-card";

export default function Projects() {
  const t = useTranslations("Projects");
  const projects = [
    {
      title: "Bo Santé",
      type: t("BoSante.type"),
      active: true,
      description: t("BoSante.description"),
      technologies: ["Next.js", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://bo-sante.fr",
          icon: <GlobeIcon className="h-4 w-4" />,
        },
      ],
      image: "/images/bo-sante.png",
      video: "",
    },
    {
      title: "Safe Area",
      type: t("SafeArea.type"),
      active: false,
      description: t("SafeArea.description"),
      technologies: ["Laravel", "Vue.js", "Inertia.js", "TailwindCSS"],
      links: [],
      image: "/images/safe-area.webp",
      video: "",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="projects">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              {t("title")}
            </h2>
            <h3 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {t("subtitle")}
            </h3>
            <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("description")}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-3 md:grid-cols-2">
          {projects.map((project, id) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              type={project.type}
              tags={project.technologies}
              image={project.image}
              video={project.video}
              links={project.links}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
