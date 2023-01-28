export default function SearchButton() {
  return (
    <button type="button" className="search-box__button">
      <img
        srcSet="/images/ic_Search.png, /images/ic_Search@2x.png 2x"
        src="/images/ic_Search.png"
        alt="Search Button"
      />
    </button>
  );
}
