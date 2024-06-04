const work = [
  {
    enterprise: "Micropole · Work-study",
    logo: "/logo-micropole-lyon.jpeg",
    position: "Research engineer",
    years: "2022 - Today",
  },
  {
    enterprise: "XEFI · CDI",
    logo: "/logo-xefi-lyon.png",
    position: "Analysis · Developer",
    years: "2021 - 2022",
  },
  {
    enterprise: "XEFI · Work-study",
    logo: "/logo-xefi-lyon.png",
    position: "Analysis · Developer",
    years: "2020 - 2021",
  },
];
import Image from "next/image";
import { BorderBeam } from "./magicui/border-beam";

const school = [
  {
    school: "YNOV · Mastère",
    logo: "/logo-ynov-lyon.png",
    title: "Expert in web development",
    years: "2022 - Today",
  },
  {
    school: "EPSI · Bachelor",
    logo: "/logo-epsi-lyon.png",
    title: "Application design and development",
    years: "2020 - 2021",
  },
  {
    school: "Lycée Louis Rascol · BTS",
    logo: "/logo-rascol-albi.jpeg",
    title: "Digital Systems, IT and Networks",
    years: "2018 - 2020",
  },
];

export default function Education() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="cursus">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              My cursus
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Discover my cursus
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 max-w-[1200px] mx-auto">
          <ol className="relative h-full border p-2 rounded-lg flex justify-center flex-col overflow-hidden">
            <p className="inline-block rounded-lg px-3 py-1 text-sm mx-auto mt-2">
              Experiences
            </p>

            {work.map((x) => (
              <li key={`${x.enterprise}-${x.years}`}>
                <div className="flex flex-row items-center gap-2 m-3 border p-2 rounded-lg">
                  <div className="relative shrink-0 h-12 w-12">
                    <Image
                      className="border rounded-full"
                      src={x.logo}
                      alt={"Logo de " + x.enterprise}
                      fill={true}
                      sizes="192px"
                    />
                  </div>

                  <div className="w-full font-sans text-xs/relaxed">
                    <p>{x.enterprise}</p>
                    <p>{x.position}</p>
                    <p>{x.years}</p>
                  </div>
                </div>
              </li>
            ))}
            <BorderBeam size={300} duration={12} delay={18} />
          </ol>
          <ol className="relative h-full border p-2 rounded-lg flex justify-center flex-col overflow-hidden">
            <p className="inline-block rounded-lg px-3 py-1 text-sm mx-auto mt-2">
              Formation
            </p>
            {school.map((x) => (
              <li key={`${x.school}-${x.years}`}>
                <div className="flex flex-row items-center gap-2 m-3 border p-2 rounded-lg">
                  <div className="relative shrink-0 h-12 w-12">
                    <Image
                      className="border rounded-full"
                      src={x.logo}
                      alt={"Logo de " + x.school}
                      fill={true}
                      sizes="192px"
                    />
                  </div>
                  <div className="w-full font-sans text-xs/relaxed">
                    <p>{x.school}</p>
                    <p>{x.title}</p>
                    <p>{x.years}</p>
                  </div>
                </div>
              </li>
            ))}
            <BorderBeam size={300} duration={12} delay={36} />
          </ol>
        </div>
      </div>
    </section>
  );
}
