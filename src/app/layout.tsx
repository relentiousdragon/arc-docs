import { Inter } from 'next/font/google';
import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import type { Metadata, Viewport } from "next";
import { appDescription, appIcon, appName, appUri } from '@/lib/shared';
import { i18nProvider } from 'fumadocs-ui/i18n';
import { translations } from '@/lib/layout.shared';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(appUri),
  title: {
    template: `%s | ${appName}`,
    default: `${appName} Documentation`,
  },
  description: appDescription,
  icons: {
    icon: appIcon,
  },
  openGraph: {
    description: appDescription,
    images: appIcon,
  },
  twitter: {
    card: "summary",
    description: appDescription,
    images: appIcon,
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#192d46",
};

export default async function Layout({ params, children }: LayoutProps<'/[lang]'>) {
  const { lang } = await params;
  return (
    <html lang={lang} className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          i18n={i18nProvider(translations, lang)}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
