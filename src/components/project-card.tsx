import { Badge } from "@/src/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { GlobeIcon } from "lucide-react";

import Link from "next/link";

interface Props {
  title: string;
  description: string;
  type: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
}

export function ProjectCard({
  title,
  description,
  type,
  tags,
  link,
  image,
  video,
  links,
}: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border p-2">
      {video && (
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="pointer-events-none mx-auto h-40 w-full object-cover object-top" // needed because random black line at bottom of video
        />
      )}
      {image && (
        <img
          src={image}
          className="h-40 w-full overflow-hidden object-cover object-top"
          alt={"Screenshot of the " + title + " project"}
        />
      )}
      <CardHeader className="">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          <time className="font-sans text-xs">{type}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <div className="max-w-full text-pretty font-sans text-xs text-muted-foreground">
            {description}
          </div>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter>
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                  <GlobeIcon className="h-4 w-4" />
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
