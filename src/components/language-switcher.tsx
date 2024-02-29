import * as React from "react";

import { CaretSortIcon } from "@radix-ui/react-icons";
import { CheckIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { RootState } from "@/store";
import { changeLanguage } from "@/store/actions/settings.actions";
import { cn } from "@/utils";

const languages = [
    {
        value: "en-us",
        label: "English",
    },
    {
        value: "fr-be",
        label: "Français",
    },
    {
        value: "nl-be",
        label: "Nederlands",
    },
];

export default function LanguageSwitcher() {
    const dispatch = useAppDispatch();
    const lang = useAppSelector((state: RootState) => state.settings.lang);
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(lang);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant="outline" role="combobox" aria-expanded={open} className="w-[140px] justify-between">
                    {value ? languages.find((language) => language.value === value)?.label : "Language..."}
                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandGroup>
                        {languages.map((language) => (
                            <CommandItem
                                key={language.value}
                                value={language.value}
                                onSelect={(currentValue) => {
                                    console.log(currentValue);
                                    dispatch(changeLanguage(currentValue));
                                    setValue(currentValue);
                                    setOpen(false);
                                }}
                            >
                                {language.label}
                                <CheckIcon
                                    className={cn(
                                        "ml-auto h-4 w-4",
                                        value === language.value ? "opacity-100" : "opacity-0",
                                    )}
                                />
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
