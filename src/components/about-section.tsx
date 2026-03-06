"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

const clients = [
  { name: "Diageo", location: "London, UK" },
  { name: "CarTrawler", location: "Dublin, Ireland" },
  { name: "Justerinis", location: "London, UK" },
  { name: "Claro", location: "Bogotá, Colombia" },
  { name: "ME+EM", location: "London, UK" },
  { name: "SOAFEE", location: "UK" },
  { name: "IOPEX", location: "SF, CA" },
  { name: "Agnitu", location: "Puerto Rico" },
  { name: "DEPT", location: "Ireland / UK / Netherlands" },
  { name: "Daedalus Design Labs", location: "New York, NY" },
  { name: "IQ Outsourcing", location: "Bogotá, Colombia" },
  { name: "Digitalware", location: "Bogotá, Colombia" },
  { name: "Tatic", location: "Colombia" },
];

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

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-8 flex justify-center"
        >
          <Image
            src="/otto.jpg"
            alt="Otto Bonilla"
            width={180}
            height={180}
            className="rounded-full object-cover"
            priority
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-8 text-lg leading-relaxed text-muted-foreground"
        >
          {t("bio")}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-4 text-lg font-medium text-foreground"
        >
          {t("reach")}
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
              <Badge key={client.name} variant="outline" className="text-sm">
                {client.name} — {client.location}
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
