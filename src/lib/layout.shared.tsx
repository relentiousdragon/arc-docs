import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { i18n } from '@/lib/i18n';
import { uiTranslations } from 'fumadocs-ui/i18n';
import { appIcon, appName, appWebsite, gitConfig } from './shared';

export const translations = i18n
  .translations()
  .extend(uiTranslations())
  .add({
    en: {
      displayName: 'English',
    },
    fr: {
      displayName: 'French',
    },
    de: {
      displayName: 'Deutsch',
    }
  });

export function baseOptions(locale: string): BaseLayoutProps {
  return {
    nav: {
      title: <>
        <img
          src={appIcon}
          alt=""
          width={24}
          height={24}
          className="rounded"
        />
        {appName}
      </>,
    },
    links: [
      {
        text: "Discord Server",
        url: `${appWebsite}/invite`,
        external: true,
      },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    i18n: true,
  };
}
