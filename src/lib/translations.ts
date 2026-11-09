import { i18n } from '@/lib/i18n';
import { uiTranslations } from 'fumadocs-ui/i18n';
import translations from "./translations.json";

export const translationsAPI = i18n
  .translations()
  .extend(uiTranslations())
  .add(translations);
