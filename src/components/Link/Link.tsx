import { useCallback } from "react";
import WebApp from "@twa-dev/sdk";
import { Link as RouterLink, LinkProps } from "react-router-dom";
import "./Link.css";

interface LinkPropsExtend extends LinkProps {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export const Link: React.FC<LinkPropsExtend> = ({
  className,
  onClick: propsOnClick,
  to,
  ...rest
}): JSX.Element => {
  const onClick = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      propsOnClick?.(e);
      let path: string;
      if (typeof to === "string") {
        path = to;
      } else {
        const { search = "", pathname = "", hash = "" } = to;
        path = `${pathname}?${search}#${hash}`;
      }

      const targetUrl = new URL(path, window.location.toString());
      const currentUrl = new URL(window.location.toString());
      const isExternal =
        targetUrl.protocol !== currentUrl.protocol ||
        targetUrl.host !== currentUrl.host;
      if (isExternal) {
        e.preventDefault();
        return WebApp.openLink(targetUrl.toString());
      }
    },
    [to, propsOnClick],
  );

  return (
    <RouterLink
      {...rest}
      to={to}
      onClick={onClick}
      className={[className, "link"].filter(Boolean).join(" ")}
    />
  );
};
