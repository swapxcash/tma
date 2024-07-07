import {
  Section,
  Cell,
  Image,
  List,
  Placeholder,
} from "@telegram-apps/telegram-ui";

import { Link } from "@/components/Link/Link.tsx";

import tonSvg from "./ton.svg";

import "./IndexPage.css";
import WebApp from "@twa-dev/sdk";

export function IndexPage() {
  const { user } = WebApp.initDataUnsafe;
  console.log("initData", user);
  return (
    <List>
      <div className="HIJtihMA8FHczS02iWF5">
        <Placeholder
          description={`Your ID is ${user?.id ?? "unknown"}`}
          header={`Hi ${user?.username ?? "there"}!`}
        >
          <img
            alt="Telegram sticker"
            className="blt0jZBzpxuR4oDhJc8s"
            src="https://xelene.me/telegram.gif"
          />
        </Placeholder>
      </div>
      <Section
        header="Features"
        footer="You can use these pages to learn more about features, provided by Telegram Mini Apps and other useful projects"
      >
        <Link to="/ton-connect">
          <Cell
            before={
              <Image src={tonSvg} style={{ backgroundColor: "#007AFF" }} />
            }
            subtitle="Connect your TON wallet"
          >
            TON Connect
          </Cell>
        </Link>
      </Section>
      <Section
        header="Application Launch Data"
        footer="These pages help developer to learn more about current launch information"
      >
        <Link to="/init-data">
          <Cell subtitle="User data, chat information, technical data">
            Init Data
          </Cell>
        </Link>
        <Link to="/launch-params">
          <Cell subtitle="Platform identifier, Mini Apps version, etc.">
            Launch Parameters
          </Cell>
        </Link>
        <Link to="/theme-params">
          <Cell subtitle="Telegram application palette information">
            Theme Parameters
          </Cell>
        </Link>
      </Section>
    </List>
  );
}
