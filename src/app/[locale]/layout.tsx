import { TooltipProvider } from "@/src/components/ui/tooltip";
import { cn } from "@/src/lib/utils";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
import { Inter as FontSans } from "next/font/google";
import { notFound } from "next/navigation";
import getRequestConfig from "../../i18n";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Léo Corre · Portfolio",
  description:
    "Léo Corre · Développeur Web Full-Stack basé à Lyon. Je suis spécialisé dans la création de sites web sur mesure performants et innovants.",
};
interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}
export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const requestConfig = await getRequestConfig({ locale });

  if (!requestConfig || !requestConfig.messages) {
    notFound();
  }

  const { messages } = requestConfig;

  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={cn("bg-background font-sans antialiased", fontSans.variable)}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider defaultTheme="dark" attribute="class">
            <TooltipProvider>{children}</TooltipProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
