import { useTranslation } from "react-i18next";
import { Cell, Selectable } from "@telegram-apps/telegram-ui";
import { languages } from "@/constants";

export const Language = () => {
  const {
    i18n: { changeLanguage, language },
  } = useTranslation();

  const handleLanguageChange = (lng: string) => changeLanguage(lng);

  const getSelectable = (lang: string) => (
    <Selectable
      defaultChecked={language === lang}
      name="group"
      value={lang}
      onClick={() => handleLanguageChange(lang)}
    />
  );

  return (
    <form>
      {Object.values(languages).map(({ code, title }) => (
        <Cell Component="label" before={getSelectable(code)} multiline>
          {title}
        </Cell>
      ))}
    </form>
  );
};
