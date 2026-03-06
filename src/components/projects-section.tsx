"use client";

import { useTranslations } from "next-intl";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    key: "iopex",
    tags: ["AI", "Automation", "BPO"],
    url: "https://www.iopex.com/",
  },
  {
    key: "justerinis",
    tags: ["Next.js", "E-commerce", "Luxury"],
    url: "https://www.justerinis.com/",
  },
  {
    key: "cartrawler",
    tags: ["React", "Portal", "Travel"],
    url: "https://corporate.cartrawler.com/en-gb/",
  },
  {
    key: "soafee",
    tags: ["Migration", "Next.js", "Automotive"],
    url: "https://www.soafee.io/",
  },
  {
    key: "meandem",
    tags: ["Next.js", "E-commerce", "Fashion"],
    url: "https://www.meandem.com/int",
  },
  {
    key: "bondmedia",
    tags: ["Next.js", "Media", "Creative"],
    url: "https://bondmediastudios.com/",
  },
  {
    key: "agnitu",
    tags: ["React", "SaaS"],
    url: "https://www.agnitu.com/",
  },
  {
    key: "claro",
    tags: ["React", "Telecom"],
  },
  {
    key: "iqoutsourcing",
    tags: ["React", "BPO"],
    url: "https://www.iqoutsourcing.com/",
  },
  {
    key: "digitalware",
    tags: ["Enterprise", "Software"],
    url: "https://www.digitalware.com.co/",
  },
  {
    key: "tatic",
    tags: ["Web", "Consulting"],
    url: "https://tatic.net/es/",
  },
  { key: "dancecircle", tags: ["React Native", "Social"], url: "http://dancecircle.co/" },
  { key: "trackmyspend", tags: ["AI", "Fintech"], url: "https://www.trackmyspend.co" },
  { key: "alexmobile", tags: ["Mobile", "Telecom"] },
  { key: "jobmatch", tags: ["AI", "Matching"] },
] as const;

export function ProjectsSection() {
  const t = useTranslations("projects");

  return (
    <section id="projects" className="bg-muted/50 py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold tracking-tight sm:text-4xl"
        >
          {t("title")}
        </motion.h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full transition-shadow hover:shadow-lg">
                {"url" in project ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-xl">
                        {t(`${project.key}.title`)}
                        <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {t(`${project.key}.description`)}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>
                  </a>
                ) : (
                  <CardHeader>
                    <CardTitle className="text-xl">
                      {t(`${project.key}.title`)}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {t(`${project.key}.description`)}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
