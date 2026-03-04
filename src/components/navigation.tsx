"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Moon, Sun, Globe } from "lucide-react";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useState } from "react";

export function Navigation() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const switchLocale = () => {
    const next = locale === "en" ? "es" : "en";
    router.replace(pathname, { locale: next });
  };

  const sections = [
    { href: "#services", label: t("services") },
    { href: "#projects", label: t("projects") },
    { href: "#about", label: t("about") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#" className="text-lg font-bold tracking-tight">
          Otto Bonilla
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {sections.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {s.label}
            </a>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={switchLocale}
            aria-label="Switch language"
          >
            <Globe className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
        </div>

        {/* Mobile nav */}
        <div className="flex items-center gap-1 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={switchLocale}
            aria-label="Switch language"
          >
            <Globe className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <div className="mt-8 flex flex-col gap-4">
                {sections.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium text-foreground"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
