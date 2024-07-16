import { Badge, Cell, List, Section } from "@telegram-apps/telegram-ui";

export const TradesPage = () => {
  return (
    <Section header="Мои позиции">
      <List>
        <Cell>
          <Badge mode="primary" type="number">
            Тег 1
          </Badge>
        </Cell>
        <Cell>
          <Badge mode="primary" type="number">
            Тег 2
          </Badge>
        </Cell>
        <Cell>
          <Badge mode="primary" type="number">
            Тег 3
          </Badge>
        </Cell>
      </List>
    </Section>
  );
};
