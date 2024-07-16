import {
  Badge,
  Button,
  Cell,
  Input,
  List,
  Section,
} from "@telegram-apps/telegram-ui";
import { useNavigate } from "react-router-dom";

export const HedgePage = () => {
  const navigate = useNavigate();
  return (
    <Section header="Хеджировать">
      <div>
        <Input header="EUR" placeholder="amount eur" className="grow" />
        <Input header="USD" placeholder="amount usd" className="grow" />
      </div>
      <Section header="Тег">
        <List>
          <Cell>
            <Badge mode="primary" type="number">
              Тег 1
            </Badge>
            <Badge mode="primary" type="number">
              Тег 2
            </Badge>
            <Badge mode="primary" type="number">
              Тег 3
            </Badge>
            <Badge mode="primary" type="number">
              Тег 4
            </Badge>
          </Cell>
        </List>
      </Section>
      <div className="flex justify-center py-10">
        <Button
          mode="filled"
          size="l"
          onClick={() => navigate("/hedge-success")}
        >
          Продать
        </Button>
      </div>
    </Section>
  );
};
