import {
  Section,
  Cell,
  List,
  Placeholder,
  Banner,
  Modal,
  Button,
} from "@telegram-apps/telegram-ui";

import { Link } from "@/components/Link/Link.tsx";

import "./IndexPage.css";
import WebApp from "@twa-dev/sdk";
import { allowedUserNicknames } from "@/constants/users.ts";
import { BsSignStop } from "react-icons/bs";

export function IndexPage() {
  const { user } = WebApp.initDataUnsafe;
  if (!user?.username || !allowedUserNicknames.includes(user?.username)) {
    return (
      <Banner
        before={<BsSignStop className="text-red-600 size-10" />}
        header="You don't have acces to the app"
        subheader="Contact with support team to get access"
        type="section"
      ></Banner>
    );
  }

  return (
    <List>
      <div className="HIJtihMA8FHczS02iWF5">
        <Placeholder
          description={`Your ID is ${user?.id ?? "unknown"}`}
          header={`Hi ${user?.username ?? "there"}`}
        >
          <img
            alt="Telegram sticker"
            className="blt0jZBzpxuR4oDhJc8s"
            src="https://xelene.me/telegram.gif"
          />
        </Placeholder>
      </div>
      {/*<Section*/}
      {/*  header="Features"*/}
      {/*  footer="You can use these pages to learn more about features, provided by Telegram Mini Apps and other useful projects"*/}
      {/*>*/}
      {/*  <Link to="/ton-connect">*/}
      {/*    <Cell*/}
      {/*      before={*/}
      {/*        <Image src={tonSvg} style={{ backgroundColor: "#007AFF" }} />*/}
      {/*      }*/}
      {/*      subtitle="Connect your TON wallet"*/}
      {/*    >*/}
      {/*      TON Connect*/}
      {/*    </Cell>*/}
      {/*  </Link>*/}
      {/*</Section>*/}
      <Section header="Application Launch Data" footer="Footer message">
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

        <div className="flex justify-center py-6">
          <Modal trigger={<Button size="m">Open modal</Button>}>
            <Placeholder description="Description" header="Title">
              <img
                alt="Telegram sticker"
                src="https://xelene.me/telegram.gif"
                style={{
                  display: "block",
                  height: "144px",
                  width: "144px",
                }}
              />
            </Placeholder>
          </Modal>
        </div>
      </Section>
    </List>
  );
}
