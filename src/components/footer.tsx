"use client";

import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t py-8 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Otto Bonilla. {t("rights")}
      </div>
    </footer>
  );
}
