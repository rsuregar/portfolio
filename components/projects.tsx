import { GlobeIcon } from "lucide-react";
import { ProjectCard } from "./project-card";

const projects = [
  {
    title: "Bo Santé",
    type: "Personal project",
    active: true,
    description:
      "Creation of a showcase site. The aim is to present the various services offered by Bo Santé.",
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
    type: "School project",
    active: false,
    description:
      "Web application enabling companies to manage employee complaints securely and anonymously.",
    technologies: ["Laravel", "Vue.js", "Inertia.js", "TailwindCSS"],
    links: [],
    image: "/images/safe-area.webp",
    video: "",
  },
];

export default function Projects() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="projects">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              My Projects
            </h2>
            <h3 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Check out my latest works
            </h3>
            <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I&apos;ve worked on a variety of projects, from simple websites to
              complex web applications. Here are a few of my favorites.
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
