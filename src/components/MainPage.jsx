import { useCountries } from "../context/CountriesContext";
import CountriesCard from "./CountriesCard";
import NotFound from "./NotFound";

function MainPage() {
  const { countries, search, selectedValue } = useCountries();
  function list(arr) {
    return (
      arr &&
      arr.map((country, index) => {
        return (
          <CountriesCard
            key={index}
            alpha3Code={country.alpha3Code}
            countryName={country.name}
            population={country.population}
            capital={country.capital}
            region={country.region}
            image={country.flags.png}
          />
        );
      })
    );
  }
  function filterCountries(arr) {
    if (
      selectedValue &&
      ["Asia", "Europe", "Americas", "Polar", "Africa", "Oceania"].includes(
        selectedValue,
      )
    ) {
      return arr.filter((country) => country.region === selectedValue);
    }
    return arr;
  }
  const searchedCountries =
    search.length > 2
      ? countries.filter((country) =>
          country.name.toLowerCase().includes(search.toLowerCase()),
        )
      : countries;

  return (
    <div aria-label="main-page" role="main-page">
      <h1 className="bg-colors-lightModeBg px-[68px] text-lg font-normal text-colors-darkGray dark:bg-colors-darkModeBg dark:text-white">
        Total results:{searchedCountries.length}
      </h1>
      {searchedCountries.length > 0 ? (
        <ul className="z-10 grid gap-x-10 gap-y-16  bg-colors-lightModeBg p-8 dark:bg-colors-darkModeBg md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list(filterCountries(searchedCountries))}{" "}
        </ul>
      ) : (
        <NotFound />
      )}
    </div>
  );
}

export default MainPage;
