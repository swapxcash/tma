import { Cell, List, Section } from "@telegram-apps/telegram-ui";

export const BalancePage = () => {
  return (
    <List>
      <Section header="Изменения баланса">
        <Cell>+500 пополнение баланса</Cell>
        <Cell>-50 (40 волотильность + 10 комиссия)</Cell>
      </Section>

      <Section header="Пополнение баланса">
        <Cell>Описание как пополнить баланс</Cell>
      </Section>
    </List>
  );
};
