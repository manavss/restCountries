import { useNavigate, useParams } from "react-router";
import { useCountries } from "../context/CountriesContext";
import { Link } from "react-router-dom";
import CountryDetailList from "./CountryDetailList";
import CountryDetailList2 from "./CountryDetailList2";

function CountryDetails() {
  const { countryCode } = useParams();
  const { countries } = useCountries();
  const navigate = useNavigate();
  const country = countries.find((c) => {
    return c.alpha3Code === countryCode;
  });
  const borders = country.borders ? country.borders : [];
  const countryBorders = [];
  const borders2 = [];
  for (let i of countries) {
    if (borders.length > 0 && borders.includes(i.alpha3Code)) {
      countryBorders.push(i.name);
      borders2.push(i.alpha3Code);
    }
  }
  console.log(borders2, countryBorders);
  const data = [
    {
      detailName: "Native Name:",
      detailInfo: country.nativeName,
    },
    {
      detailName: "Population:",
      detailInfo: country.population,
    },
    {
      detailName: "Region:",
      detailInfo: country.region,
    },
    {
      detailName: "Sub region:",
      detailInfo: country.subregion,
    },
    {
      detailName: "Capital:",
      detailInfo: country.capital,
    },
  ];
  const data2 = [
    {
      detailName: "Top Level Domain",
      detailInfo: country.topLevelDomain,
    },
    {
      detailName: "Currencies:",
      detailInfo: country.currencies,
    },
    {
      detailName: "Languages:",
      detailInfo: country.languages,
    },
  ];

  // console.log(country);
  return (
    <div
      aria-label="country-details"
      className=" dark:bg-colors-darkBlueBg flex items-center justify-center dark:text-white"
    >
      <div className=" flex flex-col gap-y-20 px-10 py-10  md:overflow-hidden md:px-40 md:py-20">
        <button
          onClick={() => navigate(-1)}
          className="flex w-fit rounded-md  px-8 py-3 shadow-md hover:shadow-lg dark:dark:bg-colors-darkBlue dark:text-white hover:dark:bg-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w- h-6 pr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          <span>Back</span>
        </button>
        <div className="flex flex-col gap-y-10   md:h-full md:flex-row  md:gap-x-32 ">
          <div className="space-y-20">
            <img
              className=" max-h-[400px] max-w-xs md:max-w-lg lg:max-w-full"
              src={country.flag}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-y-10 ">
            <h1 className="text-3xl font-extrabold">{country.name}</h1>
            <ul className=" flex flex-col gap-y-10 md:flex-row md:gap-x-40 ">
              <div className="space-y-2 ">
                {data.map((c, i) => {
                  return (
                    <CountryDetailList
                      key={i}
                      detailName={c.detailName}
                      detailInfo={c.detailInfo}
                    />
                  );
                })}
              </div>
              <div className="space-y-2">
                {data2.map((d, i) => {
                  return (
                    <CountryDetailList2
                      key={i}
                      detailName={d.detailName}
                      detailInfo={d.detailInfo}
                    />
                  );
                })}
              </div>
            </ul>
            <div className=" pt-10">
              <h2 className="pb-5 text-xl font-semibold">Border Countries:</h2>
              <div className="flex flex-wrap gap-x-3 gap-y-3">
                {country.borders ? (
                  borders2.map((b, i) => {
                    return (
                      <Link
                        className="flex w-fit items-center justify-center rounded-md px-10 py-3 shadow-md hover:shadow-lg dark:bg-colors-darkBlue hover:dark:bg-gray-700  "
                        key={i}
                        to={`/details/${b}`}
                      >
                        {countryBorders[i]}
                      </Link>
                    );
                  })
                ) : (
                  <span>None</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
