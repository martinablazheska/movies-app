import Header from "@/components/Header/Header";
import MoviesList from "@/components/MoviesList/MoviesList";
import { MoviesProvider } from "@/context/MoviesContext";

function App() {
  return (
    <MoviesProvider>
      <div className="h-screen flex flex-col overflow-hidden">
        <Header />
        <MoviesList />
      </div>
    </MoviesProvider>
  );
}

export default App;
