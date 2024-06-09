import { useMessages, useTranslations } from "next-intl";
import Image from "next/image";
import { BorderBeam } from "./magicui/border-beam";

export default function Education() {
  const tEduc = useTranslations("Education");
  const t = useTranslations("Works");
  const tSchool = useTranslations("School");

  const messages = useMessages();
  const keysWorks = Object.keys(messages.Works);

  const keysEducation = Object.keys(messages.School);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="education">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              {tEduc("title")}
            </h2>
            <h3 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {tEduc("subtitle")}
            </h3>
          </div>
        </div>
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-3 md:grid-cols-2">
          <ol className="relative flex h-full flex-col justify-center overflow-hidden rounded-lg border p-2">
            <li>
              <h4 className="mt-2 rounded-lg px-3 py-1 text-base/relaxed xl:text-lg/relaxed">
                {tEduc("nameWork")}
              </h4>
            </li>
            {keysWorks.map((x) => (
              <li key={t(`${x}.enterprise`)}>
                <div className="m-3 flex flex-row items-center gap-2 rounded-lg border p-2">
                  <div className="relative h-12 w-12 shrink-0">
                    <Image
                      className="rounded-full border"
                      src={t(`${x}.logo`)}
                      alt={t(`${x}.enterprise`) + " logo"}
                      fill={true}
                      sizes="192px"
                    />
                  </div>
                  <div className="mx-2 w-full font-sans text-sm/relaxed xl:text-base/relaxed">
                    <p className="font-bold">{t(`${x}.enterprise`)}</p>
                    <p>{t(`${x}.position`)}</p>
                    <p>{t(`${x}.years`)}</p>
                  </div>
                </div>
              </li>
            ))}
            <BorderBeam size={300} duration={12} delay={18} />
          </ol>
          <ol className="relative flex h-full flex-col justify-center overflow-hidden rounded-lg border p-2">
            <li>
              <h4 className="mt-2 rounded-lg px-3 py-1 text-base/relaxed xl:text-lg/relaxed">
                {tEduc("nameFormation")}
              </h4>
            </li>
            {keysEducation.map((x) => (
              <li key={tSchool(`${x}.school`)}>
                <div className="m-3 flex flex-row items-center gap-2 rounded-lg border p-2">
                  <div className="relative h-12 w-12 shrink-0">
                    <Image
                      className="rounded-full border"
                      src={tSchool(`${x}.logo`)}
                      alt={tSchool(`${x}.school`) + " logo"}
                      fill={true}
                      sizes="192px"
                    />
                  </div>
                  <div className="mx-2 w-full font-sans text-sm/relaxed xl:text-base/relaxed">
                    <p className="font-bold">{tSchool(`${x}.school`)}</p>
                    <p>{tSchool(`${x}.title`)}</p>
                    <p>{tSchool(`${x}.years`)}</p>
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
