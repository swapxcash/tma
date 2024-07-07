import { List } from "@telegram-apps/telegram-ui";
import WebApp from "@twa-dev/sdk";

import { DisplayData } from "@/components/DisplayData/DisplayData.tsx";

/**
 * @returns {JSX.Element}
 */
export function LaunchParamsPage() {
  return (
    <List>
      <DisplayData
        header="LaunchParamsPage"
        rows={[
          { title: "tgWebAppPlatform", value: WebApp.platform },
          { title: "tgWebAppVersion", value: WebApp.version },
          {
            title: "tgWebAppStartParam",
            value: WebApp.initDataUnsafe?.start_param,
          },
          { title: "tgWebAppData", value: "/init-data" },
          {
            title: "tgWebAppThemeParams",
            value: "/theme-params",
          },
        ]}
      />
    </List>
  );
}
