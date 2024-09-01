import { PropsWithChildren } from "react";
import { Headline, List } from "@telegram-apps/telegram-ui";

export const Page = ({
  title,
  children,
}: PropsWithChildren<{ title?: string }>) => (
  <List>
    <Headline weight="3" style={{ padding: "10px 22px 0px" }}>
      {title}
    </Headline>
    {children}
  </List>
);
