import { Cell, List, Section } from "@telegram-apps/telegram-ui";
import { useTranslation } from "react-i18next";

export const BalancePage = () => {
  const { t } = useTranslation();
  return (
    <List>
      <Section header={t("balance_change")}>
        <Cell>+500 пополнение баланса</Cell>
        <Cell>-50 (40 волотильность + 10 комиссия)</Cell>
      </Section>

      <Section header={t("balance_top_up")}>
        <Cell>Описание как пополнить баланс</Cell>
      </Section>
    </List>
  );
};
