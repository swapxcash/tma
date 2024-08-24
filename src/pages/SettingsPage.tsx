import { Headline, List, Section } from "@telegram-apps/telegram-ui";
import { Language } from "@/components/Language.tsx";
import { useTranslation } from "react-i18next";

export const SettingsPage = () => {
  const { t } = useTranslation();
  return (
    <List>
      <Headline weight="3" style={{ padding: "10px 22px 0px" }}>
        {t("settings")}
      </Headline>
      <Section header={t("language")}>
        <Language />
      </Section>
    </List>
  );
};
