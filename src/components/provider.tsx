"use client";
import { type ReactNode } from "react";
import SearchDialog from "@/components/search";
import { RootProvider } from "fumadocs-ui/provider/next";
import { i18nProvider } from "fumadocs-ui/i18n";
import { translationsAPI } from "@/lib/translations";

export function Provider({
  children,
  lang,
}: {
  children: ReactNode;
  lang: string;
}) {
  return (
    <RootProvider
      search={{ SearchDialog }}
      i18n={i18nProvider(translationsAPI, lang)}
    >
      {children}
    </RootProvider>
  );
}
