import { Cell, List, Section } from "@telegram-apps/telegram-ui";
import { Link } from "@/components/Link/Link.tsx";
import { useTranslation } from "react-i18next";

export const StartPage = () => {
  const { t } = useTranslation();
  return (
    <List>
      <Section>
        <Link to="/balance">
          <Cell subtitle={t("current_balance")}>{t("balance")}</Cell>
        </Link>
        <Link to="/hedge">
          <Cell subtitle="! Опция доступна только при не нулевом балансе (каком?)">
            {t("hedge")}
          </Cell>
        </Link>
        <Link to="/trades">
          <Cell subtitle="! Опция доступна, когда более одной позиции">
            {t("my_positions")}
          </Cell>
        </Link>
        <Link to="/settings">
          <Cell>{t("settings")}</Cell>
        </Link>
      </Section>
    </List>
  );
};
