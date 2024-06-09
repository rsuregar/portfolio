import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="about">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              {t("title")}{" "}
            </h2>
            <h3 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {t("subtitle")}
            </h3>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="mx-auto w-full max-w-[800px]">
            <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("description")}
            </p>
            <img
              src="/images/leo-corre.jpg"
              alt="Profile picture of Léo Corre Full-Stack Developer"
              className="mx-auto mt-12 w-40 rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
