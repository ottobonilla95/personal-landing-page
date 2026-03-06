"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Menu,
  Globe,
  Briefcase,
  FolderOpen,
  User,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useState } from "react";

export function Navigation() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const switchLocale = () => {
    const next = locale === "en" ? "es" : "en";
    router.replace(pathname, { locale: next });
  };

  const sections = [
    { href: "#services", label: t("services"), icon: Briefcase },
    { href: "#projects", label: t("projects"), icon: FolderOpen },
    { href: "#about", label: t("about"), icon: User },
    { href: "#contact", label: t("contact"), icon: MessageCircle },
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
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 px-0">
              <SheetHeader className="px-6 pb-2">
                <SheetTitle className="text-left text-xl tracking-tight">
                  Otto Bonilla
                </SheetTitle>
              </SheetHeader>
              <Separator />
              <nav className="flex flex-col gap-1 px-3 py-4">
                {sections.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.href}
                      href={s.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center gap-3 rounded-lg px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      <Icon className="h-5 w-5" />
                      {s.label}
                      <ArrowRight className="ml-auto h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  );
                })}
              </nav>
              <Separator />
              <SheetFooter className="px-6 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={switchLocale}
                  className="w-full gap-2"
                >
                  <Globe className="h-4 w-4" />
                  {locale === "en" ? "Español" : "English"}
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
