import { Section } from "@telegram-apps/telegram-ui";
import { Language } from "@/components/Language.tsx";
import { useTranslation } from "react-i18next";
import { Page } from "@/components/Page.tsx";

export const SettingsPage = () => {
  const { t } = useTranslation();
  return (
    <Page title={t("settings")}>
      <Section header={t("language")}>
        <Language />
      </Section>
    </Page>
  );
};
