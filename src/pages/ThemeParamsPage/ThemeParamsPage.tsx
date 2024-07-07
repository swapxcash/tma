import WebApp from "@twa-dev/sdk";
import { List } from "@telegram-apps/telegram-ui";

import { DisplayData } from "@/components/DisplayData/DisplayData.tsx";

export function ThemeParamsPage() {
  return (
    <List>
      <DisplayData
        header="ThemeParamsPage"
        rows={Object.entries(WebApp.themeParams).map(([title, value]) => ({
          title,
          value,
        }))}
      />
    </List>
  );
}
