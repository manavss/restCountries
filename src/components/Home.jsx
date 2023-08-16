import SearchAndFilter from "./SearchAndFilter";
import MainPage from "./MainPage";
import Spinner from "./Spinner";
import { useCountries } from "../context/CountriesContext";
function Home() {
  const { loading } = useCountries();

  return (
    <div aria-label="home" role="home" className="h-screen">
      <SearchAndFilter />
      {loading ? <Spinner /> : <MainPage />}
    </div>
  );
}

export default Home;
