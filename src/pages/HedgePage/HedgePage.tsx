import { Badge, Button, List, Section } from "@telegram-apps/telegram-ui";
import { useNavigate } from "react-router-dom";
import { Page } from "@/components/Page.tsx";
import { useTranslation } from "react-i18next";
import { Exchange } from "@/pages/HedgePage/components/Exchange.tsx";
import { useState } from "react";

export const HedgePage = () => {
  const navigate = useNavigate();
  const [activePosition, setActivePosition] = useState<string>();

  const Position = ({ name }: { name: string }) => (
    <Badge
      mode={activePosition === name ? "primary" : "secondary"}
      type="number"
      className="p-4 cursor-pointer"
      onClick={() => setActivePosition(name)}
    >
      {name}
    </Badge>
  );

  const { t } = useTranslation();
  return (
    <Page title={t("hedge")}>
      <Section>
        <Exchange />
        <Section header={t("position_title")}>
          <List className="p-4">
            <Position name="Roterdam" />
            <Position name="Germany" />
            <Position name="SP" />
            <Position name="Warsaw" />
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
    </Page>
  );
};
