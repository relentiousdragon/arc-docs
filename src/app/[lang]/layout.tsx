import { source } from '@/lib/source';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { i18nProvider } from 'fumadocs-ui/i18n';
import { translationsAPI } from '@/lib/translations';
import { baseOptions } from '@/lib/layout.shared';
import { DocsLayout } from '@/layouts/spacious';

export default async function Layout({ params, children }: LayoutProps<'/[lang]'>) {
  const { lang } = await params;
  return (
    <RootProvider
      i18n={i18nProvider(translationsAPI, lang)}
    >
      <DocsLayout {...baseOptions(lang)} tree={source.getPageTree(lang)}>
        {children}
      </DocsLayout>
    </RootProvider>
  );
}
