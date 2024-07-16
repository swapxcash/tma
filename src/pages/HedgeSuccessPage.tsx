import { Button, Cell, Section } from "@telegram-apps/telegram-ui";
import { useNavigate } from "react-router-dom";

export const HedgeSuccessPage = () => {
  const navigate = useNavigate();
  return (
    <Section header="Trade Confirmation">
      <Cell>You sold 100 000 EUR USD ...</Cell>
      <div className="flex justify-center py-5">
        <Button size="l" onClick={() => navigate("/")}>
          Ok
        </Button>
      </div>
    </Section>
  );
};
