"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Mail,
  Linkedin,
  Twitter,
  Send,
  CheckCircle,
  Loader2,
} from "lucide-react";

export function ContactSection() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [budget, setBudget] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      description: formData.get("description"),
      budget,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-muted/50 py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-10"
        >
          {status === "success" ? (
            <div className="flex flex-col items-center gap-4 rounded-lg border bg-card p-10 text-center">
              <CheckCircle className="h-12 w-12 text-green-500" />
              <h3 className="text-xl font-semibold">{t("form.successTitle")}</h3>
              <p className="text-muted-foreground">{t("form.successMessage")}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 rounded-lg border bg-card p-6 sm:p-8">
              <div className="space-y-2">
                <Label htmlFor="name">{t("form.name")}</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder={t("form.namePlaceholder")}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{t("form.email")}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder={t("form.emailPlaceholder")}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">{t("form.description")}</Label>
                <Textarea
                  id="description"
                  name="description"
                  required
                  rows={4}
                  placeholder={t("form.descriptionPlaceholder")}
                />
              </div>

              <div className="space-y-2">
                <Label>{t("form.budget")}</Label>
                <Select value={budget} onValueChange={setBudget} required>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={t("form.budgetPlaceholder")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="< $1,000">{t("form.budgetOptions.under1k")}</SelectItem>
                    <SelectItem value="$1,000 – $5,000">{t("form.budgetOptions.1kTo5k")}</SelectItem>
                    <SelectItem value="$5,000 – $20,000">{t("form.budgetOptions.5kTo20k")}</SelectItem>
                    <SelectItem value="$20,000+">{t("form.budgetOptions.over20k")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {status === "error" && (
                <p className="text-sm text-destructive">{t("form.error")}</p>
              )}

              <Button type="submit" size="lg" className="w-full" disabled={status === "loading"}>
                {status === "loading" ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Send className="mr-2 h-4 w-4" />
                )}
                {t("form.submit")}
              </Button>
            </form>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-8"
        >
          <p className="mb-4 text-center text-sm text-muted-foreground">
            {t("orReachOut")}
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button asChild variant="outline" size="lg">
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
              <a href="mailto:mr.bonilla51@gmail.com">
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
            <Button asChild variant="outline" size="lg">
              <a
                href="https://x.com/ottobonilla95"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="mr-2 h-4 w-4" />
                {t("x")}
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
