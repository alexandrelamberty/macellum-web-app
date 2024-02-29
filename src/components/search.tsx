import { useIntl } from "react-intl";

import { Input } from "@/components/ui/input";

export function Search() {
    const intl = useIntl();
    return (
        <div>
            <Input
                type="search"
                placeholder={intl.formatMessage({
                    id: "search.placeholder",
                    defaultMessage: "Search",
                    description: "placeholder text",
                })}
                className="md:w-[100px] lg:w-[300px]"
            />
        </div>
    );
}
