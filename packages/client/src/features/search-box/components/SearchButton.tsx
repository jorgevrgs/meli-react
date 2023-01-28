import { MouseEventHandler } from "react";

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
    >
      <img
        srcSet="/images/ic_Search.png, /images/ic_Search@2x.png 2x"
        src="/images/ic_Search.png"
        alt="Search Button"
      />
    </button>
  );
}
