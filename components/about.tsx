export default function About() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="cursus">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              About me
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              In a few words
            </h2>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-full max-w-[800px] mx-auto">
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              I&apos;ve been a full-stack developer for over 3 years, and
              I&apos;m currently doing a work-study program to qualify as an IT
              and Information Systems Expert at the Ynov Lyon campus. Thanks to
              the wide range of technologies I master, I remain flexible for all
              types of projects.
            </p>
            <img
              src="/leo-corre.jpg"
              alt="Léo Corre"
              className="rounded-full w-40 mx-auto mt-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
