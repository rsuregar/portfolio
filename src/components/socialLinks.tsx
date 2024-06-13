import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/src/components/ui/tooltip";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { MailIcon } from "lucide-react";
import { Button } from "./ui/button";

const contact = {
  email: "lcorre.pro@gmail.com",
  social: [
    {
      name: "GitHub",
      url: "https://github.com/Sozokujin",
      icon: GitHubLogoIcon,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/lcorre/",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
          <title>LinkedIn</title>
          <path
            fill="currentColor"
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          />
        </svg>
      ),
    },
    {
      name: "X",
      url: "https://x.com/Sozokujin_",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
          <title>X</title>
          <path
            fill="currentColor"
            d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
          />
        </svg>
      ),
    },
    {
      name: "Discord",
      url: "https://discord.gg/tpeXwaa4wx",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
          <title>Discord</title>
          <path
            fill="currentColor"
            d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
          ></path>
        </svg>
      ),
    },
  ],
};

export default function SocialLinks() {
  return (
    <>
      {contact.email ? (
        <Tooltip>
          <TooltipTrigger>
            <Button
              className="size-8"
              variant="outline"
              size="icon"
              aria-label="Send an email"
              asChild
            >
              <a href={`mailto:${contact.email}`} target="_blank">
                <MailIcon className="size-4" />
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Email</p>
          </TooltipContent>
        </Tooltip>
      ) : null}
      {contact.social.map((social) => (
        <Tooltip key={social.name}>
          <TooltipTrigger>
            <Button
              className="size-8"
              variant="outline"
              size="icon"
              aria-label="Link to my GitHub profile"
              asChild
            >
              <a href={social.url} target="_blank">
                <social.icon className="size-4" />
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{social.name}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </>
  );
}
