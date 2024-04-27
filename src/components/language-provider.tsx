import { useEffect } from "react";

import { IntlProvider } from "react-intl";

import { useAppDispatch, useAppSelector } from "@/hooks/store";
import English from "@/lang/en.json";
import French from "@/lang/fr.json";
import { RootState } from "@/store";

import { updateMessages } from "../store/actions/settings.actions";
// const browserLocale = navigator.language;

const LanguageProvider = ({ children }: { children: React.JSX.Element }) => {
    const dispatch = useAppDispatch();
    const locale = useAppSelector((state: RootState) => state.settings.lang);
    const messages = useAppSelector((state: RootState) => state.settings.messages);

    useEffect(() => {
        if (locale === "en-us") {
            dispatch(updateMessages(English));
        }
        if (locale === "fr-be") {
            dispatch(updateMessages(French));
        }
    }, [dispatch, locale]);

    return (
        <IntlProvider messages={messages} locale={locale}>
            {children}
        </IntlProvider>
    );
};
export default LanguageProvider;
