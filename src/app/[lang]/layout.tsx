import { source } from '@/lib/source';
import { baseOptions } from '@/lib/layout.shared';
// import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { DocsLayout } from '@/layouts/spacious';

export default async function Layout({ params, children }: LayoutProps<'/[lang]'>) {
  const { lang } = await params;
  return (
    <DocsLayout {...baseOptions(lang)} tree={source.getPageTree(lang)}>
      {children}
    </DocsLayout>
  );
}
