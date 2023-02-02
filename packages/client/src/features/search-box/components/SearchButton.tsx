import { MouseEventHandler } from "react";
import Icon from "../../../components/Icon";

interface SearchButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function SearchButton({ onClick }: SearchButtonProps) {
  const handleOnClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    onClick?.(e);
  };

  return (
    <button
      type="button"
      className="search-box__button"
      onClick={handleOnClick}
      role="button"
      title="Search Button"
    >
      <Icon name="ic_Search" alt="Search Button" />
    </button>
  );
}
