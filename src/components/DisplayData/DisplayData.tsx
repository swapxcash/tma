import { Cell, Checkbox, Section } from "@telegram-apps/telegram-ui";

import { RGB } from "@/components/RGB/RGB.tsx";
import { Link } from "@/components/Link/Link.tsx";

import "./DisplayData.css";

import { ReactNode } from "react";

interface DisplayDataRow {
  title: string;
  value?: string | boolean | ReactNode;
}

export function DisplayData({
  header,
  rows,
}: {
  header: ReactNode;
  rows: DisplayDataRow[];
}) {
  return (
    <Section header={header}>
      {rows.map((item, idx) => {
        let valueNode;

        if (item.value === undefined) {
          valueNode = <i>empty</i>;
        } else {
          if ("type" in item) {
            // @ts-expect-error ignore
            valueNode = <Link to={item.value}>Open</Link>;
          } else if (typeof item.value === "string") {
            valueNode = item.value.match(/^#[a-f0-9]{3,6}$/i) ? (
              <RGB color={item.value} />
            ) : (
              item.value
            );
          } else if (typeof item.value === "boolean") {
            valueNode = <Checkbox checked={item.value} disabled />;
          } else {
            valueNode = item.value;
          }
        }

        return (
          <Cell
            className="display-data__line"
            subhead={item.title}
            readOnly
            multiline={true}
            key={idx}
          >
            <span className="display-data__line-value">{valueNode}</span>
          </Cell>
        );
      })}
    </Section>
  );
}
