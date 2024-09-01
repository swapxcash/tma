import { Cell, List, Section } from "@telegram-apps/telegram-ui";
import { useTranslation } from "react-i18next";
import { Page } from "@/components/Page.tsx";

export const BalancePage = () => {
  const { t } = useTranslation();
  return (
    <Page title={t("balance")}>
      <List>
        <Section header={t("balance_change")}>
          <Cell>+500 пополнение баланса</Cell>
          <Cell>-50 (40 волотильность + 10 комиссия)</Cell>
        </Section>

        <Section header={t("balance_top_up")}>
          <Cell>Описание как пополнить баланс</Cell>
        </Section>
      </List>
    </Page>
  );
};
