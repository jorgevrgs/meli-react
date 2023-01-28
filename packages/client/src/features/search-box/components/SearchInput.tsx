import { MouseEventHandler, useState } from "react";
import SearchButton from "./SearchButton";

interface SearchBoxInputProps {
  onSearch?: (value: string) => void;
}

export default function SearchBoxInput({ onSearch }: SearchBoxInputProps) {
  const [value, setValue] = useState("");

  const emitSearch = () => {
    onSearch?.(value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      emitSearch();
    }
  };

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    emitSearch();
  };

  return (
    <>
      <input
        className="search-box__input"
        value={value}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        placeholder="Nunca dejes de buscar"
      />
      <SearchButton onClick={handleClick} />
    </>
  );
}
