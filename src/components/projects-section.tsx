"use client";

import { useTranslations } from "next-intl";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const projects = [
  { key: "dancecircle", tags: ["React Native", "Social"] },
  { key: "trackmyspend", tags: ["AI", "Fintech"] },
  { key: "alexmobile", tags: ["Mobile", "Telecom"] },
  { key: "aiassistant", tags: ["RAG", "AI"] },
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
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
