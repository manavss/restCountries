import { useCountries } from "../context/CountriesContext";

function NotFound() {
  const { search } = useCountries();
  return (
    <div
      role="not-found"
      aria-label="not-found"
      className="flex items-center justify-center pt-32 text-3xl font-bold"
    >
      No match found for {search}😿.
    </div>
  );
}

export default NotFound;
