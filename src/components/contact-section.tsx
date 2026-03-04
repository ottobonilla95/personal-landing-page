"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Linkedin } from "lucide-react";

export function ContactSection() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="bg-muted/50 py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          {t("title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-lg text-muted-foreground"
        >
          {t("subtitle")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button asChild size="lg">
            <a
              href="https://wa.me/353830894852"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              {t("whatsapp")}
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="mailto:otto.bonilla.dev@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              {t("email")}
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a
              href="https://www.linkedin.com/in/otto-bonilla-93a786119/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              {t("linkedin")}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
