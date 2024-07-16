import { Cell, List, Section } from "@telegram-apps/telegram-ui";
import { Link } from "@/components/Link/Link.tsx";

export const StartPage = () => {
  return (
    <List>
      <Section>
        <Link to="/balance">
          <Cell subtitle="Ваш текущий баланс">Баланс</Cell>
        </Link>
        <Link to="/hedge">
          <Cell subtitle="! Опция доступна только при не нулевом балансе (каком?)">
            Хеджировать
          </Cell>
        </Link>
        <Link to="/trades">
          <Cell subtitle="! Опция доступна, когда более одной позиции">
            Мои позиции
          </Cell>
        </Link>
      </Section>
    </List>
  );
};
