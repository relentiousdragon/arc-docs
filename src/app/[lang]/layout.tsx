import { source } from "@/lib/source";
import { baseOptions } from "@/lib/layout.shared";
import { DocsLayout } from "@/layouts/spacious";
import { Provider } from "@/components/provider";

export default async function Layout({
  params,
  children,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  return (
    <Provider lang={lang}>
      <DocsLayout {...baseOptions(lang)} tree={source.getPageTree(lang)}>
        {children}
      </DocsLayout>
    </Provider>
  );
}
