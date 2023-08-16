/* eslint-disable react/prop-types */
function CountryDetailList({ detailName, detailInfo }) {
  return (
    <li aria-label="country-detail-list">
      <strong className="text-xl font-semibold">{detailName}</strong>
      <span className="pl-1 text-xl font-medium ">{detailInfo}</span>
    </li>
  );
}

export default CountryDetailList;
