import Header from "@/components/Header/Header";
import MoviesList from "@/components/MoviesList/MoviesList";
import { MoviesProvider } from "@/context/MoviesContext";

function App() {
  return (
    <MoviesProvider>
      <Header />
      <MoviesList />
    </MoviesProvider>
  );
}

export default App;
