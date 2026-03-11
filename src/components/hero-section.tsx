"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 sm:px-6">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster=""
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/90" />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
        >
          {t("headline")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          {t("subtitle")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <Button asChild size="lg" className="text-base">
            <a href="#contact">
              {t("cta")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
