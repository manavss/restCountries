import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function CountriesCard({
  image,
  alpha3Code,
  countryName,
  population,
  region,
  capital,
}) {
  return (
    <Link
      aria-label="country-card"
      to={`details/${alpha3Code}`}
      className="bg-dark-text mx-auto grid h-[360px] w-full max-w-xs cursor-pointer auto-rows-auto grid-rows-2 gap-4 overflow-hidden rounded-lg shadow-md outline-none transition-all hover:scale-105 hover:shadow-2xl focus:outline-none dark:bg-colors-darkBlue dark:text-white"
    >
      <img className=" h-full w-full" src={image} alt="" />
      <div className="flex flex-col items-start gap-y-2 p-5 ">
        <h1 className=" pb-2 text-xl font-extrabold">{countryName}</h1>
        <ul>
          <li className="space-x-2">
            <strong>Population:</strong>
            <span>{population}</span>
          </li>
          <li className="space-x-2">
            <strong>Region:</strong>
            <span>{region}</span>
          </li>
          <li className="space-x-2">
            <strong>Capital:</strong>
            <span>{capital ? capital : "Not Available"}</span>
          </li>
        </ul>
      </div>
    </Link>
  );
}

export default CountriesCard;
