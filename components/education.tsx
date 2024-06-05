const work = [
  {
    enterprise: "Micropole · Work-study",
    logo: "/images/logo-micropole-lyon.jpeg",
    position: "Research engineer",
    years: "2022 - Today",
  },
  {
    enterprise: "XEFI · CDI",
    logo: "/images/logo-xefi-lyon.png",
    position: "Analysis · Developer",
    years: "2021 - 2022",
  },
  {
    enterprise: "XEFI · Work-study",
    logo: "/images/logo-xefi-lyon.png",
    position: "Analysis · Developer",
    years: "2020 - 2021",
  },
];
import Image from "next/image";
import { BorderBeam } from "./magicui/border-beam";

const school = [
  {
    school: "YNOV · Mastère",
    logo: "/images/logo-ynov-lyon.png",
    title: "Expert in web development",
    years: "2022 - Today",
  },
  {
    school: "EPSI · Bachelor",
    logo: "/images/logo-epsi-lyon.png",
    title: "Application design and development",
    years: "2020 - 2021",
  },
  {
    school: "Lycée Louis Rascol · BTS",
    logo: "/images/logo-rascol-albi.jpeg",
    title: "Digital Systems, IT and Networks",
    years: "2018 - 2020",
  },
];

export default function Education() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="education">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              My cursus
            </h2>
            <h3 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Discover my cursus
            </h3>
          </div>
        </div>
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-3 md:grid-cols-2">
          <ol className="relative flex h-full flex-col justify-center overflow-hidden rounded-lg border p-2">
            <li>
              <h4 className="mt-2 rounded-lg px-3 py-1 text-base/relaxed xl:text-lg/relaxed">
                Experiences
              </h4>
            </li>
            {work.map((x) => (
              <li key={`${x.enterprise}-${x.years}`}>
                <div className="m-3 flex flex-row items-center gap-2 rounded-lg border p-2">
                  <div className="relative h-12 w-12 shrink-0">
                    <Image
                      className="rounded-full border"
                      src={x.logo}
                      alt={x.enterprise + " logo"}
                      fill={true}
                      sizes="192px"
                    />
                  </div>
                  <div className="mx-2 w-full font-sans text-sm/relaxed xl:text-base/relaxed">
                    <p className="font-bold">{x.enterprise}</p>
                    <p>{x.position}</p>
                    <p>{x.years}</p>
                  </div>
                </div>
              </li>
            ))}
            <BorderBeam size={300} duration={12} delay={18} />
          </ol>
          <ol className="relative flex h-full flex-col justify-center overflow-hidden rounded-lg border p-2">
            <li>
              <h4 className="mt-2 rounded-lg px-3 py-1 text-base/relaxed xl:text-lg/relaxed">
                Formations
              </h4>
            </li>
            {school.map((x) => (
              <li key={`${x.school}-${x.years}`}>
                <div className="m-3 flex flex-row items-center gap-2 rounded-lg border p-2">
                  <div className="relative h-12 w-12 shrink-0">
                    <Image
                      className="rounded-full border"
                      src={x.logo}
                      alt={x.school + " logo"}
                      fill={true}
                      sizes="192px"
                    />
                  </div>
                  <div className="mx-2 w-full font-sans text-sm/relaxed xl:text-base/relaxed">
                    <p className="font-bold">{x.school}</p>
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
