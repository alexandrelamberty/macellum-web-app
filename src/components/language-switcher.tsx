import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { useSelector } from "react-redux";

import { RootState } from "@/store/store";

const LanguageSwitcher = () => {
  const lang = useSelector((state: RootState) => state.settings.lang);
  return (
    <Select>
      <SelectTrigger className="w-[60px]">
        <SelectValue placeholder={lang} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
export default LanguageSwitcher;
