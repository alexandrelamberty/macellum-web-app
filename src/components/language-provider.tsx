import { useEffect } from "react";

import { IntlProvider } from "react-intl";
import { useDispatch, useSelector } from "react-redux";

import English from "@/lang/en.json";
import French from "@/lang/fr.json";
import { RootState } from "@/store/store";

import { updateLocales } from "../store/actions/settings.actions";

// const browserLocale = navigator.language;

const LanguageProvider = ({ children }: { children: React.JSX.Element }) => {
  const dispatch = useDispatch();
  const locale = useSelector((state: RootState) => state.settings.lang);
  const messages = useSelector((state: RootState) => state.settings.messages);

  useEffect(() => {
    if (locale === "en") {
      dispatch(updateLocales(English));
    }
    if (locale === "en") {
      dispatch(updateLocales(French));
    }
  });

  return (
    <IntlProvider messages={messages} locale={locale}>
      {children}
    </IntlProvider>
  );
};
export default LanguageProvider;
