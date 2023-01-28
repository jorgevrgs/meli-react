import { useState } from "react";

export default function SearchBoxInput() {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <input
      className="search-box__input"
      value={value}
      onChange={handleChange}
      placeholder="Nunca dejes de buscar"
    />
  );
}
