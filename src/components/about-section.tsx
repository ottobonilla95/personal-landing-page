"use client";

import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

const clients = ["Claro", "DEPT", "CarTrawler", "Justerinis"];

export function AboutSection() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold tracking-tight sm:text-4xl"
        >
          {t("title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-8 text-lg leading-relaxed text-muted-foreground"
        >
          {t("bio")}
        </motion.p>

        <Separator className="my-10" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold">{t("clientsTitle")}</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {clients.map((client) => (
              <Badge key={client} variant="outline" className="text-sm">
                {client}
              </Badge>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8"
        >
          <h3 className="text-lg font-semibold">{t("techTitle")}</h3>
          <p className="mt-2 text-muted-foreground">{t("tech")}</p>
        </motion.div>
      </div>
    </section>
  );
}
