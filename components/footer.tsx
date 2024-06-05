import SocialLinks from "./socialLinks";

export default function Footer() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="contact">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Get in Touch
          </h2>
          <div className="flex justify-center gap-x-1 pt-1 font-sans text-sm text-muted-foreground print:hidden">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
