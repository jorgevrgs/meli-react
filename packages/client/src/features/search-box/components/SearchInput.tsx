import type { MouseEventHandler } from "react";
import { useEffect, useRef, useState } from "react";
import SearchButton from "./SearchButton";

interface SearchBoxInputProps {
  onSearch?: (value: string) => void;
}

export default function SearchBoxInput({ onSearch }: SearchBoxInputProps) {
  const [value, setValue] = useState("");
  const ref = useRef<HTMLInputElement>(null);

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

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <>
      <input
        className="search-box__input"
        value={value}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        placeholder="Nunca dejes de buscar"
        type="search"
        ref={ref}
      />
      <SearchButton onClick={handleClick} />
    </>
  );
}
