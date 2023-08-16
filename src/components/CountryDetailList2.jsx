/* eslint-disable react/prop-types */
function CountryDetailList2({ detailName, detailInfo }) {
  return (
    <li aria-label="country-detail-list-2">
      <strong className="text-xl font-semibold ">{detailName}</strong>
      {detailInfo &&
        detailInfo.map((detail, i) => {
          return (
            <span className="pl-1 text-xl font-medium" key={i}>
              {detail.name ? detail.name : detail}{" "}
            </span>
          );
        })}
    </li>
  );
}

export default CountryDetailList2;
{
  /* <li>
<strong>Language</strong>
{country.languages &&
  country.languages.map((l, i) => {
    return <span key={i}>{l.name}</span>;
  })}
</li> */
}
